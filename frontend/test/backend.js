let urlMarketsize = `https://sheets.googleapis.com/v4/spreadsheets/1gg0k0ehDw_sskWxV8e-K5l-tZxvKr_H9-5SZlXN_qT4/values/marketsize?key=AIzaSyAGLAwV4t0vj6Fv-yc2uTEfae1-OsTvoA8`;
let urlExport = `https://sheets.googleapis.com/v4/spreadsheets/1gg0k0ehDw_sskWxV8e-K5l-tZxvKr_H9-5SZlXN_qT4/values/export?key=AIzaSyAGLAwV4t0vj6Fv-yc2uTEfae1-OsTvoA8`;
let urlImport = `https://sheets.googleapis.com/v4/spreadsheets/1gg0k0ehDw_sskWxV8e-K5l-tZxvKr_H9-5SZlXN_qT4/values/import?key=AIzaSyAGLAwV4t0vj6Fv-yc2uTEfae1-OsTvoA8`;
let urlPartners = `https://sheets.googleapis.com/v4/spreadsheets/1gg0k0ehDw_sskWxV8e-K5l-tZxvKr_H9-5SZlXN_qT4/values/partners?key=AIzaSyAGLAwV4t0vj6Fv-yc2uTEfae1-OsTvoA8`;

// execute(render, country1, country2, group);

function execute(render, country1, country2, group) {
    fetch(urlMarketsize)
        .then((response) => response.json())
        .then((hyMarksetsize) => {
            fetch(urlExport)
                .then((response) => response.json())
                .then((hyExport) => {
                    fetch(urlImport)
                        .then((response) => response.json())
                        .then((hyImport) => {
                            fetch(urlPartners)
                                .then((response) => response.json())
                                .then((hyPartners) => {
                                    hyExport = hyExport.slice(1);
                                    hyImport = hyImport.slice(1);
                                    hyPartners = hyPartners.slice(1);
                                    hyMarksetsize = hyMarksetsize.slice(1);

                                    hyScores = computeHyScore(hyExport, hyImport, hyPartners, hyMarksetsize, group);
                                    hyExport = convertHyExport(hyExport);
                                    hyImport = convertHyImport(hyImport);
                                    hyMarksetsize = convertHyMarketsize(hyMarksetsize);
                                    hyPartners = convertHyPartners(hyPartners);

                                    render(country1, country2, group, hyExport, hyMarketSize, hyImport, hyPartner, hyScores);
                                });
                        });
                });
        });
}

//////////////////////////////////////////////////
// RECENT

function getRecentHyPartner(hyPartners, buyer, seller) {
    recentYear = -1;
    recentRow = null;
    hyPartners.forEach((row) => {
        if (row[0] == buyer && row[1] == seller) {
            if (parseInt(row[2]) > recentYear) {
                recentYear = parseInt(row[2]);
                recentRow = row;
            }
        }
    });
    return recentRow;
}

function getRecentHyExport(hyExport, name, group) {
    recentYear = -1;
    recentRow = null;
    hyExport.forEach((row) => {
        if (row[0] == name && row[1] == group) {
            if (parseInt(row[2]) > recentYear) {
                recentYear = parseInt(row[2]);
                recentRow = row;
            }
        }
    });
    return recentRow;
}

function getRecentHyImport(hyImport, name, group) {
    recentYear = -1;
    recentRow = null;
    hyImport.forEach((row) => {
        if (row[0] == name && row[1] == group) {
            if (parseInt(row[2]) > recentYear) {
                recentYear = parseInt(row[2]);
                recentRow = row;
            }
        }
    });
    return recentRow;
}

function getRecentHyMarketsize(hyMarketsize, name, group) {
    recentYear = -1;
    recentRow = null;
    hyMarketsize.forEach((row) => {
        if (row[0] == name && row[1] == group) {
            if (parseInt(row[2]) > recentYear) {
                recentYear = parseInt(row[2]);
                recentRow = row;
            }
        }
    });
    return recentRow;
}

//////////////////////////////////////////////////
// HY SCORE

function computeDomesticMarketShare(hyExport, hyImport, hyMarketsize, name, group) {
    hyExport = getRecentHyExport(hyExport, name, group);
    if (hyExport == null) return -1;
    hyImport = getRecentHyImport(hyImport, name, group);
    if (hyImport == null) return -1;

    tradeBalance = parseFloat(hyExport[3]) - parseFloat(hyImport[3]);

    hyMarketsize = getRecentHyMarketsize(hyMarketsize, name, group);
    if (hyMarketsize == null) return -1;

    marketsize = parseFloat(hyMarketsize[3]);
    return (marketsize + tradeBalance) / marketsize;
}

function computeCompetition(hyPartners, hyMarketsize, name, group) {
    hyPartners = hyPartners.filter((row) => row[0] == name);

    num = 0;
    denom = 0;
    hyPartners.forEach((row) => {
        proportion = parseFloat(row[3]);
        hyMarketsize = getRecentHyMarketsize(hyMarketsize, name, group);
        if (hyMarketsize == null) return;
        marketsize = parseFloat(hyMarketsize[3]);

        num += proportion * marketsize;
        denom += proportion;
    });

    if (denom == 0) return -1;
    return num / denom;
}

function computeTradeDependency(hyMarketsize, hyImport, name, group) {
    hyMarketsize = getRecentHyMarketsize(hyMarketsize, name, group);
    if (hyMarketsize == null) return -1;
    hyImport = getRecentHyImport(hyImport, name, group);
    if (hyImport == null) return -1;

    return parseFloat(hyImport[3]) / parseFloat(hyMarketsize[3]);
}

function computeQuality(hyExport, name, group) {
    hyExport = getRecentHyExport(hyExport, name, group);
    if (hyExport == null) return -1;
    return parseFloat(hyExport[3]);
}

function comptueProtectionism(hyExport, hyImport, hyMarketsize, name, group) {
    domestic = computeDomesticMarketShare(hyExport, hyImport, hyMarketsize, name, group);
    if (domestic == -1) return -1;

    quality = computeQuality(hyExport, name, group);
    if (quality == -1) return -1;

    return domestic / quality;
}

function computeSuccess(hyExport, hyImport, hyMarketsize, hyPartners, name, group) {
    td = computeTradeDependency(hyMarketsize, hyImport, name, group);
    if (td == -1) return -1;

    comp = computeCompetition(hyPartners, hyMarketsize, name, group);
    if (comp == -1) return -1;

    qual = computeQuality(hyExport, name, group);
    if (qual == -1) return -1;

    prot = comptueProtectionism(hyExport, hyImport, hyMarketsize, name, group);
    if (prot == -1) return -1;

    return td / comp / qual / prot;
}

function computeHyScore(hyExport, hyImport, hyPartners, hyMarksetsize, group) {
    names = [];
    hyMarksetsize.forEach((row) => {
        if (!names.includes(row[0])) {
            names.push(row[0]);
        }
    });

    result = [];
    names.forEach((name) => {
        result.push({
            name,
            recentMarketsize: getRecentHyMarketsize(hyMarksetsize, name, group),
            recentImport: getRecentHyImport(hyImport, name, group),
            recentExport: getRecentHyExport(hyExport, name, group),
            domesticMarketShare: computeDomesticMarketShare(hyExport, hyImport, hyMarksetsize, name, group),
            competition: computeCompetition(hyPartners, hyMarksetsize, name, group),
            tradeDependency: computeTradeDependency(hyMarksetsize, hyImport, name, group),
            quality: computeQuality(hyExport, name, group),
            protectionism: comptueProtectionism(hyExport, hyImport, hyMarksetsize, name, group),
            success: computeSuccess(hyExport, hyImport, hyMarksetsize, hyPartners, name, group),
        });
    });
}

//////////////////////////////////////////////////
// CONVERT

function convertHyExport(hyExport) {
    return hyExport.map((row) => ({
        index: row[0] + "_" + row[2] + "_" + row[1],
        name: row[0],
        year: row[2],
        group: row[1],
        volume: row[3],
    }));
}

function convertHyImport(hyImport) {
    return hyImport.map((row) => ({
        index: row[0] + "_" + row[2] + "_" + row[1],
        name: row[0],
        year: row[2],
        group: row[1],
        volume: row[3],
    }));
}

function convertHyMarketsize(hyMarksetsize) {
    return hyMarksetsize.map((row) => ({
        index: row[0] + "_" + row[2] + "_" + row[1],
        name: row[0],
        year: row[2],
        group: row[1],
        volume: row[3],
    }));
}

function convertHyPartners(hyPartners) {
    return hyPartners.map((row) => ({
        index: row[0] + "_" + row[1] + "_" + row[2],
        buyer: row[0],
        seller: row[1],
        year: row[2],
        proportion: row[3],
    }));
}

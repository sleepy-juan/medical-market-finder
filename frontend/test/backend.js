let apiKey = "AIzaSyAGLAwV4t0vj6Fv-yc2uTEfae1-OsTvoA8";

let urlMarketsize = `https://sheets.googleapis.com/v4/spreadsheets/1gg0k0ehDw_sskWxV8e-K5l-tZxvKr_H9-5SZlXN_qT4/values/marketsize?key=${apiKey}`;
let urlExport = `https://sheets.googleapis.com/v4/spreadsheets/1gg0k0ehDw_sskWxV8e-K5l-tZxvKr_H9-5SZlXN_qT4/values/export?key=${apiKey}`;
let urlImport = `https://sheets.googleapis.com/v4/spreadsheets/1gg0k0ehDw_sskWxV8e-K5l-tZxvKr_H9-5SZlXN_qT4/values/import?key=${apiKey}`;
let urlPartners = `https://sheets.googleapis.com/v4/spreadsheets/1gg0k0ehDw_sskWxV8e-K5l-tZxvKr_H9-5SZlXN_qT4/values/partners?key=${apiKey}`;

// execute(render, country1, country2, group);

function execute(render, country1, country2, group) {
    fetch(urlMarketsize)
        .then((response) => response.json())
        .then((hyMarketSize) => {
            fetch(urlExport)
                .then((response) => response.json())
                .then((hyExport) => {
                    fetch(urlImport)
                        .then((response) => response.json())
                        .then((hyImport) => {
                            fetch(urlPartners)
                                .then((response) => response.json())
                                .then((hyPartners) => {
                                    hyExport = hyExport.values.slice(1);
                                    hyImport = hyImport.values.slice(1);
                                    hyPartners = hyPartners.values.slice(1);
                                    hyMarketSize = hyMarketSize.values.slice(1);

                                    hyScores = computeHyScore(hyExport, hyImport, hyPartners, hyMarketSize, group);
                                    hyExport = convertHyExport(hyExport);
                                    hyImport = convertHyImport(hyImport);
                                    hyMarketSize = convertHyMarketsize(hyMarketSize);
                                    hyPartners = convertHyPartners(hyPartners);

                                    render(country1, country2, group, hyExport, hyMarketSize, hyImport, hyPartners, hyScores);
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

function getRecentHyMarketsize(hyMarketSize, name, group) {
    recentYear = -1;
    recentRow = null;
    hyMarketSize.forEach((row) => {
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

function computeDomesticMarketShare(hyExport, hyImport, hyMarketSize, name, group) {
    hyExport = getRecentHyExport(hyExport, name, group);
    if (hyExport == null) return -1;
    hyImport = getRecentHyImport(hyImport, name, group);
    if (hyImport == null) return -1;

    tradeBalance = parseFloat(hyExport[3]) - parseFloat(hyImport[3]);

    hyMarketSize = getRecentHyMarketsize(hyMarketSize, name, group);
    if (hyMarketSize == null) return -1;

    marketsize = parseFloat(hyMarketSize[3]);
    return (marketsize + tradeBalance) / marketsize;
}

function computeCompetition(hyPartners, hyMarketSize, name, group) {
    hyPartners = hyPartners.filter((row) => row[0] == name);

    num = 0;
    denom = 0;
    hyPartners.forEach((row) => {
        proportion = parseFloat(row[3]);
        _hyMarketSize = getRecentHyMarketsize(hyMarketSize, name, group);
        if (_hyMarketSize == null) return;
        marketsize = parseFloat(_hyMarketSize[3]);

        num += proportion * marketsize;
        denom += proportion;
    });

    if (denom == 0) return -1;
    return num / denom;
}

function computeTradeDependency(hyMarketSize, hyImport, name, group) {
    hyMarketSize = getRecentHyMarketsize(hyMarketSize, name, group);
    if (hyMarketSize == null) return -1;
    hyImport = getRecentHyImport(hyImport, name, group);
    if (hyImport == null) return -1;

    return parseFloat(hyImport[3]) / parseFloat(hyMarketSize[3]);
}

function computeQuality(hyExport, name, group) {
    hyExport = getRecentHyExport(hyExport, name, group);
    if (hyExport == null) return -1;
    return parseFloat(hyExport[3]);
}

function comptueProtectionism(hyExport, hyImport, hyMarketSize, name, group) {
    domestic = computeDomesticMarketShare(hyExport, hyImport, hyMarketSize, name, group);
    if (domestic == -1) return -1;

    quality = computeQuality(hyExport, name, group);
    if (quality == -1) return -1;

    return domestic / quality;
}

function computeSuccess(hyExport, hyImport, hyMarketSize, hyPartners, name, group) {
    td = computeTradeDependency(hyMarketSize, hyImport, name, group);
    if (td == -1) return -1;

    comp = computeCompetition(hyPartners, hyMarketSize, name, group);
    if (comp == -1) return -1;

    qual = computeQuality(hyExport, name, group);
    if (qual == -1) return -1;

    prot = comptueProtectionism(hyExport, hyImport, hyMarketSize, name, group);
    if (prot == -1) return -1;

    return td / comp / qual / prot;
}

function computeHyScore(hyExport, hyImport, hyPartners, hyMarketSize, group) {
    names = [];
    hyMarketSize.forEach((row) => {
        if (!names.includes(row[0])) {
            names.push(row[0]);
        }
    });

    return names.map((name) => ({
        name,
        recentMarketsize: getRecentHyMarketsize(hyMarketSize, name, group)[3],
        recentImport: getRecentHyImport(hyImport, name, group)[3],
        recentExport: getRecentHyExport(hyExport, name, group)[3],
        domesticMarketShare: computeDomesticMarketShare(hyExport, hyImport, hyMarketSize, name, group),
        competition: computeCompetition(hyPartners, hyMarketSize, name, group),
        tradeDependency: computeTradeDependency(hyMarketSize, hyImport, name, group),
        quality: computeQuality(hyExport, name, group),
        protectionism: comptueProtectionism(hyExport, hyImport, hyMarketSize, name, group),
        success: computeSuccess(hyExport, hyImport, hyMarketSize, hyPartners, name, group),
    }));
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

function convertHyMarketsize(hyMarketSize) {
    return hyMarketSize.map((row) => ({
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

// country1: 벨기에, country2: 러시아, scoreArray: [1년수출액,2년수출액,3년수출액,...], yearArray: [2011,2012,2013,...]
// 모든 Array의 길이는 같아야한다. scoreArray[n]은 yearArray[n]년의 데이터이다.
function makeLines(country1, country2, scoreArray1, scoreArray2, yearArray) {
    const ctx = document.getElementById("lines").getContext("2d");
    const lines = new Chart(ctx, {
        type: "line",
        data: {
            labels: yearArray,
            datasets: [
                {
                    label: country1 + "의 수출액",
                    data: scoreArray1,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
                    borderWidth: 1,
                },
                {
                    label: country2 + "의 수출액",
                    data: scoreArray2,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}

//country: 러시아, targetID: pie1 or pie2. 1for first country, 2for second
//sellerSizes: 러시아가 수입하는 나라의 수출액, (아마 이게 많이 비어있을텐데 비어있으면 default 1000000쯤 때려박자)
//sellerProportions: 러시아가 수입하는 비율 (미국 0.2, 영국 0.1, ...)
function makePies(country, targetId, sellerList, sellerSizes, sellerProportions) {
    const pieArea1 = document.getElementById(targetId).getContext("2d");
    const pie1 = new Chart(pieArea1, {
        type: "polarArea",
        data: {
            labels: sellerList,
            datasets: [
                {
                    label: country + "의 수출액",
                    data: sellerSizes,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },

            elements: {
                arc: {
                    angle: sellerProportions.map((x) => x * 360),
                },
            },
        },
    });
}

//country1: 러시아 country2: 벨기에
//scoreArray1: ['Quality', 'Competition', 'Protectionism', 'Market Size', 'Trade Dependency', 'Domestic Market Share'] 순서대로 점수.
function makeRadar(country1, country2, scoreArray1, scoreArray2) {
    const radarArea = document.getElementById("radar").getContext("2d");
    const radar = new Chart(radarArea, {
        type: "radar",
        data: {
            labels: ["Quality", "Competition", "Protectionism", "Market Size", "Trade Dependency", "Domestic Market Share"],
            datasets: [
                {
                    label: country1 + "의 점수",
                    data: scoreArray1,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
                    borderWidth: 1,
                },
                {
                    label: country2 + "의 점수",
                    data: scoreArray2,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}

function render(country1, country2, group, hyExport, hyMarketSize, hyImport, hyPartner, hyScores) {
    allData = preprocess(country1, country2, group, hyExport, hyMarketSize, hyImport, hyPartner, hyScores);
    //[marketSizeArray1,marketSizeArray2,yearArray,scoreArray1,scoreArray2,partnerArray1, partnerArray2, proportionArray1,proportionArray2, qualityArray1, qualityArray2]
    makeLines(country1, country2, allData[0], allData[1], allData[2]);
    makePies(country1, "pie1", allData[5], allData[9], allData[7]);
    makePies(country2, "pie2", allData[6], allData[10], allData[8]);
    makeRadar(country1, country2, allData[3], allData[4]);
}

function preprocess(country1, country2, group, hyExport, hyMarketSize, hyImport, hyPartner, hyScores) {
    var marketSizeArray1 = [];
    var marketSizeArray2 = [];
    var marketSizeYears = [];
    var processObject = {};
    hyMarketSize.forEach((data) => {
        var year = data.year;
        if (data.group != group) return;
        if (data.name === country1 || data.name === country2) {
            if (processObject[year]) {
                processObject[year][data.name] = data.volume;
            } else {
                processObject[year] = {};
                processObject[year][data.name] = data.volume;
            }
        }
    });
    for (var [key, value] of Object.entries(processObject)) {
        if (value.length < 2) {
            processObject[key] = null;
        }
    }
    for (var [key, value] of Object.entries(processObject)) {
        marketSizeYears.push(key);
    }
    marketSizeYears.sort();
    marketSizeYears.forEach((year) => {
        marketSizeArray1.push(processObject[year][country1]);
        marketSizeArray2.push(processObject[year][country2]);
    });

    // ['Quality', 'Competition', 'Protectionism', 'Market Size', 'Trade Dependency', 'Domestic Market Share']
    var scoreArray1 = [];
    var scoreArray2 = [];
    hyScores.forEach((score) => {
        if (score.name === country1) {
            scoreArray1.push(score.recentExport);
            scoreArray1.push(score.competition);
            scoreArray1.push(score.protectionism);
            scoreArray1.push(score.recentMarketsize);
            scoreArray1.push(score.tradeDependency);
            scoreArray1.push(score.domesticMarketShare);
        }
        if (score.name === country2) {
            scoreArray2.push(score.recentExport);
            scoreArray2.push(score.competition);
            scoreArray2.push(score.protectionism);
            scoreArray2.push(score.recentMarketsize);
            scoreArray2.push(score.tradeDependency);
            scoreArray2.push(score.domesticMarketShare);
        }
    });

    var partnerArray1 = [];
    var partnerArray2 = [];
    var proportionArray1 = [];
    var proportionArray2 = [];
    var qualityArray1 = [];
    var qualityArray2 = [];
    hyPartner.forEach((partner) => {
        if (partner.buyer === country1) {
            partnerArray1.push(partner.seller);
            proportionArray1.push(partner.proportion);
        }
        if (partner.buyer === country2) {
            partnerArray2.push(partner.seller);
            proportionArray2.push(partner.proportion);
        }
    });
    partnerArray1.forEach((partner) => {
        hyScores.forEach((score) => {
            if (score.name === partner) {
                qualityArray1.push(score.recentExport);
            }
        });
    });
    partnerArray2.forEach((partner) => {
        hyScores.forEach((score) => {
            if (score.name === partner) {
                qualityArray2.push(score.recentExport);
            }
        });
    });

    return [marketSizeArray1, marketSizeArray2, marketSizeYears, scoreArray1, scoreArray2, partnerArray1, partnerArray2, proportionArray1, proportionArray2, qualityArray1, qualityArray2];
}

window.onload = () => {
    let country1 = "러시아";
    let country2 = "벨기에";
    let group = "의료소모품";

    fetch("http://0.0.0.0:1317/khidi/khidi/hy_export")
        .then((response) => response.json())
        .then((json) => json["hyExport"])
        .then((hyExport) => {
            fetch("http://0.0.0.0:1317/khidi/khidi/hy_marketsize")
                .then((response) => response.json())
                .then((json) => json["hyMarketsize"])
                .then((hyMarketSize) => {
                    fetch("http://0.0.0.0:1317/khidi/khidi/hy_import")
                        .then((response) => response.json())
                        .then((json) => json["hyImport"])
                        .then((hyImport) => {
                            fetch("http://0.0.0.0:1317/khidi/khidi/hy_partner")
                                .then((response) => response.json())
                                .then((json) => json["hyPartner"])
                                .then((hyPartner) => {
                                    fetch(`http://0.0.0.0:1317/khidi/khidi/hy_all_names_of/${group}`)
                                        .then((response) => response.json())
                                        .then((json) => json["HyAllNamesOf"])
                                        .then((hyScores) => {
                                            render(country1, country2, group, hyExport, hyMarketSize, hyImport, hyPartner, hyScores);
                                        });
                                });
                        });
                });
        });
};

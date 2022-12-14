const briefLinks = {
    러시아: "https://www.khidi.or.kr/fileDownload?titleId=408535&fileId=1&fileDownType=C&paramMenuId=MENU01529",
    폴란드: "https://www.khidi.or.kr/fileDownload?titleId=391384&fileId=1&fileDownType=C&paramMenuId=MENU01529",
    벨기에: "https://www.khidi.or.kr/fileDownload?titleId=381850&fileId=1&fileDownType=C&paramMenuId=MENU01529",
    중국: "https://www.khidi.or.kr/fileDownload?titleId=333053&fileId=1&fileDownType=C&paramMenuId=MENU01529",
    미국: "https://www.khidi.or.kr/fileDownload?titleId=154573&fileId=1&fileDownType=C&paramMenuId=MENU01529",
    영국: "https://www.khidi.or.kr/fileDownload?titleId=159448&fileId=1&fileDownType=C&paramMenuId=MENU01529",
};

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

    let keys = Object.keys(sellerList);
    keys = keys.map((key) => parseInt(key));
    keys.sort((a, b) => sellerSizes[b] - sellerSizes[a]);
    keys = keys.slice(0, 5);

    sellerList = sellerList.filter((_, i) => keys.includes(i));
    sellerSizes = sellerSizes.filter((_, i) => keys.includes(i));
    sellerProportions = sellerProportions.filter((_, i) => keys.includes(i));

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
                // y: {
                //     beginAtZero: true,
                // },
                r:{
                    beginAtZero:true,
                    // type:""
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
                    beginAtZero: false,
                },
                r: {
                    suggestedMin: 0,
                },
            },
        },
    });
}

function render(country1, country2, group, hyExport, hyMarketSize, hyImport, hyPartner, hyScores) {
    allData = preprocess(country1, country2, group, hyExport, hyMarketSize, hyImport, hyPartner, hyScores);
    //[marketSizeArray1,marketSizeArray2,yearArray,scoreArray1,scoreArray2,partnerArray1, partnerArray2, proportionArray1,proportionArray2, qualityArray1, qualityArray2]
    var overAll1 = Math.round(allData[3].reduce((a, b) => a + b, 0) / 6);
    var overAll2 = Math.round(allData[4].reduce((a, b) => a + b, 0) / 6);

    document.getElementById("result1").appendChild(document.createTextNode(overAll1 + "점"));
    document.getElementById("result2").appendChild(document.createTextNode(overAll2 + "점"));

    makeLines(country1, country2, allData[0], allData[1], allData[2]);
    makePies(country1, "pie1", allData[5], allData[9], allData[7]);
    makePies(country2, "pie2", allData[6], allData[10], allData[8]);
    makeRadar(country1, country2, allData[3], allData[4]);
    var reports = makeReport(country1, country2, hyScores);
    placeReport(country1, country2, reports[0], reports[1]);
}

function placeReport(country1, country2, report1, report2) {
    document.getElementById("name1").appendChild(document.createTextNode(country1));
    document.getElementById("name2").appendChild(document.createTextNode(country2));
    document.getElementById("name1_pro").appendChild(document.createTextNode(country1));
    document.getElementById("name2_pro").appendChild(document.createTextNode(country2));
    for (const key in report1) {
        let node = document.createElement("p");
        let title = document.createElement("h6");
        title.appendChild(document.createTextNode(key));
        node.appendChild(title);
        node.appendChild(document.createTextNode(report1[key]));
        document.getElementById("report1").appendChild(node);
    }
    for (const key in report2) {
        let node = document.createElement("p");
        let title = document.createElement("h6");
        title.appendChild(document.createTextNode(key));
        node.appendChild(title);
        node.appendChild(document.createTextNode(report2[key]));
        document.getElementById("report2").appendChild(node);
    }

    var brief1 = document.createElement("a");
    brief1.setAttribute("href", briefLinks[country1]);
    brief1.textContent = country1 + " 시장 브리프 다운로드";
    brief1.classList.add("button");
    var brief2 = document.createElement("a");
    brief2.setAttribute("href", briefLinks[country2]);
    brief2.textContent = country2 + " 시장 브리프 다운로드";
    brief2.classList.add("button");
    document.getElementById("brief1").appendChild(brief1);
    document.getElementById("brief2").appendChild(brief2);
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
            scoreArray1.push(normalizeQuality(score.recentExport, hyScores));
            scoreArray1.push(normalizeCompetition(score.competition, hyScores));
            scoreArray1.push(normalizeProtectionism(score.protectionism, hyScores));
            scoreArray1.push(normalizeMarketSize(score.recentMarketsize, hyScores));
            scoreArray1.push(normalizeTrade(score.tradeDependency, hyScores));
            scoreArray1.push(normalizeMarketShare(score.domesticMarketShare, hyScores));
        }
        if (score.name === country2) {
            scoreArray2.push(normalizeQuality(score.recentExport, hyScores));
            scoreArray2.push(normalizeCompetition(score.competition, hyScores));
            scoreArray2.push(normalizeProtectionism(score.protectionism, hyScores));
            scoreArray2.push(normalizeMarketSize(score.recentMarketsize, hyScores));
            scoreArray2.push(normalizeTrade(score.tradeDependency, hyScores));
            scoreArray2.push(normalizeMarketShare(score.domesticMarketShare, hyScores));
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
        let exist = false;
        let tempArray = [];
        hyExport.forEach((score) => {
            if (score.name === partner) {
                tempArray.push(score.volume);
                exist = true;
            }
        });
        if (!exist) qualityArray1.push(100);
        else{
            qualityArray1.push(tempArray[tempArray.length-1]);
        }
    });
    partnerArray2.forEach((partner) => {
        let exist = false;
        let tempArray = [];
        hyExport.forEach((score) => {
            if (score.name === partner) {
                tempArray.push(score.volume);
                exist = true;
            }
        });
        console.log(tempArray);
        if (!exist) qualityArray2.push(100);
        else{
            qualityArray2.push(tempArray[tempArray.length-1]);
        }
    });

    return [marketSizeArray1, marketSizeArray2, marketSizeYears, scoreArray1, scoreArray2, partnerArray1, partnerArray2, proportionArray1, proportionArray2, qualityArray1, qualityArray2];
}

function makeReport(country1, country2, hyScores) {
    let competition1 = null;
    let competition2 = null;
    let protectionism1 = null;
    let protectionism2 = null;
    let marketsize1 = null;
    let marketsize2 = null;
    let import1 = null;
    let import2 = null;
    let export1 = null;
    let export2 = null;
    let report1 = {};
    let report2 = {};
    hyScores.forEach((score) => {
        if (score.name === country1) {
            competition1 = score.competition * 1;
            protectionism1 = score.protectionism * 1;
            import1 = score.recentImport * 1;
            export1 = score.recentExport * 1;
            marketsize1 = score.recentMarketsize * 1;
        }
        if (score.name === country2) {
            competition2 = score.competition * 1;
            protectionism2 = score.protectionism * 1;
            import2 = score.recentImport * 1;
            export2 = score.recentExport * 1;
            marketsize2 = score.recentMarketsize * 1;
        }
    });

    if (competition1 > competition2) {
        report2["낮은 경쟁"] = country2 + "(이)가 수입하는 국가들의 생산품질은 " + country1 + "의 파트너에 비해 낮은 것으로 예측됩니다. 즉, 각국의 전체 수출량이 작습니다.";
    } else {
        report1["낮은 경쟁"] = country1 + "(이)가 수입하는 국가들의 생산품질은 " + country2 + "의 파트너에 비해 낮은 것으로 예측됩니다. 즉, 각국의 전체 수출량이 작습니다.";
    }

    if (protectionism1 > protectionism2) {
        report2["낮은 보호주의"] =
            country2 +
            "은(는) " +
            export2 / 10 +
            "만달러를 수출하고," +
            import2 / 10 +
            "만달러를 수입하고 있습니다. 큰 수출규모를 달성할 기술이 있고, 내수점유율을 높일 수 있다고 판단되지만 여전히 시장규모 대비 많은 양을 수입하고 있어 보호주의가 낮은 비교적 자유로운 시장으로 분석됩니다.";
    } else {
        report1["낮은 보호주의"] =
            country1 +
            "은(는) " +
            export1 / 10 +
            "만달러를 수출하고," +
            import1 / 10 +
            "만달러를 수입하고 있습니다. 큰 수출규모를 달성할 기술이 있고, 내수점유율을 높일 수 있다고 판단되지만 여전히 시장규모 대비 많은 양을 수입하고 있어 보호주의가 낮은 비교적 자유로운 시장으로 분석됩니다.";
    }

    if (marketsize1 > marketsize2) {
        report1["큰 시장 규모"] = country1 + "은(는) " + marketsize1 + "백만 달러 규모의 시장을 갖고 있습니다. 이는 " + country2 + "의 약 " + (marketsize1 / marketsize2).toFixed(2) + "배입니다.";
    } else {
        report2["큰 시장 규모"] = country2 + "은(는) " + marketsize2 + "백만 달러 규모의 시장을 갖고 있습니다. 이는 " + country1 + "의 약 " + (marketsize2 / marketsize1).toFixed(2) + "배입니다.";
    }

    if (export1 < export2) {
        report1["낮은 생산 역량"] =
            country1 +
            "은(는) " +
            export1 / 10 +
            "만 달러 규모를 수출하고 있습니다. 반면 " +
            country2 +
            "은(는) " +
            export2 / 10 +
            "만 달러 규모를 수출하고 있어, " +
            country1 +
            "에 비해 더 좋은 품질의 의료기기를 생산하거나, 더 높은 생산역량을 갖고 있어 이들의 내수시장을 점유하는 것보다는 " +
            country1 +
            "의 내수시장을 공략하는 것이 비교적 쉬울 것으로 예상됩니다.";
    } else {
        report2["낮은 생산 역량"] =
            country2 +
            "은(는) " +
            export2 / 10 +
            "만 달러 규모를 수출하고 있습니다. 반면 " +
            country1 +
            "은(는) " +
            export1 / 10 +
            "만 달러 규모를 수출하고 있어, " +
            country2 +
            "에 비해 더 좋은 품질의 의료기기를 생산하거나, 더 높은 생산역량을 갖고 있어 이들의 내수시장을 점유하는 것보다는 " +
            country2 +
            "의 내수시장을 공략하는 것이 비교적 쉬울 것으로 예상됩니다.";
    }
    if (import1 / marketsize1 > import2 / marketsize2) {
        report1["높은 무역의존도"] =
            country1 +
            "은(는) " +
            import1 / 10 +
            "만 달러 규모를 수입하고 있으며, 이는 이 나라 시장 규모의 " +
            Math.round((import1 / marketsize1) * 0.1) +
            "퍼센트에 해당합니다. 반면, " +
            country2 +
            "은(는) " +
            import2 / 10 +
            "만 달러를 수입하고 있으며, 이는 " +
            country2 +
            " 시장 규모의 " +
            Math.round((import2 / marketsize2) * 0.1) +
            "퍼센트입니다. 시장의 많은 부분을 무역에 의존할수록 해외 시장 진출이 용이합니다.";
    } else {
        report2["높은 무역의존도"] =
            country2 +
            "은(는) " +
            import2 / 10 +
            "만 달러 규모를 수입하고 있으며, 이는 이 나라 시장 규모의 " +
            Math.round((import2 / marketsize2) * 0.1) +
            "퍼센트에 해당합니다. 반면, " +
            country1 +
            "은(는) " +
            import1 / 10 +
            "만 달러를 수입하고 있으며, 이는 " +
            country1 +
            " 시장 규모의 " +
            Math.round((import1 / marketsize1) * 0.1) +
            "퍼센트입니다. 시장의 많은 부분을 무역에 의존할수록 해외 시장 진출이 용이합니다.";
    }

    return [report1, report2];
}

function normalizeTrade(trade, hyScore) {
    let max_score = 0;
    hyScores.forEach((score) => {
        if (score.tradeDependency * 1 > max_score) max_score = score.tradeDependency * 1;
    });
    return (trade * 50) / max_score + 50;
}

function normalizeMarketSize(size, hyScore) {
    let max_score = 0;
    hyScores.forEach((score) => {
        if (score.recentMarketsize * 1 > max_score) max_score = score.recentMarketsize * 1;
    });
    return Math.pow(size / max_score, 0.5) * 50 + 50;
}

function normalizeQuality(quality, hyScores) {
    let max_score = 0;
    hyScores.forEach((score) => {
        if (score.quality * 1 > max_score) max_score = score.quality * 1;
    });
    return 100-Math.pow((quality) / max_score,0.5)*50;

}

function normalizeCompetition(competition, hyScores) {
    let max_score = 0;
    hyScores.forEach((score) => {
        if (score.competition * 1 > max_score) max_score = score.competition * 1;
    });
    return 100 - (competition * 50) / max_score;
}

function normalizeProtectionism(protectionism, hyScores) {
    let minScore = 0;
    let maxScore = 0;
    hyScores.forEach((score) => {
        if (score.protectionism * 1 < minScore) minScore = score.protectionism * 1;
        if (score.protectionism * 1 > maxScore) maxScore = score.protectionism * 1;
    });
    return 100 - Math.pow((protectionism - minScore) / (maxScore - minScore), 5) * 50;
}

function normalizeMarketShare(MarketShare, hyScores) {
    let minScore = 0;
    let maxScore = 0;
    hyScores.forEach((score) => {
        if (score.domesticMarketShare * 1 < minScore) minScore = score.domesticMarketShare * 1;
        if (score.domesticMarketShare * 1 > maxScore) maxScore = score.domesticMarketShare * 1;
    });
    return 100 - ((MarketShare - minScore) * 50) / (maxScore - minScore);
}

window.onload = () => {
    let countryData = ["벨기에", "러시아", "미국", "영국", "중국", "폴란드"];
    let country1 = countryData[sessionStorage.getItem("country1")];
    let country2 = countryData[sessionStorage.getItem("country2")];
    let group = sessionStorage.getItem("group");

    if (!country1) country1 = "러시아";
    if (!country2) country2 = "미국";
    if (!group) group = "의료소모품";
    execute(render, country1, country2, group);

    // fetch("http://0.0.0.0:1317/khidi/khidi/hy_export")
    // .then(response => response.json())
    // .then(json => json["hyExport"])
    // .then(hyExport => {
    //     fetch("http://0.0.0.0:1317/khidi/khidi/hy_marketsize")
    //     .then(response => response.json())
    //     .then(json => json["hyMarketsize"])
    //     .then(hyMarketSize => {
    //         fetch("http://0.0.0.0:1317/khidi/khidi/hy_import")
    //         .then(response => response.json())
    //         .then(json => json["hyImport"])
    //         .then(hyImport => {
    //             fetch("http://0.0.0.0:1317/khidi/khidi/hy_partner")
    //             .then(response => response.json())
    //             .then(json => json["hyPartner"])
    //             .then(hyPartner => {
    //                 fetch(`http://0.0.0.0:1317/khidi/khidi/hy_all_names_of/${group}`)
    //                 .then(response => response.json())
    //                 .then(json => json["HyAllNamesOf"])
    //                 .then(hyScores => {
    //                     render(country1,country2,group,hyExport,hyMarketSize,hyImport,hyPartner,hyScores)
    //                 })
    //             })
    //         })
    //     })
    // })
};

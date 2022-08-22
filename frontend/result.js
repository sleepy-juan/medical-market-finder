// country1: 벨기에, country2: 러시아, scoreArray: [1년수출액,2년수출액,3년수출액,...], yearArray: [2011,2012,2013,...]
// 모든 Array의 길이는 같아야한다. scoreArray[n]은 yearArray[n]년의 데이터이다.
function makeLines(country1,country2,scoreArray1,scoreArray2,yearArray){
    const ctx = document.getElementById('lines').getContext('2d');
    const lines = new Chart(ctx, {
        type: 'line',
        data: {
            labels: yearArray,
            datasets: [{
                label: country1+'의 수출액',
                data: scoreArray1,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: country2+'의 수출액',
                data: scoreArray2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
        ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

//country: 러시아, targetID: pie1 or pie2. 1for first country, 2for second
//sellerSizes: 러시아가 수입하는 나라의 수출액, (아마 이게 많이 비어있을텐데 비어있으면 default 1000000쯤 때려박자)
//sellerProportions: 러시아가 수입하는 비율 (미국 0.2, 영국 0.1, ...)
function makePies(country, targetId, sellerList, sellerSizes, sellerProportions){
    const pieArea1 = document.getElementById(targetId).getContext('2d');
    const pie1 = new Chart(pieArea1, {
        type: 'polarArea',
        data: {
            labels: sellerList,
            datasets: [{
                label: country+'의 수출액',
                data: sellerSizes,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
        ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },

            elements: {
                arc: {
                angle: sellerProportions.map(x=>x*360)
                }
            }
        }
    });
}


//country1: 러시아 country2: 벨기에
//scoreArray1: ['Quality', 'Competition', 'Protectionism', 'Market Size', 'Trade Dependency', 'Domestic Market Share'] 순서대로 점수.
function makeRadar(country1, country2,scoreArray1,scoreArray2){
    const radarArea = document.getElementById('radar').getContext('2d');
    const radar = new Chart(radarArea, {
        type: 'radar',
        data: {
            labels: ['Quality', 'Competition', 'Protectionism', 'Market Size', 'Trade Dependency', 'Domestic Market Share'],
            datasets: [{
                label: country1+'의 점수',
                data: scoreArray1,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: country2+'의 점수',
                data: scoreArray2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            
        ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }

        }
    });
}





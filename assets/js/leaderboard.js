(function () {
    document.documentElement.lang = 'en';

    var data = [];
    var regionalLeaders = [];

    function renderItem(fixdata) {
        var badge = "";
        if (fixdata.position < 4) {
            badge = "pos-badge";
        }
        $(".table_body").append(`
            <tr class="">
                <td class="text-center position ${badge}"><span>${fixdata.position}</span></td>
                <td class="logo table_white table_left_side_radius text-center">
                	<img src="/assets/img/logos/us-4413.png" />
                </td>
                <td class="details table_white">
                    <div class="details_name">${fixdata.details.name}</div>
                    <div>${fixdata.details.location}</div>
                </td>
                <td class="hidden-xs text-center table_white">${fixdata.fixes}</td>
                <td class="hidden-xs text-center table_white">${fixdata.students}</td>
                <td class="text-center table_grey table_right_side_radius">${fixdata.fixes_per_student}</td>
            </tr>
            `)
    }

    function renderRegion(fixdata) {
        $(".cards").append(`
        <article class="card card-container">
            <div class="card-line card-header">${fixdata.details.location}</div>
            <div class="card-line card-content-container">
                <div class="card-content-item"></div>
                <div class="card-content-item card-content-details">
                    <div class="card-details-item card-details-item-name">${fixdata.details.name}</div>
                    <div class="card-details-item">${fixdata.details.location}</div>
                    <div class="card-details-item card-details-stats">
                        <div>
                            <img src="/assets/img/leaderboard/tick.svg" alt="">
                            <span>${fixdata.fixes}</span>
                        </div>
                        <div>
                            <img src="/assets/img/leaderboard/head.svg" alt="">
                            <span>${fixdata.students}</span>
                        </div>
                    </div>
                </div>
                <div class="card-content-item-grey">${fixdata.fixes_per_student}</div>
            </div>
        </article>`);
    }

    function renderAll() {
        $(".table_body").html('');
        data.forEach(element => {
            renderItem(element);
        });
        $(".units").text(data.length);
    }

    function renderTopFive() {
        $(".table_body").html('');
        data.slice(0, 5).forEach(element => {
            renderItem(element);
        });
        $(".units").text(data.length);
    }

    function renderRegionalLeaders() {
        $(".cards").html('');
        for(var key in regionalLeaders) {
            var leader = regionalLeaders[key];
            renderRegion(leader);
        }
    }

    var show = 'top5';

    $('.table_show_full').on('click', function (e) {
        if (show === 'top5') {
            show = 'all';
            $('.table_show_full').text('Collapse list');
            renderAll();
        } else if (show === 'all') {
            show = 'top5';
            $('.table_show_full').text('Show full list');
            renderTopFive();
        }
        
        e.preventDefault();
    });

    function loadData() {
        $.getJSON("https://gaad-dedd2.firebaseio.com/gaad.json", function () {
            console.log("Fixes count loaded");
        }).done(function (results) {
            $.getJSON("fte.json", function () {
                console.log("Fte Counts loaded");
            }).done(function (response) {
                for (var key in results) {
                    var value = results[key];

                    var uniDetails = response[key];
                    var fixesPerStudent = 0;
                    if (uniDetails) {
                        if (value && value > 0) {
                            fixesPerStudent = value / uniDetails.fte;
                        }
                        var details = {
                            "details": {
                                "name": uniDetails.name,
                                "location": uniDetails.location
                            },
                            "fixes": formatNumber(value),
                            "students": formatNumber(uniDetails.fte),
                            "fixes_per_student": fixesPerStudent.toFixed(8)
                        };
                        data.push(details);
                    } else {
                        console.log(`Received info for unknown client ${key}`);
                    }
                }

                data.sort(function (left, right) {
                    return right.fixes_per_student - left.fixes_per_student;
                });

                var position = 1;
                data.forEach(element => {
                    element.position = position++;
                });

                data.forEach(element => {
                    const location = element.details.location;
                    if (location in regionalLeaders) {
                        const leader = regionalLeaders[location];
                        if (leader.fixes_per_student < element.fixes_per_student) {
                            regionalLeaders[location] = element;
                        }
                    } else {
                        regionalLeaders[location] = element;
                    }
                });
                renderTopFive();
                renderRegionalLeaders();
            })
                .fail(function (data) {
                    console.log(data);
                });
        });
    }

    function loadGraph() {
        $.getJSON("https://gaad-dedd2.firebaseio.com/gaad-total.json", function () {
            console.log("Graph Data loaded")
        }).done(function (response) {
            var labels = [];
            var points = [];
            var last = 0;
            for (var timestamp in response) {
                var fixes = response[timestamp];
                labels.push(Number(timestamp));
                points.push(fixes);
                last = fixes;
            }

            Highcharts.chart('chart-container', {
                chart: {
                    type: 'line',
                    backgroundColor: 'transparent',
                    color: '#00C7D1',
                    height: '300px'
                },
                legend: {
                    enabled: false
                },
                title: {
                    text: 'Total fixes around the world',
                    align: 'left',
                    style: { "color": "#FFF", "fontSize": "20px", "fontWeight" : "bold", "line-height": "15px", "fontFamily": "Roboto" }
                },
                caption: {
                    text: formatNumber(last),
                    style: { "color": "#000", "fontSize": "16px" },
                    y: 60,
                    verticalAlign: "top",
                    useHTML: true
                },
                xAxis: {
                    visible: false
                },
                yAxis: {
                    visible: false
                },
                plotOptions: {
                    line: {
                    	lineWidth: 4,
                    	marker: {
                    		enabled: false
                    	}
                    }
                },
                series: [{
                    name: 'Fixes',
                    color: "#00C7D1",
                    data: points
                }]
            });

        });
    }
    
    function formatNumber(nr) {
    	return nr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    loadData();
    loadGraph();

})();
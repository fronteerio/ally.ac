(function () {
    document.documentElement.lang = 'en';

    var data = [];

    function renderItem(fixdata) {
        $(".table_body").append(`
            <div class="table_row">
                <div class="table_column position child half">${fixdata.position}</div>
                <div class="table_column details table_white table_left_side_radius child">
                    <div class="child details_child_name">${fixdata.details.name}</div>
                    <div class="child">${fixdata.details.location}</div>
                </div>
                <div class="table_column table_white child half">${fixdata.fixes}</div>
                <div class="table_column table_white child half">${fixdata.students}</div>
                <div class="table_column table_grey table_right_side_radius child third">${fixdata.fixes_per_student}</div>
            </div>
            `)
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

    var show = 'top5';

    $('.table_show_full').on('click', function (e) {
        if (show === 'top5') {
            show = 'all';
            $('.table_show_full').text('Collapse');
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
                            "fixes": value,
                            "students": uniDetails.fte,
                            "fixes_per_student": fixesPerStudent.toFixed(8)
                        };
                        data.push(details);
                    } else {
                        var details = {
                            "details": {
                                "name": "Unknown",
                                "location": "Unknown"
                            },
                            "fixes": value,
                            "students": 0,
                            "fixes_per_student": fixesPerStudent.toFixed(8)
                        };
                        data.push(details);
                    }
                }

                data.sort(function (left, right) {
                    return right.fixes_per_student - left.fixes_per_student;
                });

                var position = 1;
                data.forEach(element => {
                    element.position = position++;
                });

                renderTopFive();


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
                    style: { "color": "#FFF", "fontSize": "18px", "fontWeight" : "bold" }
                },
                caption: {
                    text: last,
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
                series: [{
                    name: 'Fixes',
                    color: "#00C7D1",
                    data: points
                }]
            });

        });
    }

    loadData();
    loadGraph();

})();
(function() {

    ///////////////////////
    // Scores and Issues //
    ///////////////////////

    var scoresAndIssuesDataSelected = 'overallFiles';
    var scoresAndIssuesData = [{
        'hc-a2': 'AL',
        name: 'Alabama',
        region: 'South',
        x: 6,
        y: 7
    }, {
        'hc-a2': 'AK',
        name: 'Alaska',
        region: 'West',
        x: 0,
        y: 0
    }, {
        'hc-a2': 'AZ',
        name: 'Arizona',
        region: 'West',
        x: 5,
        y: 3
    }, {
        'hc-a2': 'AR',
        name: 'Arkansas',
        region: 'South',
        x: 5,
        y: 6
    }, {
        'hc-a2': 'CA',
        name: 'California',
        region: 'West',
        x: 5,
        y: 2
    }, {
        'hc-a2': 'CO',
        name: 'Colorado',
        region: 'West',
        x: 4,
        y: 3
    }, {
        'hc-a2': 'CT',
        name: 'Connecticut',
        region: 'Northeast',
        x: 3,
        y: 11
    }, {
        'hc-a2': 'DE',
        name: 'Delaware',
        region: 'South',
        x: 4,
        y: 9
    }, {
        'hc-a2': 'DC',
        name: 'District of Columbia',
        region: 'South',
        x: 4,
        y: 10
    }, {
        'hc-a2': 'FL',
        name: 'Florida',
        region: 'South',
        x: 8,
        y: 8
    }, {
        'hc-a2': 'GA',
        name: 'Georgia',
        region: 'South',
        x: 7,
        y: 8
    }, {
        'hc-a2': 'HI',
        name: 'Hawaii',
        region: 'West',
        x: 8,
        y: 0
    }, {
        'hc-a2': 'ID',
        name: 'Idaho',
        region: 'West',
        x: 3,
        y: 2
    }, {
        'hc-a2': 'IL',
        name: 'Illinois',
        region: 'Midwest',
        x: 3,
        y: 6
    }, {
        'hc-a2': 'IN',
        name: 'Indiana',
        region: 'Midwest',
        x: 3,
        y: 7
    }, {
        'hc-a2': 'IA',
        name: 'Iowa',
        region: 'Midwest',
        x: 3,
        y: 5
    }, {
        'hc-a2': 'KS',
        name: 'Kansas',
        region: 'Midwest',
        x: 5,
        y: 5
    }, {
        'hc-a2': 'KY',
        name: 'Kentucky',
        region: 'South',
        x: 4,
        y: 6
    }, {
        'hc-a2': 'LA',
        name: 'Louisiana',
        region: 'South',
        x: 6,
        y: 5
    }, {
        'hc-a2': 'ME',
        name: 'Maine',
        region: 'Northeast',
        x: 0,
        y: 11
    }, {
        'hc-a2': 'MD',
        name: 'Maryland',
        region: 'South',
        x: 4,
        y: 8
    }, {
        'hc-a2': 'MA',
        name: 'Massachusetts',
        region: 'Northeast',
        x: 2,
        y: 10
    }, {
        'hc-a2': 'MI',
        name: 'Michigan',
        region: 'Midwest',
        x: 2,
        y: 7
    }, {
        'hc-a2': 'MN',
        name: 'Minnesota',
        region: 'Midwest',
        x: 2,
        y: 4
    }, {
        'hc-a2': 'MS',
        name: 'Mississippi',
        region: 'South',
        x: 6,
        y: 6
    }, {
        'hc-a2': 'MO',
        name: 'Missouri',
        region: 'Midwest',
        x: 4,
        y: 5
    }, {
        'hc-a2': 'MT',
        name: 'Montana',
        region: 'West',
        x: 2,
        y: 2
    }, {
        'hc-a2': 'NE',
        name: 'Nebraska',
        region: 'Midwest',
        x: 4,
        y: 4
    }, {
        'hc-a2': 'NV',
        name: 'Nevada',
        region: 'West',
        x: 4,
        y: 2
    }, {
        'hc-a2': 'NH',
        name: 'New Hampshire',
        region: 'Northeast',
        x: 1,
        y: 11
    }, {
        'hc-a2': 'NJ',
        name: 'New Jersey',
        region: 'Northeast',
        x: 3,
        y: 10
    }, {
        'hc-a2': 'NM',
        name: 'New Mexico',
        region: 'West',
        x: 6,
        y: 3
    }, {
        'hc-a2': 'NY',
        name: 'New York',
        region: 'Northeast',
        x: 2,
        y: 9
    }, {
        'hc-a2': 'NC',
        name: 'North Carolina',
        region: 'South',
        x: 5,
        y: 9
    }, {
        'hc-a2': 'ND',
        name: 'North Dakota',
        region: 'Midwest',
        x: 2,
        y: 3
    }, {
        'hc-a2': 'OH',
        name: 'Ohio',
        region: 'Midwest',
        x: 3,
        y: 8
    }, {
        'hc-a2': 'OK',
        name: 'Oklahoma',
        region: 'South',
        x: 6,
        y: 4
    }, {
        'hc-a2': 'OR',
        name: 'Oregon',
        region: 'West',
        x: 4,
        y: 1
    }, {
        'hc-a2': 'PA',
        name: 'Pennsylvania',
        region: 'Northeast',
        x: 3,
        y: 9
    }, {
        'hc-a2': 'RI',
        name: 'Rhode Island',
        region: 'Northeast',
        x: 2,
        y: 11
    }, {
        'hc-a2': 'SC',
        name: 'South Carolina',
        region: 'South',
        x: 6,
        y: 8
    }, {
        'hc-a2': 'SD',
        name: 'South Dakota',
        region: 'Midwest',
        x: 3,
        y: 4
    }, {
        'hc-a2': 'TN',
        name: 'Tennessee',
        region: 'South',
        x: 5,
        y: 7
    }, {
        'hc-a2': 'TX',
        name: 'Texas',
        region: 'South',
        x: 7,
        y: 4
    }, {
        'hc-a2': 'UT',
        name: 'Utah',
        region: 'West',
        x: 5,
        y: 4
    }, {
        'hc-a2': 'VT',
        name: 'Vermont',
        region: 'Northeast',
        x: 1,
        y: 10
    }, {
        'hc-a2': 'VA',
        name: 'Virginia',
        region: 'South',
        x: 5,
        y: 8
    }, {
        'hc-a2': 'WA',
        name: 'Washington',
        region: 'West',
        x: 2,
        y: 1
    }, {
        'hc-a2': 'WV',
        name: 'West Virginia',
        region: 'South',
        x: 4,
        y: 7
    }, {
        'hc-a2': 'WI',
        name: 'Wisconsin',
        region: 'Midwest',
        x: 2,
        y: 5
    }, {
        'hc-a2': 'WY',
        name: 'Wyoming',
        region: 'West',
        x: 3,
        y: 3
    }];
    var scoresAndIssuesLegend = {
        'overallFiles': [{
            from: 0,
            to: 0,
            color: '#FFFFFF',
            name: 'No Data'
        }, {
            from: 30,
            to: 39.99,
            color: '#a12330',
            name: '30 - 39%'
        }, {
            from: 40,
            to: 49.99,
            color: '#ce3732',
            name: '40 - 49%'
        }, {
            from: 50,
            to: 59.99,
            color: '#e75c42',
            name: '50 - 59%'
        }, {
            from: 60,
            color: '#f1b366',
            name: '> 60%'
        }],
        'overallWysiwyg': [{
            from: 0,
            to: 0,
            color: '#FFFFFF',
            name: 'No Data'
        }, {
            from: 90,
            to: 92.9,
            color: '#80b784',
            name: '90 - 92%'
        }, {
            from: 93,
            to: 95.99,
            color: '#62a865',
            name: '93 - 95%'
        }, {
            from: 96,
            to: 98.99,
            color: '#478648',
            name: '96 - 98%'
        }, {
            from: 99,
            color: '#285731',
            name: '> 99%'
        }],
        'scannedPDFs': [{
            from: 0,
            to: 0,
            color: '#FFFFFF',
            name: 'No Data'
        }, {
            from: 9,
            to: 12.99,
            color: '#f1b366',
            name: '9 - 12%'
        }, {
            from: 13,
            to: 17.99,
            color: '#e75c42',
            name: '13 - 17%'
        }, {
            from: 17,
            to: 20.99,
            color: '#ce3732',
            name: '17 - 20%'
        }, {
            from: 21,
            color: '#a12330',
            name: '> 21%'
        }],
        'untaggedPDFs': [{
            from: 0,
            to: 0,
            color: '#FFFFFF',
            name: 'No Data'
        }, {
            from: 24,
            to: 30.99,
            color: '#f1b366',
            name: '24 - 30%'
        }, {
            from: 31,
            to: 37.99,
            color: '#e75c42',
            name: '31 - 37%'
        }, {
            from: 38,
            to: 44.99,
            color: '#ce3732',
            name: '38 - 44%'
        }, {
            from: 45,
            color: '#a12330',
            name: '> 45%'
        }],
        'docsMissingHeadings': [{
            from: 0,
            to: 0,
            color: '#FFFFFF',
            name: 'No Data'
        }, {
            from: 16,
            to: 20.99,
            color: '#f1b366',
            name: '16 - 20%'
        }, {
            from: 21,
            to: 25.99,
            color: '#e75c42',
            name: '21 - 25%'
        }, {
            from: 26,
            to: 30.99,
            color: '#ce3732',
            name: '26 - 30%'
        }, {
            from: 31,
            color: '#a12330',
            name: '> 31%'
        }],
        'imagesMissingDescriptions': [{
            from: 0,
            to: 0,
            color: '#FFFFFF',
            name: 'No Data'
        }, {
            from: 57,
            to: 67.99,
            color: '#f1b366',
            name: '57 - 67%'
        }, {
            from: 68,
            to: 78.99,
            color: '#e75c42',
            name: '68 - 78%'
        }, {
            from: 79,
            to: 89.99,
            color: '#ce3732',
            name: '79 - 89%'
        }, {
            from: 90,
            color: '#a12330',
            name: '> 90%'
        }],
        'docsWithContrast': [{
            from: 0,
            to: 0,
            color: '#FFFFFF',
            name: 'No Data'
        }, {
            from: 25,
            to: 29.99,
            color: '#f1b366',
            name: '25 - 29%'
        }, {
            from: 30,
            to: 34.99,
            color: '#e75c42',
            name: '30 - 34%'
        }, {
            from: 35,
            to: 39.99,
            color: '#ce3732',
            name: '35 - 39%'
        }, {
            from: 40,
            color: '#a12330',
            name: '> 40%'
        }]
    };

    Papa.parse('/research/AccessibilityAndIssues.csv', {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: function(results) {
            var tmp = {};
            for (var i = 0; i < results.data.length; i++) {
                tmp[results.data[i].state] = results.data[i];
            }
            for (var i = 0; i < scoresAndIssuesData.length; i++) {
                var state = tmp[scoresAndIssuesData[i].name];
                scoresAndIssuesData[i].overallFiles = 0;
                scoresAndIssuesData[i].overallWysiwyg = 0;
                scoresAndIssuesData[i].scannedPDFs = 0;
                scoresAndIssuesData[i].untaggedPDFs = 0;
                scoresAndIssuesData[i].docsMissingHeadings = 0;
                scoresAndIssuesData[i].imagesMissingDescriptions = 0;
                scoresAndIssuesData[i].docsWithContrast = 0;
                if (state) {
                    scoresAndIssuesData[i].overallFiles = (state.overallFiles * 100).toFixed(2);
                    scoresAndIssuesData[i].overallWysiwyg = (state.overallWysiwyg * 100).toFixed(2);
                    scoresAndIssuesData[i].scannedPDFs = (state.scannedPDFs * 100).toFixed(2);
                    scoresAndIssuesData[i].untaggedPDFs = (state.untaggedPDFs * 100).toFixed(2);
                    scoresAndIssuesData[i].docsMissingHeadings = (state.docsMissingHeadings * 100).toFixed(2);
                    scoresAndIssuesData[i].imagesMissingDescriptions = (state.imagesMissingDescriptions * 100).toFixed(2);
                    scoresAndIssuesData[i].docsWithContrast = (state.docsWithContrast * 100).toFixed(2);
                }
            }
            renderScoresAndIssues();
        }
    });

    $("#scoresandissues-select").change(function() {
        scoresAndIssuesDataSelected = $(this).val();
        renderScoresAndIssues();
    });

    function renderScoresAndIssues() {

        for (var i = 0; i < scoresAndIssuesData.length; i++) {
            scoresAndIssuesData[i]['value'] = scoresAndIssuesData[i][scoresAndIssuesDataSelected];
        };

        Highcharts.chart('scoresandissues', {
            chart: {
                type: 'tilemap',
                inverted: true,
                height: '70%',
                backgroundColor: "transparent"
            },

            exporting: {
                enabled: false
            },

            title: {
                text: undefined
            },

            xAxis: {
                visible: false
            },

            yAxis: {
                visible: false
            },

            colorAxis: {
                dataClasses: scoresAndIssuesLegend[scoresAndIssuesDataSelected]
            },

            tooltip: {
                headerFormat: '<strong>{point.key}</strong><br/>',
                useHTML: true,
                pointFormatter: function(point) {
                    var label = '';

                    if (scoresAndIssuesDataSelected === 'overallFiles') {
                        label += 'Overall File Accessibility Score:';
                    } else if (scoresAndIssuesDataSelected === 'overallWysiwyg') {
                        label += 'Overall WYSIWYG Accessibility Score:';
                    } else if (scoresAndIssuesDataSelected === 'scannedPDFs') {
                        label += '% Scanned PDFs:';
                    } else if (scoresAndIssuesDataSelected === 'untaggedPDFs') {
                        label += '% Untagged PDFs:';
                    } else if (scoresAndIssuesDataSelected === 'docsMissingHeadings') {
                        label += '% Documents Missing Headings:';
                    } else if (scoresAndIssuesDataSelected === 'imagesMissingDescriptions') {
                        label += '% Images Missing Descriptions:';
                    } else if (scoresAndIssuesDataSelected === 'docsWithContrast') {
                        label += '% Documents With Contrast Issues:';
                    }
                    label += ' <strong>' + this.value + '%</strong>';

                    /* label += '<br/><br/>';
                    
                    if (scoresAndIssuesDataSelected !== 'overallFiles') {
                    	label += 'Overall File Accessibility Score: <strong>' + this.overallFiles + '%</strong><br/>';
                    }
                    if (scoresAndIssuesDataSelected !== 'overallWysiwyg') {
                    	label += 'Overall WYSIWYG Accessibility Score: <strong>' + this.overallWysiwyg + '%</strong><br/>';
                    }
                    if (scoresAndIssuesDataSelected !== 'scannedPDFs') {
                    	label += '% Scanned PDFs: <strong>' + this.scannedPDFs + '%</strong><br/>';
                    } 
                    if (scoresAndIssuesDataSelected !== 'untaggedPDFs') {
                    	label += '% Untagged PDFs: <strong>' + this.untaggedPDFs + '%</strong><br/>';
                    } 
                    if (scoresAndIssuesDataSelected !== 'docsMissingHeadings') {
                    	label += '% Documents Missing Headings: <strong>' + this.docsMissingHeadings + '%</strong><br/>';
                    } 
                    if (scoresAndIssuesDataSelected !== 'imagesMissingDescriptions') {
                    	label += '% Images Missing Descriptions: <strong>' + this.imagesMissingDescriptions + '%</strong><br/>';
                    } 
                    if (scoresAndIssuesDataSelected !== 'docsWithContrast') {
                    	label += '% Documents With Contrast Issues: <strong>' + this.docsWithContrast + '%</strong><br/>';
                    } */

                    if (!this.value) {
                        label = 'No data';
                    }

                    return label;
                }
            },

            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.hc-a2}',
                        color: '#000000',
                        style: {
                            textOutline: false
                        }
                    }
                }
            },

            series: [{
                name: '',
                data: scoresAndIssuesData
            }]
        });
    };

    ////////////////////////
    // Adoption and Usage //
    ////////////////////////

    var adoptionAndUsageDataSelected = 'totalInstitutions';
    var adoptionAndUsageData = [];

    Papa.parse('/research/AdoptionAndUsage.csv', {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: function(results) {
            for (var i = 0; i < results.data.length; i++) {
                if (results.data[i].state) {
                    results.data[i].name = results.data[i].state;

                    var regionExists = false;
                    for (var r = 0; r < adoptionAndUsageData.length; r++) {
                        if (adoptionAndUsageData[r].name === results.data[i].region) {
                            regionExists = true;
                            adoptionAndUsageData[r].data.push(results.data[i]);
                        }
                    }
                    if (!regionExists) {
                        adoptionAndUsageData.push({
                            'name': results.data[i].region,
                            'data': [results.data[i]]
                        })
                    }
                }
            }
            renderAdoptionAndUsage();
        }
    });

    $("#adoptionandusage-select").change(function() {
        adoptionAndUsageDataSelected = $(this).val();
        renderAdoptionAndUsage();
    });

    function renderAdoptionAndUsage() {

        var total = 0;
        for (var i = 0; i < adoptionAndUsageData.length; i++) {
            for (var s = 0; s < adoptionAndUsageData[i].data.length; s++) {
                adoptionAndUsageData[i].data[s]['value'] = adoptionAndUsageData[i].data[s][adoptionAndUsageDataSelected];
                total += adoptionAndUsageData[i].data[s]['value'];
            }
        };

        Highcharts.chart('adoptionandusage', {
            chart: {
                type: 'packedbubble',
                height: '70%',
                backgroundColor: 'transparent'
            },
            exporting: {
                enabled: false
            },
            title: {
                text: undefined
            },
            tooltip: {
                useHTML: true,
                pointFormat: '<b>{point.name}:</b> {point.value}'
            },
            plotOptions: {
                packedbubble: {
                    minSize: '20%',
                    maxSize: '500%',
                    zMin: 0,
                    zMax: total,
                    layoutAlgorithm: {
                        splitSeries: false,
                        gravitationalConstant: 0.02
                    },
                    dataLabels: {
                        enabled: true,
                        format: '{point.code}',

                        style: {
                            color: 'black',
                            textOutline: 'none',
                            fontWeight: 'normal'
                        }
                    }
                }
            },
            series: adoptionAndUsageData
        });
    }

})();
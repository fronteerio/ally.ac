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
		'overallFiles':	[{
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
	
	$( "#scoresandissues-select" ).change(function() {
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

    Highcharts.chart('adoptionandusage', {
        chart: {
            type: 'packedbubble',
            height: '100%',
            backgroundColor: 'transparent'
        },
        exporting: {
            enabled: false
        },
        title: {
            text: 'Carbon emissions around the world (2014)'
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>'
        },
        plotOptions: {
            packedbubble: {
                minSize: '30%',
                maxSize: '120%',
                zMin: 0,
                zMax: 1000,
                layoutAlgorithm: {
                    splitSeries: false,
                    gravitationalConstant: 0.02
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 250
                    },
                    style: {
                        color: 'black',
                        textOutline: 'none',
                        fontWeight: 'normal'
                    }
                }
            }
        },
        series: [{
            name: 'Europe',
            data: [{
                    name: 'Germany',
                    value: 767.1
                }, {
                    name: 'Croatia',
                    value: 20.7
                },
                {
                    name: "Belgium",
                    value: 97.2
                },
                {
                    name: "Czech Republic",
                    value: 111.7
                },
                {
                    name: "Netherlands",
                    value: 158.1
                },
                {
                    name: "Spain",
                    value: 241.6
                },
                {
                    name: "Ukraine",
                    value: 249.1
                },
                {
                    name: "Poland",
                    value: 298.1
                },
                {
                    name: "France",
                    value: 323.7
                },
                {
                    name: "Romania",
                    value: 78.3
                },
                {
                    name: "United Kingdom",
                    value: 415.4
                }, {
                    name: "Turkey",
                    value: 353.2
                }, {
                    name: "Italy",
                    value: 337.6
                },
                {
                    name: "Greece",
                    value: 71.1
                },
                {
                    name: "Austria",
                    value: 69.8
                },
                {
                    name: "Belarus",
                    value: 67.7
                },
                {
                    name: "Serbia",
                    value: 59.3
                },
                {
                    name: "Finland",
                    value: 54.8
                },
                {
                    name: "Bulgaria",
                    value: 51.2
                },
                {
                    name: "Portugal",
                    value: 48.3
                },
                {
                    name: "Norway",
                    value: 44.4
                },
                {
                    name: "Sweden",
                    value: 44.3
                },
                {
                    name: "Hungary",
                    value: 43.7
                },
                {
                    name: "Switzerland",
                    value: 40.2
                },
                {
                    name: "Denmark",
                    value: 40
                },
                {
                    name: "Slovakia",
                    value: 34.7
                },
                {
                    name: "Ireland",
                    value: 34.6
                },
                {
                    name: "Croatia",
                    value: 20.7
                },
                {
                    name: "Estonia",
                    value: 19.4
                },
                {
                    name: "Slovenia",
                    value: 16.7
                },
                {
                    name: "Lithuania",
                    value: 12.3
                },
                {
                    name: "Luxembourg",
                    value: 10.4
                },
                {
                    name: "Macedonia",
                    value: 9.5
                },
                {
                    name: "Moldova",
                    value: 7.8
                },
                {
                    name: "Latvia",
                    value: 7.5
                },
                {
                    name: "Cyprus",
                    value: 7.2
                }
            ]
        }, {
            name: 'Africa',
            data: [{
                    name: "Senegal",
                    value: 8.2
                },
                {
                    name: "Cameroon",
                    value: 9.2
                },
                {
                    name: "Zimbabwe",
                    value: 13.1
                },
                {
                    name: "Ghana",
                    value: 14.1
                },
                {
                    name: "Kenya",
                    value: 14.1
                },
                {
                    name: "Sudan",
                    value: 17.3
                },
                {
                    name: "Tunisia",
                    value: 24.3
                },
                {
                    name: "Angola",
                    value: 25
                },
                {
                    name: "Libya",
                    value: 50.6
                },
                {
                    name: "Ivory Coast",
                    value: 7.3
                },
                {
                    name: "Morocco",
                    value: 60.7
                },
                {
                    name: "Ethiopia",
                    value: 8.9
                },
                {
                    name: "United Republic of Tanzania",
                    value: 9.1
                },
                {
                    name: "Nigeria",
                    value: 93.9
                },
                {
                    name: "South Africa",
                    value: 392.7
                }, {
                    name: "Egypt",
                    value: 225.1
                }, {
                    name: "Algeria",
                    value: 141.5
                }
            ]
        }, {
            name: 'Oceania',
            data: [{
                    name: "Australia",
                    value: 409.4
                },
                {
                    name: "New Zealand",
                    value: 34.1
                },
                {
                    name: "Papua New Guinea",
                    value: 7.1
                }
            ]
        }, {
            name: 'North America',
            data: [{
                    name: "Costa Rica",
                    value: 7.6
                },
                {
                    name: "Honduras",
                    value: 8.4
                },
                {
                    name: "Jamaica",
                    value: 8.3
                },
                {
                    name: "Panama",
                    value: 10.2
                },
                {
                    name: "Guatemala",
                    value: 12
                },
                {
                    name: "Dominican Republic",
                    value: 23.4
                },
                {
                    name: "Cuba",
                    value: 30.2
                },
                {
                    name: "USA",
                    value: 5334.5
                }, {
                    name: "Canada",
                    value: 566
                }, {
                    name: "Mexico",
                    value: 456.3
                }
            ]
        }, {
            name: 'South America',
            data: [{
                    name: "El Salvador",
                    value: 7.2
                },
                {
                    name: "Uruguay",
                    value: 8.1
                },
                {
                    name: "Bolivia",
                    value: 17.8
                },
                {
                    name: "Trinidad and Tobago",
                    value: 34
                },
                {
                    name: "Ecuador",
                    value: 43
                },
                {
                    name: "Chile",
                    value: 78.6
                },
                {
                    name: "Peru",
                    value: 52
                },
                {
                    name: "Colombia",
                    value: 74.1
                },
                {
                    name: "Brazil",
                    value: 501.1
                }, {
                    name: "Argentina",
                    value: 199
                },
                {
                    name: "Venezuela",
                    value: 195.2
                }
            ]
        }, {
            name: 'Asia',
            data: [{
                    name: "Nepal",
                    value: 6.5
                },
                {
                    name: "Georgia",
                    value: 6.5
                },
                {
                    name: "Brunei Darussalam",
                    value: 7.4
                },
                {
                    name: "Kyrgyzstan",
                    value: 7.4
                },
                {
                    name: "Afghanistan",
                    value: 7.9
                },
                {
                    name: "Myanmar",
                    value: 9.1
                },
                {
                    name: "Mongolia",
                    value: 14.7
                },
                {
                    name: "Sri Lanka",
                    value: 16.6
                },
                {
                    name: "Bahrain",
                    value: 20.5
                },
                {
                    name: "Yemen",
                    value: 22.6
                },
                {
                    name: "Jordan",
                    value: 22.3
                },
                {
                    name: "Lebanon",
                    value: 21.1
                },
                {
                    name: "Azerbaijan",
                    value: 31.7
                },
                {
                    name: "Singapore",
                    value: 47.8
                },
                {
                    name: "Hong Kong",
                    value: 49.9
                },
                {
                    name: "Syria",
                    value: 52.7
                },
                {
                    name: "DPR Korea",
                    value: 59.9
                },
                {
                    name: "Israel",
                    value: 64.8
                },
                {
                    name: "Turkmenistan",
                    value: 70.6
                },
                {
                    name: "Oman",
                    value: 74.3
                },
                {
                    name: "Qatar",
                    value: 88.8
                },
                {
                    name: "Philippines",
                    value: 96.9
                },
                {
                    name: "Kuwait",
                    value: 98.6
                },
                {
                    name: "Uzbekistan",
                    value: 122.6
                },
                {
                    name: "Iraq",
                    value: 139.9
                },
                {
                    name: "Pakistan",
                    value: 158.1
                },
                {
                    name: "Vietnam",
                    value: 190.2
                },
                {
                    name: "United Arab Emirates",
                    value: 201.1
                },
                {
                    name: "Malaysia",
                    value: 227.5
                },
                {
                    name: "Kazakhstan",
                    value: 236.2
                },
                {
                    name: "Thailand",
                    value: 272
                },
                {
                    name: "Taiwan",
                    value: 276.7
                },
                {
                    name: "Indonesia",
                    value: 453
                },
                {
                    name: "Saudi Arabia",
                    value: 494.8
                },
                {
                    name: "Japan",
                    value: 1278.9
                },
                {
                    name: "China",
                    value: 10540.8
                },
                {
                    name: "India",
                    value: 2341.9
                },
                {
                    name: "Russia",
                    value: 1766.4
                },
                {
                    name: "Iran",
                    value: 618.2
                },
                {
                    name: "Korea",
                    value: 610.1
                }
            ]
        }]
    });

})();
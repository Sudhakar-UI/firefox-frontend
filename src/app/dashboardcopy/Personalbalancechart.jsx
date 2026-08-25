import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import highchartsExporting from 'highcharts/modules/exporting';
import highchartsExportData from 'highcharts/modules/export-data';
import highchartsSeriesLabel from 'highcharts/modules/series-label';

const Personalbalancechart = () => {
    useEffect(() => {
        // Initialize the Highcharts modules
        highchartsAccessibility(Highcharts);
        highchartsExporting(Highcharts);
        highchartsExportData(Highcharts);
        highchartsSeriesLabel(Highcharts);
        
        // Highcharts configuration
        Highcharts.chart("spotwalletbalance", {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: "pie",
                outline: false
            },
            title: {
                text: ""
            },
            tooltip: {
                pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
            },
            accessibility: {
                point: {
                    valueSuffix: "%"
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: "pointer",
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true,
                    center: ['50%', '50%'] 
                }
            },
            series: [{
                name: "Crypto",
                colorByPoint: true,
                borderRadius: 0,
                innerSize: "75%",
                data: [{
                    name: "BTC 0.00310630",
                    y: 2.369,

                }, {
                    name: "ETH 0.00000839",
                    y: 3.369,
                },
               {
                    name: "USDT 0.00000839",
                    y: 3.369,
                },
                {
                    name: "BNB 0.00000839",
                    y: 3.369,
                },
                {
                    name: "TRX 0.00000839",
                    y: 3.369,
                }]
            }],
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                itemMarginTop: 5,
                itemMarginBottom: 5,
                itemStyle: {
                    fontSize: '13px' // Change this value to the desired font size
                }
            }
        });
    }, []);

    return <div id="spotwalletbalance" className='spotbalancechart' style={{ width: '100%', height: '360px', outline: 'none' }}></div>;
};

export default Personalbalancechart;
import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import highchartsExporting from 'highcharts/modules/exporting';
import highchartsExportData from 'highcharts/modules/export-data';
import highchartsSeriesLabel from 'highcharts/modules/series-label';

highchartsAccessibility(Highcharts);
highchartsExporting(Highcharts);
highchartsExportData(Highcharts);
highchartsSeriesLabel(Highcharts);

const Chart = () => {
    useEffect(() => {
        // Example date categories (can be dynamic)
        const dateCategories = ['2025-06-25', '2025-06-26', '2025-06-27', '2025-06-28', '2025-06-29', '2025-06-30'];

        Highcharts.chart("spotwalletbalance", {
            chart: {
                type: 'column'
            },

            title: {
                text: '',
                align: 'left'
            },

            xAxis: {
                categories: dateCategories,
                title: {
                    text: 'Date'
                },
                labels: {
                    format: '{value}' // Keep date format
                }
            },

            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Amount'
                }
            },

            tooltip: {
                shared: true,
                crosshairs: true
            },

            plotOptions: {
                column: {
                    stacking: 'normal',
                    pointWidth: 30 // Reduce column width (default is auto)
                }
            },

            series: [{
                name: 'Deposit',
                data: [148, 133, 124, 148, 133, 124],
                stack: 'Wallet',
                color: '#37bf8f',
            }, {
                name: 'Withdraw',
                data: [102, 98, 65, 148, 133, 124],
                stack: 'Wallet',
                color: '#f97b7b',
            }]
        });
    }, []);

    return <div id="spotwalletbalance" className='charttransation' style={{ width: '100%', height: '360px', outline: 'none' }}></div>;
};

export default Chart;
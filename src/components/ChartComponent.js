import React, { useEffect, useRef } from 'react';
import { createChart, ColorType } from 'lightweight-charts';

function ChartComponent() {

    const chartContainerRef = useRef();

    useEffect(() => {
        drawChart()
    }, []);

    function drawChart() {
        // const container = document.getElementById('ChartContainer');
        const chartOptions = { layout: { textColor: 'blue', background: { type: ColorType.Solid, color: 'white' } }, width: chartContainerRef.current.clientWidth, watermark: { color: 'grey', visible: true, text: 'light-weight-charts', vertAlign: 'top', fontSize: 30 }, autoSize: true, crosshair: { mode: 'Normal', vertLine: { color: 'blue' } } };
        const chart = createChart(chartContainerRef.current, chartOptions);
        const candlestickSeries = chart.addCandlestickSeries({ upColor: '#26a69a', downColor: '#ef5350', borderVisible: true, wickUpColor: '#26a69a', wickDownColor: '#ef5350' });
        candlestickSeries.setData([
            { time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
            { time: '2018-12-23', open: 45.12, high: 53.90, low: 45.12, close: 48.09 },
            { time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
            { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.50 },
            { time: '2018-12-26', open: 67.71, high: 105.85, low: 66.67, close: 91.04 },
            { time: '2018-12-27', open: 91.04, high: 121.40, low: 82.70, close: 111.40 },
            { time: '2018-12-28', open: 111.51, high: 142.83, low: 103.34, close: 131.25 },
            { time: '2018-12-29', open: 131.33, high: 151.17, low: 77.68, close: 96.43 },
            { time: '2018-12-30', open: 106.33, high: 110.20, low: 90.39, close: 98.10 },
            { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },
            { time: '2019-01-01', open: 110.86, high: 115.69, low: 65.66, close: 105.26 },
            { time: '2019-01-02', open: 110.75, high: 113.69, low: 64.66, close: 110.26 },
            { time: '2019-01-03', open: 111.75, high: 113.71, low: 64.01, close: 109.26 },
        ]);

        setTimeout(() => {
            candlestickSeries.update({ time: '2019-01-04', open: 111.75, high: 112.69, low: 66.66, close: 111.26 });
        }, 3000);

        chart.timeScale().fitContent();

        const handleResize = () => {
            chart.applyOptions({ width: chartContainerRef.current.clientWidth });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
        };
    }

    return (
        <div id='ChartContainer' ref={chartContainerRef}>

        </div>
    );
}

export default ChartComponent;
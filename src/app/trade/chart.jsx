import React, { useEffect } from 'react'
import { Nav, Tab } from 'react-bootstrap';
import Depthchart from './depthchart'

export const page = () => {

    const theme = "dark";

    useEffect(() => 
    {

        if (theme == 'dark')
        {
            const iframes = document.querySelectorAll('.tradechartlist iframe');

            iframes.forEach(iframe => {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            const body = iframeDoc.body;
            body.classList.add('nightmode');
            });
         }

        const iframes = document.querySelectorAll('.tradechartlist iframe');

        iframes.forEach(iframe => 
        {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            const body = iframeDoc.body;
            body.classList.add('');
         });
        
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;

        script.onload = () => {
            new window.TradingView.widget({
                "autosize": true,
                "fullscreen": true,
                "symbol": "Binance:BTCUSD",
                "interval": "5",
                "timezone": "UTC",
                "toolbar_bg": "#000",
                "theme": "light",
                "style": "1",
                "locale": "en",
                "enable_publishing": false,
                "allow_symbol_change": false,
                "container_id": "tradingview_49396",
                "withdateranges": true,
                "hide_side_toolbar": false,
                "hide_legend": true
            });
        };
        document.body.appendChild(script);
    }, []);
    return (
        <div className="chart griddragoption">
            <Tab.Container defaultActiveKey="tradechart">
                <div className="innerpagetab historytab">
                    <Nav variant="pills" className="tabbanner">
                        <Nav.Item><Nav.Link eventKey="tradechart">Price Chart</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="marketdepth">Depth Chart</Nav.Link></Nav.Item>
                    </Nav>
                </div>
                <Tab.Content className="contentbox">
                    <Tab.Pane eventKey="tradechart" className="tradechartlist">
                        <div className="tradingview-widget-container">
                            <div id="tradingview_49396"></div>
                        </div>
                       {/* <iframe className="">
                            <html>
                                <body>test</body>
                            </html>
                        </iframe>        */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="marketdepth" className="marketchart">
                        <Depthchart /> 
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    )
}
export default page;
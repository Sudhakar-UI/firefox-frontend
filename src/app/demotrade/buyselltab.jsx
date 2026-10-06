import React from 'react'
import { Nav } from 'react-bootstrap';

const buyselltab = () => {
    function mobilebuyTab(event) {
        const element1 = document.getElementById("tradepage");
        element1?.classList.add("buyorderformactive1");
        element1?.classList.remove("sellorderformactive1");
        event.target.classList.add("active");

        const tabFirst = document.getElementById("sellTab");
        tabFirst?.classList.remove("active");
    }

    function mobilesellTab(event) {
        const element2 = document.getElementById("tradepage");
        element2?.classList.add("sellorderformactive1");
        element2?.classList.remove("buyorderformactive1");
        event.target.classList.add("active");

        const tabSecond = document.getElementById("buyTab");
        tabSecond?.classList.remove("active");
    }

    return (
        <div className="buyselltabbg buyselltopbox">
            <Nav variant="pills" className="orderfrmtab buyselltab">
                <Nav.Item><Nav.Link id="buyclose" onClick={mobilebuyTab}>Buy</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link id="sellclose" onClick={mobilesellTab}>Sell</Nav.Link></Nav.Item>
            </Nav>
        </div>
    )
}

export default buyselltab
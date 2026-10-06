import React from 'react'
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Table } from 'react-bootstrap';


const tradehistory = () => {
    return (
        <div className="tradehistory griddragoption">
            <h2 className="heading-box">Trade History</h2>
            <Simplebar className="table-responsive sitescroll">
                <Table className="sitetable" id='table9'>
                    <thead>
                        <tr>
                            <th>Price(BTC)</th>
                            <th>Amount(BTC)</th>
                            <th>Date &amp; Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span className="t-green">0.36985936</span></td>
                            <td>0.00520674897</td>
                            <td>30-12-24,07:16:16</td>
                        </tr>
                        <tr>
                            <td><span className="t-green">0.36985936</span></td>
                            <td>0.00520674897</td>
                            <td>30-12-24,07:16:16</td>
                        </tr>
                        <tr>
                            <td><span className="t-red">0.36985936</span></td>
                            <td>0.00520674897</td>
                            <td>30-12-24,07:16:16</td>
                        </tr>
                        <tr>
                            <td><span className="t-red">0.36985936</span></td>
                            <td>0.00520674897</td>
                            <td>30-12-24,07:16:16</td>
                        </tr>
                        <tr>
                            <td><span className="t-red">0.36985936</span></td>
                            <td>0.00520674897</td>
                            <td>30-12-24,07:16:16</td>
                        </tr>
                        <tr>
                            <td><span className="t-red">0.36985936</span></td>
                            <td>0.00520674897</td>
                            <td>30-12-24,07:16:16</td>
                        </tr>
                    </tbody>
                </Table>
            </Simplebar>
        </div>
    )
}

export default tradehistory
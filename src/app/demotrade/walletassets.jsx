import React from 'react'
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Table } from 'react-bootstrap';


const tradehistory = () => {
    return (
        <div className="walletassets griddragoption">
            <h2 className="heading-box mb-3">Assets</h2>
            <Simplebar className="table-responsive sitescroll">
                <Table className="sitetable">                   
                    <tbody>
                        <tr>
                            <td>BTC Available</td>
                            <td className="text-end">0.223659 BTC</td>
                        </tr>
                        <tr>
                            <td>ETH Available</td>
                            <td className="text-end">0.223659 ETH</td>
                        </tr>
                        <tr className='bg-hover-none'>
                            <td colSpan={2} className="text-center">
                                <div className="d-flex">
                                    <a href="#" className="btn btn-sm border-green me-2">Deposit</a>
                                    <a href="#" className="btn btn-sm border-red me-2">Withdraw</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>                     
                </Table>
            </Simplebar>
        </div>
    )
}

export default tradehistory
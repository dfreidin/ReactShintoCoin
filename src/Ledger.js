import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Ledger extends Component {
    render() {
        return (
            <div>
                <h1>Browse the Ledger</h1>
                <p>Here you can browse all ShintoCoin transactions</p>
                <table className="table striped-table">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Amount</th>
                            <th>Value</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.ledger.map(entry => (
                            <tr key={entry.id}>
                                <td>{entry.action}</td>
                                <td>{entry.amount}</td>
                                <td>{entry.value}</td>
                                <td>
                                    <Link to={`/transaction/${entry.id}`} className="btn btn-secondary">Details</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Ledger;
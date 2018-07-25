import React, { Component } from "react";

class Details extends Component {
    render() {
        return (
            <div>
                <h1>Ledger Transaction Details</h1>
                <p>Detailed view of a Transaction from the ledger</p>
                <p>Transaction #{this.props.entry.id}</p>
                <p>{this.props.entry.action} {this.props.entry.amount} ShintoCoin</p>
            </div>
        )
    }
}

export default Details;
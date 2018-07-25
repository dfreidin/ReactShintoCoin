import React, { Component } from 'react';

class BuySell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
        this.submit = this.submit.bind(this);
    }
    submit(event) {
        event.preventDefault();
        this.props.submit(this.state.number);
        this.setState({
            number: 0
        });
    }
    render() {
        return (
            <div>
                <h1>{this.props.action} ShintoCoins</h1>
                <p>Current ShintoCoin Value: ${this.props.value.toFixed(2)}</p>
                <p>Number of ShintoCoins Owned: {this.props.owned}</p>
                <form onSubmit={this.submit}><p>
                    <input type="number" value={this.state.number} onChange={event => this.setState({number: parseInt(event.target.value)})} />
                    <input type="submit" value={this.props.action} />
                </p></form>
            </div>
        )
    }
}

export default BuySell;
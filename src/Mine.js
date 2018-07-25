import React, { Component } from "react";

class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: 0
        };
        this.submit = this.submit.bind(this);
    }
    submit(event) {
        event.preventDefault();
        this.props.submit(this.state.answer);
        this.setState({
            answer: 0
        });
    }
    render() {
        return (
            <div>
                <h1>Mine ShintoCoins</h1>
                <p>Here you can mine ShintoCoins by being the first to solve the algorithm:</p>
                <p>What is the 7th fibbonacci number?</p>
                <form onSubmit={this.submit}><p>
                    <input type="number" value={this.state.answer} onChange={(event) => this.setState({answer: event.target.value})} />
                    <input type="submit" value="Mine" />
                </p></form>
            </div>
        )
    }
}

export default Mine;
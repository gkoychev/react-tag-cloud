import React from "react";
import data from "../data.json";


class App extends React.Component {

    constructor(props) {
        super(props);

        this.minScore = data[0].sentimentScore;   // assume we have at least one element;
        this.maxScore = this.minScore;

        data.forEach(el => {
            if (el.sentimentScore < this.minScore) {
                this.minScore = el.sentimentScore;
            }
            if (el.sentimentScore > this.maxScore) {
                this.maxScore = el.sentimentScore;
            }
        });
    }

    getChildContext() {
        return {
            data,
            maxScore: this.maxScore,
            minScore: this.minScore,
        };
    }

    render() {
        return <div>{this.props.children}</div>;
    }
}

App.childContextTypes = {
    data: React.PropTypes.array,
    maxScore: React.PropTypes.number,
    minScore: React.PropTypes.number,
};

export default App;

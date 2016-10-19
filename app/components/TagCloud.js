import React from "react";

const MIN_FONT_SIZE = 10;
const MAX_FONT_SIZE = 50;

class TagCloud extends React.Component {

    constructor(props) {
        super(props);

        const { min, max } = props;
        this.fontRatio = (MAX_FONT_SIZE - MIN_FONT_SIZE) / (max - min);
    }

    renderItem(el) {
        const { min } = this.props;
        const fontSize = 10 + (el.sentimentScore - min) * this.fontRatio;

        return <span style={{paddingRight: 20, fontSize }}>{el.label}</span>;
    }

    render() {
        const { data } = this.props;
        const dataEls = data.map(el => this.renderItem(el));

        return <div>{dataEls}</div>;
    }
}

TagCloud.propTypes = {
    data: React.PropTypes.array.isRequired,
    min: React.PropTypes.number.isRequired,
    max: React.PropTypes.number.isRequired,
};

export default TagCloud;

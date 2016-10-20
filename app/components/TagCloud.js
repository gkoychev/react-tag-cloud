import React from 'react';
import { Link } from 'react-router';

const MIN_FONT_SIZE = 10;
const MAX_FONT_SIZE = 50;

class TagCloud extends React.Component {

  constructor(props, context) {
    super(props, context);

    const { minScore, maxScore } = context;
    this.fontRatio = (MAX_FONT_SIZE - MIN_FONT_SIZE) / (maxScore - minScore);
  }

  renderItem(el, idx) {
    const { minScore } = this.context;
    const fontSize = 10 + ((el.sentimentScore - minScore) * this.fontRatio);

    return (
      <Link to={`/tag/${idx}`} key={idx}>
        <span style={{ paddingRight: 20, fontSize }}>
          {el.label}
        </span>
      </Link>
    );
  }

  render() {
    const { data } = this.context;
    const dataEls = data.map((el, idx) => this.renderItem(el, idx));

    return <div>{dataEls}</div>;
  }
}

TagCloud.contextTypes = {
  data: React.PropTypes.array,
  maxScore: React.PropTypes.number,
  minScore: React.PropTypes.number,
};

export default TagCloud;

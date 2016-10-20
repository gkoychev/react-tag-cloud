import React from 'react';
import { Link } from 'react-router';

const TagInfo = ({ params: { idx } }, { data }) => {
  const el = data[idx];
  const mentionsKeys = Object.keys(el.sentiment);
  const totalMentions = mentionsKeys.reduce((prev, key) => prev + el.sentiment[key], 0);

  // prepare mentions data
  const mentionsData = [];
  mentionsData.push({
    title: 'total',
    value: totalMentions,
  });
  mentionsKeys.map((mentionKey) => {
    return mentionsData.push({
      title: mentionKey,
      value: el.sentiment[mentionKey],
    });
  });

  // render mentions data
  const mentions = mentionsData.map(item => (<li>{item.title}: {item.value}</li>));
  const pageTypes = Object.keys(el.pageType).map(key => (<li>{key}: {el.pageType[key]}</li>));

  return (
    <div>
      <Link to="/">&larr; Back</Link>

      <h2>{el.label}</h2>
      <h4>Mentions</h4>
      <ul>
        {mentions}
      </ul>
      <h4>Page Types</h4>
      <ul>
        {pageTypes}
      </ul>
    </div>
  );
};

TagInfo.contextTypes = {
  data: React.PropTypes.array,
};

TagInfo.propTypes = {
  params: React.PropTypes.object,
};

export default TagInfo;

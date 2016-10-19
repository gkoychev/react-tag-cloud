import React from "react";

const TagInfo = ({ params: { idx }}, { data }) => {
    const el = data[idx];
    return <div>{JSON.stringify(el)}</div>;
};

TagInfo.contextTypes = {
    data: React.PropTypes.array,
};

TagInfo.propTypes = {
    params: React.PropTypes.object,
};

export default TagInfo;

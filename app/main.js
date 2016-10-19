import React from "react";
import ReactDOM from "react-dom";
import TagCloud from "./components/TagCloud";
import data from "./data.json";

let minScore = data[0].sentimentScore;   // assume we have at least one element;
let maxScore = minScore;

data.forEach(el => {
    if (el.sentimentScore < minScore) {
        minScore = el.sentimentScore;
    }
    if (el.sentimentScore > maxScore) {
        maxScore = el.sentimentScore;
    }
});

ReactDOM.render(
    <TagCloud data={data} min={minScore} max={maxScore} />,
    document.querySelector("#container")
);  
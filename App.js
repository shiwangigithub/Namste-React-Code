const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
[React.createElement("h2",{},"I am heading in child1"),
React.createElement("p",{},"I am paragraph in child1")]),
React.createElement("div",{id:"child2"},
[React.createElement("h2",{},"I am heading in child2"),
React.createElement("p",{},"I am paragraph in child2")])]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


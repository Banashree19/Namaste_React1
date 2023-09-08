const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hey this Best of REACT"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hey this Best of REACT22"),
    React.createElement("h2", {}, "I am h22 tag"),
  ])
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

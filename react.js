// const heading = document.createElement("h1");
// heading.innerHTML = "hello by javascript"

// const root = document.getElementById("root");
// root.appendChild(heading)

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "Hi iam an h1 tag"), React.createElement("h2", {}, "Hi iam an h2 tag")]
    ));

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)

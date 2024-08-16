/**
 * 
 * 
 * <div id = "parent">
 *    <div id = "child">
 *      <h1>I am a h1 Tag</h1>
 *      <h2>I am a h2 Tag </h2>
 *    </div>
 *    <div id = "child2">
 *      <h1>I am a h1 Tag</h1>
 *      <h2>I am a h2 Tag </h2>
 *    </div>
 * </div>
 
 */

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 Tag"),
    React.createElement("h2", {}, "I am a h2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a h1 Tag of child2"),
    React.createElement("h2", {}, "I am a h2 Tag of child2"),
  ]),
]);

// const heading = React.createElement("h1",{id:"heading", xyz:"abc"},"Hello World from React");

// console.log(heading)
// console.log(typeof heading)

const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(root)

// console.log(typeof root)

root.render(heading);

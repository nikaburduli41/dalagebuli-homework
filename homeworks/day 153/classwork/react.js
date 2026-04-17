import React from "react";
import ReactDOM from "react-dom/client";
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function MyComponent() {
  return <h1>hello world</h1>;
}
root.render(<MyComponent />);
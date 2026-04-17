import react from "react";
import { useState } from "react";

function App() {
  const [padder, setPadder] = usestate([]);
  function adder() {
    setPadder((prev) => [
      ...padder,<><p>paragraph</p></>,
    ]);
  }
  return (
    <>
      <div>{padder}</div>
      <button onClick={adder}>click me</button>
    </>
  );
}
export default App;

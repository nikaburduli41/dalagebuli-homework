import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((gotdata) => setData(gotdata));
  }, []);
  console.log(data);
  return (
    <>
      <div>
        {data.map((data1) => (
          <div>
            <h1>{data1.category}</h1>
            <h1>id:{data1.id}</h1>
            <h1>{data1.title}</h1>
            <p>Price:{data1.price}</p>
            <p>{data1.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default App;

import { useEffect, useState } from "react";

export const ApiData = () => {
  const [apiData, setApiData] = useState([]);
//   const api = "https://jsonplaceholder.typicode.com/posts";
  const api = "https://jsonplaceholder.typicode.com/photos";


  const pokeMone = () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((error) => {
        console.log(error);
      });
  };
console.log(apiData)
  useEffect(() => {
    pokeMone();
  }, []);

  if (apiData) {
    return (
      <div>
        {apiData.map((currentEl) => {
          return <li key={currentEl.id}>
            <img src={currentEl.url} alt="" />

            {/* {currentEl.title} */}
          </li>;
        })}
      </div>
    );
  }
};

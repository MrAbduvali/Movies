import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/all/day?api_key=c7db360e140aaa2ff0ac6e795bc11f61")
      .then(response => response.json())
      .then(commits => setData(commits.results));
  }, [])

  const items = [...data]
  // console.log(items);
  return (
    <div className="App">
      {items.map(item => {

        return (
          <div key={item.id}>
            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`} />
          </div>
        )
      })}
    </div>
  );
}

export default App;

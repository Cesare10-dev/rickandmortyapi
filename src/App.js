import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Home";

function App() {
  const [species, setSpecies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?name=${query}`
      );
      const data = await res.json();
      setSpecies(data.results);
      console.log(data.results);
    };
    fetchData();
  }, [query]);

  return (
    <div className="h-screen w-full">
      <h1 className="bg-yellow-500 h-20 flex items-center justify-center text-center text-4xl text-white font-bold">
        Rick and Morty Api Challenge
      </h1>
      <div className="">
        <Home species={species} getQuery={(q) => setQuery(q)} />
      </div>
    </div>
  );
}

export default App;

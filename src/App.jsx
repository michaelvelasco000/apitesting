import "./App.css";
import { useState, useEffect } from "react";

const url = `https://animechan.xyz/api/random/`;

function App() {
  const [quote, setQuote] = useState("");
  const [anime, setAnime] = useState("");
  const [character, setCharacter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        setQuote(json.quote);
        setAnime(json.anime);
        setCharacter(json.character);
      } catch (error) {
        // Handle errors here if necessary
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <p>Hello</p>
      <p>anime: {anime}</p>
      <p>Character: {character}</p>
      <p>Quote: {quote}</p>
      <button onClick={() => window.location.reload(false)}>reload</button>
    </>
  );
}

export default App;

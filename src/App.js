import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import EmojiData from "./emoji.json";

function App() {

  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = EmojiData.filter((emoji) => emoji.title.toLowerCase()
      .includes(search.toLowerCase()));

    setData(newData);
  }, [search]);

  const copyEmojiToClipboard = (symbol) => {
    navigator.clipboard.writeText(symbol);
  };


  return (
    <div className='App' >
      <div>
        <h3 className='title'>
        😺 Emoji Arama Motoru 😺
        </h3>

        <input type='text'
       
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <hr/>
      </div>
      {data.map((emoji) => (
        <div className="card" key={emoji.title} >
          <div className="card-body" >
            <span>
              {emoji.symbol} {emoji.title}
            </span>
            <button onClick={() => copyEmojiToClipboard(emoji.symbol)}>
              Emoji'yi Kopyala
            </button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  )

}

export default App;

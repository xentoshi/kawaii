import './App.css';
import img from './img.jpeg'
const twitterHandle = "https://twitter.com/xentoshi"
const github = "https://github.com/xentoshi"
const spotify = "https://open.spotify.com/playlist/4JbUa03GgHZrDisCMraXQg?si=5a80e3dfe356456f"
const yourlittlekyoto = "https://www.instagram.com/yourlittlekyoto/"
const laptopDAO = "https://www.laptopdao.org/"
const linkedin = "https://www.linkedin.com/in/xentoshi/"


function App() {
  return (
    <div className="App">
      {/*HEADER*/}
      <header className="App-header">
        <p>Hi, my name is xentoshi and my ninja way is gentle, but persistent.</p>
      </header>
      <div className="body">
      <p>Currently, I'm the founder of <a href ={laptopDAO} target="_blank" rel="noopener noreferrer">laptopDAO ⚡️</a>-- a nonprofit that is buying laptops to kids and a lil japanese dish shop -- <a href ={yourlittlekyoto} target="_blank" rel="noopener noreferrer">your little kyoto 🍣</a></p>
      <p>When I like something -- I go after it, and I belive life is a wonderful adventure. While at it, may I meet you.</p>
        {/*LINKS*/}
        <div>
          <a href={twitterHandle} target="_blank" rel="noopener noreferrer"> twitter </a> |
          <a href ={github} target="_blank" rel="noopener noreferrer"> github </a> |
          <a href ={spotify} target="_blank" rel="noopener noreferrer"> spotify </a> |
          <a href ={linkedin} target="_blank" rel="noopener noreferrer"> linkedin </a>
        </div>
       </div>
       <div>
          <img src={img} alt="meow" width={300} height={400} />
        </div>
      </div>
  );
}

export default App;
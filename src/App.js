import './App.css';
const twitterHandle = "https://twitter.com/xentoshi"
const github = "https://github.com/xentoshi"
const spotify = "https://open.spotify.com/playlist/4JbUa03GgHZrDisCMraXQg?si=5a80e3dfe356456f"
const yourlittlekyoto = "https://www.instagram.com/yourlittlekyoto/"
const laptopDAO = "https://www.laptopdao.org/"

const cute1 = "https://giphy.com/embed/oebD5alsVBFKg"


function App() {
  return (
    <div className="App">
      {/*HEADER*/}
      <header className="App-header">
        <p>Hi, my name is xentoshi and my ninja way is gentle, but persistent.</p>
      </header>
      <div className="body">
      <p>Currently, I'm the founder of <a href ={laptopDAO} target="_blank" rel="noopener noreferrer">laptopDAO ⚡️</a>-- a nonprofit that is buying laptops to kids and making mood board -- <a href ={yourlittlekyoto} target="_blank" rel="noopener noreferrer">@yourlittlekyoto</a>.</p>
      <p>I believe life is a wonderful adventure. While at it, may I meet you. </p>
        {/*LINKS*/}
        <div>
          <a href={twitterHandle} target="_blank" rel="noopener noreferrer"> twitter </a> -
          <a href ={github} target="_blank" rel="noopener noreferrer"> github </a> -
          <a href ={spotify} target="_blank" rel="noopener noreferrer"> spotify </a> 
        </div>
        <iframe src={cute1} width="150" height="150" frameBorder="0" title="cute1" className='cute1' allowFullScreen></iframe>
       </div>
       <div>
         
        </div>
      </div>
  );
}

export default App;
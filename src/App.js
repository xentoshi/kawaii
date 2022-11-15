import './App.css';
const twitterHandle = "https://twitter.com/xentoshi"
const github = "https://github.com/xentoshi"
const gif = "https://giphy.com/embed/eg3fFwGU1TuwcKczgF"

function App() {
  return (
    <div className="App">
      {/*HEADER*/}
      <header className="App-header">
      rebuilding... 
      </header>
      <div className="body">
       <iframe src={gif} width="350" height="350" frameBorder="0" title="plant" className='gif' allowFullScreen></iframe>
       {/*LINKS*/}
      <div>
      <a href={twitterHandle} target="_blank" rel="noopener noreferrer">twitter</a> | <a href ={github} target="_blank" rel="noopener noreferrer">github</a>
      </div>
       </div>
      </div>
  );
}

export default App;

import './App.css';
const laptopDAO = "https://laptop-dao.vercel.app/"
const twitterHandle = "https://twitter.com/xentoshi"
const github = "https://github.com/xentoshi"
const gif = "https://giphy.com/embed/eg3fFwGU1TuwcKczgF"

function App() {
  return (
    <div className="App">
      {/*HEADER*/}
      <header className="App-header">
      hi, you can call me xentoshi!
      </header>
      <div className="body">
      {/*ABOUT*/}
      <div className="about">
       </div>
       <div className="about">
        <li>political science graduate </li>
        <li>self-taught js webdev</li>
        <li>building <a href={laptopDAO} target="_blank" rel="noopener noreferrer" alt="laptopDAO"> laptopDAO</a></li>
        <li>learning japanese</li>
       </div>
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

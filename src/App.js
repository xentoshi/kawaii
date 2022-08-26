import './App.css';
const laptopDAO = "https://laptop-dao.vercel.app/"
const twitterHandle = "https://twitter.com/xentoshi"
const plant = "https://giphy.com/embed/kBrUzSA32eZhhfrmzX"

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
            political science graduate, self-taught web dev creating in react, react three fiber, threejs -- <a href="https://github.com/xentoshi">github</a>. Currently providing builders with a tool at 
       <a href={laptopDAO} target="_blank" rel="noopener noreferrer" alt="laptopDAO"> laptopDAO</a> and learning japanese
       </div>
       <iframe src={plant} width="150" height="150" frameBorder="0" title="plant" className='plant' allowFullScreen></iframe>
       {/*PROJECTS*/}
      <div>
        if you want simple but cute website like this one -- <a href={twitterHandle}>contact me</a>!
      </div>
       </div>
      </div>
  );
}

export default App;

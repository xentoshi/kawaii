import './App.css';
const laptopDAO = "https://laptop-dao.vercel.app/"
// const twitterHandle = "https://twitter.com/xentoshi"
const cute1 = "https://giphy.com/embed/A9dZqpVpbLsju"
const cute2= "https://giphy.com/embed/oebD5alsVBFKg"
const plant = "https://giphy.com/embed/kBrUzSA32eZhhfrmzX"

function App() {
  return (
    <div className="App">
      {/*HEADER*/}
      <header className="App-header">
            Konichiwa, <br></br>
            my name is <b>xentoshi</b>
            <iframe src={cute1} width="150" height="150" frameBorder="0" title="cute1" className='cute1' allowFullScreen></iframe>
            <iframe src={cute2} width="130" height="130" frameBorder="0" title="cute2" className='cute2' allowFullScreen></iframe>
      </header>
      <div className="body">
      {/*ABOUT*/}
      <div className="about">
            I like things kawaii
       </div>

       <iframe src={plant} width="150" height="150" frameBorder="0" title="plant" className='plant' allowFullScreen></iframe>
       {/*PROJECTS*/}
       <div className="projects">
       Building 
       <a href={laptopDAO} target="_blank" rel="noopener noreferrer" alt="laptopDAO"> laptopDAO</a>
       <br></br>
      <img src='./pikachu.png' alt="" width={200}/>
       </div>
      </div>
    </div>
  );
}

export default App;

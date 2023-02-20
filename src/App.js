import radio from './assets/radio.gif'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <p>menu</p>
        <h2>LoFi Generator</h2>
        <button>CONTACT</button>
      </header>
      <main className="App__body">
        <p className='App__body__header'>
          LoFi music for videos | streasming | chilling
        </p>
       
        <div className='App__body__title'>
          <h1>
            A PLACE 
            <br/>
            <span className='text__dark'> TO <span className='text__spin'></span></span>
            <br/>
            <h5>WITH LOFI MUSIC</h5>
          </h1>
        </div>
        <div className='App__body__player'>
          <img src={radio}></img>
        </div>
        <div className='App__body__download'>
          <button>
            DOWNLOAD MUSIC HERE 
          </button>
        </div>
      </main>
      <footer className='App__footer'>privacy policy .  licensing</footer>
    </div>
  );
}

export default App;

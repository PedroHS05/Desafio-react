import logo from './logo.svg';
import './App.css';
import ChallengComponent from './components/ChallengComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='div1'>
          <h1>Essa é minha atividade em React</h1>
        </div>
        <ChallengComponent/>
      </header>
    </div>
  );
}

export default App;

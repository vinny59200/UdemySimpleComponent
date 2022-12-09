import logo from './logo.svg';
import './App.css';
import HelloMessageClassVersion from './HelloMessageClassVersion';
import HelloMessageFunctionVersion from './HelloMessageFunctionVersion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloMessageClassVersion name='Vince' />
        <br/><br/><br/><br/><br/>
        <HelloMessageFunctionVersion name='Vinny'/>
      </header>
    </div>
  );
}

export default App;

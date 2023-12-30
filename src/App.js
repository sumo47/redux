import logo from './logo.svg';
import './App.css';
import User from './User';
import Home from './containers/HomeContainer';

function App() {
  return (
    <div className="App">
      <h2>App clone</h2>
      <User data = {{key:"This is props data"}}/>
      <Home/>
    </div>
  );
}

export default App;

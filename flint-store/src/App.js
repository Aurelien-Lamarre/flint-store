import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import LightAndFire from './components/LightAndFire';
import Diy from './components/Diy';
import WeaponsAndHunting from './components/WeaponsAndHunting';
import TorchParty from './components/TorchParty';


function App() {
  return (
    <Router>
      <div className="App">
        <button><Link to='/lightandfire'>Fire and Light</Link></button>
        <button><Link to='/diy'>DIY</Link></button>
        <button><Link to='/weaponsandhunting'>Weapons and Hunting</Link></button>
        <button><Link to='/torchparty'>Torch Party</Link></button>
      </div>
      <Switch>
        <Route path='/lightandfire' component={LightAndFire} />
        <Route path='/diy' component={Diy} />
        <Route path='/weaponsandhunting' component={WeaponsAndHunting} />
        <Route path='/torchparty' component={TorchParty} />

      </Switch>
    </Router>
  );
}

export default App;

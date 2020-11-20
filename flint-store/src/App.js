import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LightAndFire from './components/LightAndFire';
import Diy from './components/Diy';
import WeaponsAndHunting from './components/WeaponsAndHunting';
import TorchParty from './components/TorchParty';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Carou from './components/Carou';
import Footer from './components/Footer';
import Privacy from './components/footerLink/Privacy';
import Faq from './components/footerLink/Faq';
import Terms from './components/footerLink/Terms';


function App() {
  return (
    <div className="body">
      <Router>
      <Navigation />
      <Carou />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/lightandfire' component={LightAndFire} />
        <Route path='/diy' component={Diy} />
        <Route path='/weaponsandhunting' component={WeaponsAndHunting} />
          <Route path='/torchparty' component={TorchParty} />
          <Route path='/privacy' component={Privacy} />
          <Route path='/faq' component={Faq} />
          <Route path='/terms' component={Terms} />
        </Switch>
        <Footer />
    </Router>
    </div>
  );
}

export default App;

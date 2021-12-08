import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Accomodation from './pages/Accomodation';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/accomodation" component={Accomodation} />
      </Switch>
    </Router>
  );
}

export default App;

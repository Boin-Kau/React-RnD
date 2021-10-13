import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Main from './Home';
import Result from './Result';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/result/:inputText' exact component={Result}/>

      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

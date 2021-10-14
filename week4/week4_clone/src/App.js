import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Result from './Result/Result';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/result/:inputText' exact component={Result}/>

      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

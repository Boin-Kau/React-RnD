import React from 'react';
import './App.css';

import Header from './component/Header';
import Footer from './component/Footer';
import MainContainer from './component/Main/MainContainer';

import GlobalStyle from './GlobalStyle';
import { BrowserRouter, Route, Switch } from "react-router-dom"; 


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/">
            <MainContainer></MainContainer>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

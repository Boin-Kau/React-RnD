import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PageA from './PageA';
import PageB from './PageB';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={PageA}/>
      <Route path='/pageB'exact component={PageB} />
    </BrowserRouter>
  );
}

export default App;

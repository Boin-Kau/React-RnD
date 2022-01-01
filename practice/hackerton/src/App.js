import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Header';
import Login from './Login';
import Main from './Main';
import SignUp from './SignUp';
import Splash from './Splash';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Splash/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/main' element={<Main/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

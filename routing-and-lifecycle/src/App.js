import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Page1 from "./Page1";
import Page2 from "./Page2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main/>}/>
        <Route path="/page1" exact element={<Page1/>}/>
        <Route path="/page2" exact element={<Page2/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

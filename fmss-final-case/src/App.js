import {Routes,Route} from "react-router-dom"
import './App.css';
import { StarwarsProvider } from './contexts/StarwarsContext';
import Main from "./pages/Main";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <StarwarsProvider>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/detail/:id" element={<Detail />}/>
        </Routes>
      </StarwarsProvider>
    </>
  );
}

export default App;

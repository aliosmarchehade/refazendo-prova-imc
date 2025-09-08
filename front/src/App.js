import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Imc from './pages/Imc/Imc';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/> 
        <Route path="/Imc" Component={Imc}/> 
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

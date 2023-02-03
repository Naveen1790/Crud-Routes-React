import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Create from './Create';
import Edit from './Edit';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/create' element={<Create/>} />
    <Route path='/edit' element={<Edit/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

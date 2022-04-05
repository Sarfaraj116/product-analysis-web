import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Dasboard from './components/Dasboard/Dasboard';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

import NotFound from './components/NotFound/NotFound';
import Revews from './components/Revews/Revews';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/revews" element={<Revews></Revews>}></Route>
        <Route path="/dasboard" element={<Dasboard></Dasboard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
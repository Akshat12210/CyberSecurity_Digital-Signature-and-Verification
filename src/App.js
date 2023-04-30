import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'; 
import Verify from './pages/Verify';
import Generate from './pages/Generate';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/<url>" element={"Component to displayed"} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/generate" element={<Generate />} />
        <Route exact path="/verify" element={<Verify />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

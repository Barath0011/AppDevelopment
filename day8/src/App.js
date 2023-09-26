import{BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import Login from './Login';
import Register from './Register';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';

import Sidebar from './layout/Sidebar';
import Home from './layout/Home';
import Contact from './layout/Contact';
import Services from './layout/Services';
import Feedback from './layout/Feedback';
import Privacy from './layout/Policy';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/NavBar" element={<NavBar/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/que" element={<Sidebar/>}/>
      <Route path="/product" element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Services/>}/>
      <Route path="/feed" element={<Feedback/>}/>
      <Route path="/policy" element={<Privacy/>}/>
       </Routes>
     
    
    </BrowserRouter>
  </div>
  );
}

export default App;
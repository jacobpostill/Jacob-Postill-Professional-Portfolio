import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/home'
import About from './components/pages/about'
import Portfolio from './components/pages/portfolio'
import Resume from './components/pages/resume'
import Contact from './components/pages/contact'

import NavTabs from "./components/NavTabs";

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <BrowserRouter>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home currentPage={currentPage} handlePageChange={handlePageChange} />} />
          <Route path='/about' element={<About/>}/>  
          <Route path='/portfolio' element={<Portfolio/>}/>  
          <Route path='/resume' element={<Resume/>}/>  
          <Route path='/contact' element={<Contact/>}/>  
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
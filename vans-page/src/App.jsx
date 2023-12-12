import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "../pages/Home";
import About from "../pages/About";

function Page(){
  return(
    <BrowserRouter> 
      <nav>
        <h1>#VANLIFE</h1>
        <section className="links">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </section>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}

const root=ReactDOM.createRoot(document.querySelector('.Root'))
root.render(<Page />)
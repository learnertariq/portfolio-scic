import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Moshify from "./components/ProjectDetails/Moshify";
import Parts from "./components/ProjectDetails/Parts";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/moshify" element={<Moshify />} />
        <Route path="/parts" element={<Parts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

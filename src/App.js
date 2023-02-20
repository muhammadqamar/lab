import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Error from "./pages/error";
import  "./assets/css/style.scss"
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
      {/* <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} /> */}
    </Routes>
  );
};

export default App;

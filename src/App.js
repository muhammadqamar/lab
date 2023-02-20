import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Error from "./pages/error";
import Inventory from "./pages/inventory";
import "./assets/css/style.scss"
import Layout from "./components/Layout";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="*" element={<Error />} />
        {/* <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </Layout>
  );
};

export default App;

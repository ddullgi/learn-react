// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/components/Home/Home";
// import Navbar from "@/components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<Navbar />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/mouse_cursor" element={<AAA />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

function AAA() {
  return <h1>Hello AAA</h1>;
}

export default App;

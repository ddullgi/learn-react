// import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/components/Home/Home";
// import Navbar from "@/components/Navbar/Navbar";

function App() {
  console.log();
  return (
    <Routes>
      {/* <Route element={<Navbar />}> */}
      <Route path="/" element={<Home />} />
      <Route path="/mouse_cursor" element={<AAA />} />
      {/* </Route> */}
    </Routes>
  );
}

function AAA() {
  return <h1>Hello AAA</h1>;
}

export default App;

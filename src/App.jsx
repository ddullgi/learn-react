// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@/app.css";
import { Home, MouseCusor, MineSweeper, EternalReturn } from "@/pages";
import { WebAnimaitonsAPI } from "./pages";
// import Navbar from "@/components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<Navbar />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/mouse_cursor" element={<MouseCusor />} />
        <Route path="/mine_sweeper" element={<MineSweeper />} />
        <Route path="/web_animaitons_API" element={<WebAnimaitonsAPI />}></Route>
        <Route path="/eternalreturn" element={<EternalReturn />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

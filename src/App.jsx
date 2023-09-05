import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Spline from "./components/spline/spline";

function App() {
  return (
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Spline/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;

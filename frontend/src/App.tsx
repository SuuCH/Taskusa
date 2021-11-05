import React from "react";
import { Login } from "./pages/login";
import { Top } from "./pages/top";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/top" element={<Top />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;

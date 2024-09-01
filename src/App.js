import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./Base/Footer";

export default function App() {
  return (
    <>
      <main className="main">
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

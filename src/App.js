import React from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Internship from "./pages/Internship";
import Remote from "./pages/Remote";
import FullTime from "./pages/FullTime";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/add" element={<Add />}></Route>
            <Route path="/edit" element={<Edit />}></Route>
            <Route path="/jobs/internship" element={<Internship />}></Route>
            <Route path="/jobs/remote" element={<Remote />}></Route>
            <Route path="/jobs/full-time" element={<FullTime />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

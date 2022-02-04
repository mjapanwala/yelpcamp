import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import  {Landing}  from "./components/layout/Landing";
import "./App.css";
import {Accordion} from "./components/layout/SharingStateBetweenComponent"


function App() {
  return (
    <>
      {/* <BrowserRouter>
   <Routes> */}
      <Fragment>
        <Navbar />
        {/* <Route path="/" index element={<Landing />}/> */}
        {/* <Landing /> */}
      <Accordion/>
      </Fragment>
      {/* </Routes>
   </BrowserRouter> */}
    </>
  );
}

export default App;

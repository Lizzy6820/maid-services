
import { CssBaseline } from "@mui/material";
import React, {useState} from "react";
import {Routes, Route} from 'react-router-dom'
import Footer from "./Components/Footer/Footer";
import HeaderBlock from "./Components/HeaderBlock";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import './index.css'
import Professional from "./Professional/Professional";
import {useLocation} from 'react-router-dom';
import Data from "./Data/Data";
import Policy from "./Components/Policy/Policy";




function App() {
  const location = useLocation();

  return (
    <>
    <CssBaseline />
    <div>
     <Navbar />

     <Routes>
      <Route path='/book' element={<Data />}>
      </Route>
    </Routes>

     {location.pathname !== '/book' && <HeaderBlock />}
       {location.pathname !== '/book' && <Services />}
    
       {location.pathname !== '/book' &&  <Professional /> }
       {location.pathname !== '/book' &&  <Policy /> }
          <Footer />
  
    </div>
    </>
  );
}

export default App;

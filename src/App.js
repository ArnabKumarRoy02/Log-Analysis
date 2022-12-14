import React from "react";
import { Route,Routes,Navigate  } from "react-router-dom";

import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Home from "./pages/Home";
import OurModel from "./pages/OurModel";
import OurIdeas from "./pages/OurIdeas";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div>
      <NavBar />
     
      <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route  path="/home" element={<Home />}/>

      <Route path="/ourModel"
        element={<OurModel />}
      />

      <Route path="/ourIdeas"
        element={<OurIdeas />}
      />

      <Route path="/aboutUs"
        element={<AboutUs />}
      />
      </Routes>
      
    </div>
  );
}

export default App;



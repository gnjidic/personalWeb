import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import MoveToTop from "./Components/MoveToTop";
import BeatLoader from "react-spinners/BeatLoader";


function App() {
  const[Loading,SetLoading]=useState(true);

  useEffect(()=>{
    SetLoading(true)

    setTimeout(()=>{
    SetLoading(false)}
    ,1900)
  },[])  
  
  return (
    <>
      {Loading ? (
      <div className="loader"> 
        <BeatLoader color={'#9067C6'} loading={true} size={30} />
      </div>
      ):(
      <div>
    
      <Nav/>
      <MoveToTop/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>}/>
      </Routes>
      
      <Footer/>
      </div>
      )}  
    </>
  );
}

export default App;

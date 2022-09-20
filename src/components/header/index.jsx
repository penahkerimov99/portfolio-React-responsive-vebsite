import React from 'react';
import './style.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { Headerlogo } from '../Headerlogo/Headerlogo';
import { Mainnav } from '../Mainnav/Mainnav';

export const Header = () => {
  const [navbar , setNavbar] = useState("transperent");
  

  const listenScrollEvent = () => {
    window.scrollY > 500 ? setNavbar("orangered") : setNavbar("transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  
  return (
    <header style={{
      backgroundColor: navbar,
      transition: "all 1s" 
    }} className='main-header'>

    
     <Headerlogo/>
     <Mainnav/>
    </header>
  )
}


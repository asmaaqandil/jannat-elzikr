import React from 'react';
import './Navbar.css';

import { useState } from 'react';
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import Logo from '../../assets/logo.png'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
      <div className="logo-img">
      <img src={Logo} alt={Logo}  className='logo'/>
      </div>
       <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li> <Link to="/" onClick={()=> setMenuOpen(false)}>الرئيسية</Link></li>
        <li> <Link to="/quran" onClick={()=> setMenuOpen(false)}>القرآن الكريم</Link></li>
        <li> <Link to="/prayer-times" onClick={()=> setMenuOpen(false)}>مواقيت الصلاة</Link></li>
        <li> <Link to="/zakat" onClick={()=> setMenuOpen(false)}>حساب الزكاة</Link></li>
        <li> <Link to="/sunan" onClick={()=> setMenuOpen(false)}>سنن منسية</Link></li>
       
       </ul>

  <button className='btn' >ادكر الله</button>


     <div className="menu-icon" onClick={()=>setMenuOpen(!menuOpen)}>
      {menuOpen ? <FaTimes/>: <FaBars/>}
     </div>

    </nav>
  )
}

export default Navbar 






import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();


  const Logout =async() => {
    try {
      await axios.delete('http://localhost:5000/logout');
      navigate('/');
    } catch (error) {
      console.log(error);
    }

  }
  return (
   <nav className="navbar is-light" role="navigation" aria-label="main navigation">
     <div className="container">
     <div className="navbar-brand">
       <a className="navbar-item" href="https://bulma.io">
         <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
       </a>
   
       <a href='/' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
         <span aria-hidden="true"></span>
         <span aria-hidden="true"></span>
         <span aria-hidden="true"></span>
       </a>
     </div>
   
     <div id="navbarBasicExample" className="navbar-menu">
       <div className="navbar-start">
         <a href='/' className="navbar-item">
           Home
         </a>
   
         {/* <a className="navbar-item">
           Documentation
         </a> */}
   
         {/* <div className="navbar-item has-dropdown is-hoverable">
           <a className="navbar-link">
             More
           </a>
   
           <div className="navbar-dropdown">
             <a className="navbar-item">
               About
             </a>
             <a className="navbar-item">
               Jobs
             </a>
             <a className="navbar-item">
               Contact
             </a>
             <hr className="navbar-divider">
             <a className="navbar-item">
               Report an issue
             </a>
           </div>
         </div> */}
       </div>
    
        <div className="navbar-end">
            <div className="navbar-item">
            <div className="buttons">
                {/* <a className="button is-primary">
                <strong>Sign up</strong>
                </a> */}
                <button onClick={Logout} className="button is-light">
                Log Out
                </button>
            </div>
            </div>
        </div>
        </div>
     </div>
   </nav>
  )
}

export default Navbar

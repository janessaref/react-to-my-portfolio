import React, { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";


const [link, activeLink] = useState([]);



export default NavTabs;



// function NavTabs({currentPage, handlePageChange}) {
//     return(
//         <ul className="navbar-nav ml-md-auto">
//             <li className="nav-item">
//                 <NavLink 
//                     to="/contact" 
//                     className={currentPage === "Contact" ? "nav-link active" : "nav-link"} 
//                     onClick={() => handlePageChange("Contact")}>Contact</NavLink>
//             </li>

//             <li className="nav-item">
//                 <NavLink 
//                     to="/portfolio" 
//                     className={currentPage === "Porfolio" ? "nav-link active" : "nav-link"} 
//                     onClick={() => handlePageChange("Porfolio")}
//                     >Portfolio
//                 </NavLink>
//             </li>

//             <li className="nav-item">
//                 <NavLink 
//                     to="/about" 
//                     className={currentPage === "About" ? "nav-link active" : "nav-link"} 
//                     onClick={() => handlePageChange("About")}
//                     >About</NavLink>
//             </li>
//         </ul> 
//     )
    
// }
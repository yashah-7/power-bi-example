import React from "react";
import { NavLink } from "react-router-dom";


const Header = ()=>{
    return(
        <div className="header-container">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="main-menu">
                            <li><NavLink to="/processes" >Processes</NavLink></li>
                            <li><NavLink to="/quality-control">Quality Control</NavLink></li>
                            <li className="hasDropdown">
                                <span>Tools </span>
                                <ul>
                                    <li><NavLink to="/report" >Reports 1</NavLink></li>
                                    <li><NavLink to="/report2" >Reports 2</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to="/quality-control" >Admin</NavLink></li>
                            <li><NavLink to="/quality-control" >Reports</NavLink></li>
                            <li className="hasDropdown ml-auto"><NavLink to="/quality-control" >Username</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
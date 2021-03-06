import React, { useContext }from 'react'
import { NavLink } from "react-router-dom";
import logo from "../images/janch_logo.png"
import { AuthContext } from '../firebase/Auth'; 
import SignOutButton from './SignOut'; 
import '../App.scss'; 


const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return <div>{currentUser ? <NavbarAuth /> : <NavbarNonAuth />}</div>;
};

const NavbarAuth = ()  => {
  return (
    <nav className="navigation">
      <div className="nav-logo">
        <NavLink to = "/">
          <img src={logo} alt="logo" className="logo"></img>
        </NavLink>
      </div>

      <ul className="nav-links">
          <li>
          <NavLink exact to="/" activeClassName="active">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/home" activeClassName="active">
            Home
          </NavLink>
        </li>
        {/* commented out dashboard since it will be accessed through clicking on projects */}
        {/* <li>
          <NavLink exact to="/dashboard" activeClassName="active">
            Dashboard
          </NavLink>
        </li> */}
        <li>
          <NavLink exact to="/account" activeClassName="active">
            <img src = "https://bethesdadentalhealth.com/wp-content/uploads/2016/10/profile-icon-png-898.png" className = "profile-icon" alt = "profile"></img>
          </NavLink>
        </li>
        <li>
          <SignOutButton />
        </li>


      </ul>
    </nav>
  ); 
}

const NavbarNonAuth = () => {
  return (
    <nav className="navigation">
      <div className="nav-logo">
        <NavLink to = "/">
          <img src={logo} alt="logo" className="logo"></img>
        </NavLink>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink exact to="/" activeClassName="active">
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink exact to="/signup" activeClassName="active">
            Sign up
          </NavLink>
        </li>

        <li>
          <NavLink exact to="/signin" activeClassName="active">
            Sign In
          </NavLink>
        </li>


      </ul>
    </nav>

  ); 
}; 

export default Navbar; 
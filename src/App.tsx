import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsDetails from './NewsDetails';

import { Nav, NavItem, NavLink } from 'reactstrap';
import LoginForm from './LoginForm';



function App() {

  const [toggle, setToggle] = useState(false);

  const [loginStatus, setLoginStatus] = useState(false);

  const setShowDetails = (status: boolean) => {
     setLoginStatus(true);
  };

  const handleLogin = () => {
    console.log("login clicked");
     setToggle(true);
  };
  return (
    <>
     { (toggle) ? (<LoginForm setShowDetails={setShowDetails} />) :  null}
    <div className="App">
      
        <div>
            <Nav>
              <NavItem>
                <NavLink
                active
                href="#"
                onClick={handleLogin}
                >
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  Register
                </NavLink>
              </NavItem>
            </Nav>

        </div>
        { loginStatus ? (<NewsDetails />): null  }
    </div>
    </>
  );
}

export default App;

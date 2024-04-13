/* eslint-disable react/no-unknown-property */
import HomeIcon from '../Icons/homeIco'
import CalendarIco from '../Icons/calendarIco'
import cakeImage from '../Icons/cake-wedding.png';

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
  
          <div className="navbar-nav d-flex align-items-center">
            <Link className="nav-link active text-white d-flex align-items-center fs-4" aria-current="page" to="/">
              <HomeIcon />
              <span className="ms-2">Home</span>
            </Link>

            <div className="mx-2"></div> 
            <Link className="nav-link active text-white d-flex align-items-center fs-4" 
                  aria-current="page" 
                  to="/Contact">
              
              <CalendarIco />
              <span className="ms-2">Contacto</span>
            </Link>

          </div>

          <a className="navbar-brand text-white d-flex align-items-center" href="#">
            <img 
              src={cakeImage}  
              width="40"
              height="40" 
              alt=""
              className="me-2" 
            />
            <h2 className="m-0">HAPPY CAKE</h2>
          </a>

        </div>
      </nav>
    </>
  );
};

export default Header;




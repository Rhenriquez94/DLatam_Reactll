/* eslint-disable react/no-unknown-property */
import { NavLink } from "react-router-dom";



export default function NavBar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-red font-pokemon">
        <div className="container-fluid bg-red">
          <a className="navbar-brand" href="#">
            <h1>Poke - Api</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={setActiveClass} to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item" >
                <NavLink className={setActiveClass} to="/personajes">
                  Personajes
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

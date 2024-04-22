import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navber(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">
              {props.aboutText}
              </a>
            </li> */}
            </ul>
            {/* <li className="nav-item dropdown"> */}
              {/* <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a> */}
              {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/">
                  About
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li className="dropdown-divider"></li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
            {/* <li className="nav-item">
              <link
                className="nav-link " */}
                {/* to ="/about"
                // tabIndex="-1"
                // aria-disabled="true" */}
              
          
              {/* </Link>
            </li> */}

          {/* <form className="d-flex">
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
              <div className={`form-check form-switch my-3 text-${props.mode === 'light'?'dark':'light'}`}>
    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">dark mode</label>
  </div>
        </div>
      </div>
    </nav>

  </>
  );
}
Navber.propTypes = {title: PropTypes.string,}
Navber.defaultProps = {
    title: "Set name"
}


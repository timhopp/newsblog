import { Navbar, Nav } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

class NavB extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar className="bg-dark row justify-content-center p-3">
          <h5>
            <Link className="col-2 navLink" to="/">
              News-Fi
            </Link>
          </h5>
          <Link className="col-2 navLink" to="/">
            Home
          </Link>
          <Link className="col-2 navLink" to="/Sections/Trending">
            US Trending News
          </Link>
          <Link className="col-2 navLink" to="/Sections/WorldNews">
            World News
          </Link>
          <Link className="col-2 navLink" to="/Sections/Sports">
            Sports
          </Link>
          <Link className="col-2 navLink" to="/Sections/Tech">
            Tech
          </Link>
        </Navbar>
      </div>
    );
  }
}

export default NavB;

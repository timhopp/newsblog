import { Navbar, Nav } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

class NavB extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar className="bg-dark row justify-content-center p-3">
          <h5>
            <Link className="col navLink" to="/">
              News-Fi
            </Link>
          </h5>
          <Link className="col navLink" to="/">
            Home
          </Link>
          <Link className="col navLink" to="/Sections/Trending">
            US Trending News
          </Link>
          <Link className="col navLink" to="/Sections/WorldNews">
            World News
          </Link>
          <Link className="col navLink" to="/Sections/Sports">
            Sports
          </Link>
          <Link className="col navLink" to="/Sections/Tech">
            Tech
          </Link>
          <Link className="col navLink" to="/Sections/Favs">
            Favs
          </Link>
        </Navbar>
      </div>
    );
  }
}

export default NavB;

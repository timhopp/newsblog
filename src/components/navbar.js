import { Navbar, Nav } from "react-bootstrap";
import React from "react";

class NavB extends React.Component {
  render() {
    return (
      <>
        <Navbar>
          <Navbar.Brand>News-Fi</Navbar.Brand>
          <Nav className="">
            <div>
              <div className="">
                <a href="/">Home</a>
                <a href="/Sections/Tech">Tech</a>
              </div>
            </div>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default NavB;

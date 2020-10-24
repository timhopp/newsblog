import { Navbar, Nav } from "react-bootstrap";
import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Tech from "../Sections/tech";
import App from "../App";

class NavB extends React.Component {
  render() {
    return (
      <>
        <Navbar>
          <Navbar.Brand>News-Fi</Navbar.Brand>
          <Nav className="">
            <Router>
              <div className="">
                <Link to="/">Home</Link>
                {/* <Link to="/Sections/trendingUS">US Trending News</Link>
                <Link to="/Sections/trendingWorld">World Trending News</Link>
                <Link to="/Sections/sports">Sports</Link> */}
                <Link to="/Sections/tech">Tech</Link>
              </div>

              <Route path="/" component={App} />
              <Route path="/Sections/tech" component={Tech} />
            </Router>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default NavB;

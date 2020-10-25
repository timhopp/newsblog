import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="bg-dark p-2">
        <div className="text-center">
          <Link className="navLink" to="https://github.com/timhopp">
            {" "}
            Made By Tim Hopp{" "}
          </Link>
        </div>
      </div>
    );
  }
}
export default Footer;

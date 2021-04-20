import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../Actions/Auth";


export const Navbar = ({ startLogout }) => {
  return (
    <header className="header_background">
      <div className="content_container">
        <div className="header__content">
          <Link
            className="header_title"
            exact
            to="/dashboard"
            activeClassName="is-active"
          >
            <h1>Expensify</h1>
          </Link>
          <button className="button_logout" onClick={startLogout}>Log Out</button>
        </div>
      
      </div>
    </header>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Navbar);

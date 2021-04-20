import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../Actions/Auth";

const LoginPage = ({startLogin}) => {
  return (
    <div className ="box_layout">
  <div className="box_layout__box">
  <h1 className="box_layout__box_title">Expensify App</h1>
  <p> Its time to get your expenses under control</p>
  <button className="login_button" onClick={startLogin}>Login with Google</button>
  </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});


export default connect(undefined ,mapDispatchToProps) (LoginPage);

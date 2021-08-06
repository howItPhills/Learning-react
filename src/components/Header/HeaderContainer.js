import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { checkAuth, logout } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.checkAuth()
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isAuthorized: state.auth.isAuthorized,
  };
};

export default connect(mapStateToProps, {
  checkAuth,
  logout,
})(HeaderContainer);

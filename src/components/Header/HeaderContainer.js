import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { checkAuthThunkCreator, setUsersAuth } from "../../redux/authReducer";
import { dalAPI } from "../../API/DalApi";

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
  setUsersAuth,
  checkAuth: checkAuthThunkCreator,
})(HeaderContainer);

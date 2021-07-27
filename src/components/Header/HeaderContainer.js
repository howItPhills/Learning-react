import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setUsersAuth } from "../../redux/authReducer";
import { dalAPI } from "../../API/DalApi";

class HeaderContainer extends React.Component {
  componentDidMount() {
    dalAPI.checkAuth().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        this.props.setUsersAuth(id, login, email);
      }
    });
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
})(HeaderContainer);

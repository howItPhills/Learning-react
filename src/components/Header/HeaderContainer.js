import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setUsersAuth } from '../../redux/authReducer'


class HeaderContainer extends React.Component {
   componentDidMount() {
      axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
         withCredentials: true,
      }).then(response => {
         if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data;
            this.props.setUsersAuth(id, login, email);
         }


      })
   }
   render() {
      return (
         <Header {...this.props} />
      )
   }

};


const mapStateToProps = (state) => {
   return {
      id: state.auth.id,
      login: state.auth.login,
      email: state.auth.email,
      isAuthorized: state.auth.isAuthorized,
   }
}

export default connect(mapStateToProps,
   {
      setUsersAuth,
   }
)(HeaderContainer);
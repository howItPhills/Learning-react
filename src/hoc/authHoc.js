import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


const mapStateToPropsRedirect = (state) => {
   return {
      isAuthorized: state.auth.isAuthorized,
   };
};

const withAuthRedirect = (Component) => {

   const AuthRedirectContainerComponent = (props) => {
      if (!props.isAuthorized) return <Redirect to='/login' />
      return <Component {...props} />
   }
   const AuthRedirect = connect(mapStateToPropsRedirect)(AuthRedirectContainerComponent);
   return AuthRedirect;
}

export default withAuthRedirect
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProfileCloud } from "../../redux/profileReducer";
import Cloud from './Cloud';


class CloudContainer extends Component {
   componentDidMount() {
      this.props.isAuthorized && this.props.getProfileCloud(this.props.authorizedId);
   }

   render() {
      return (
         <Cloud profileInfoCloud={this.props.profileInfoCloud} />
      )
   }
}


const mapStateToProps = (state) => {
   return {
      profileInfoCloud: state.profilePage.profileInfoCloud,
      authorizedId: state.auth.id,
      isAuthorized: state.auth.isAuthorized,
   }
}

export default connect(mapStateToProps, { getProfileCloud })(CloudContainer)
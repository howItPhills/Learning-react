import React from 'react'
import { connect } from 'react-redux';
import { getProfile, updateProfile } from "../../../redux/profile.reducer";
import Preloader from '../../../common/preloader';
import Settings from './Settings';
import { Redirect } from 'react-router-dom';



class SettingsContainer extends React.Component {

   componentDidMount() {
      this.props.isAuthorized && this.props.getProfile(this.props.authorizedId);
   }

   render() {
      if (!this.props.isAuthorized) return <Redirect to='/login' />
      if (!this.props.profileInfo) return <Preloader />
      return (
         <div>
            <Settings profileInfo={this.props.profileInfo} updateProfile={this.props.updateProfile} />
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      profileInfo: state.profilePage.profileInfo,
      authorizedId: state.auth.id,
      isAuthorized: state.auth.isAuthorized,
   }
}

export default connect(mapStateToProps, {
   getProfile,
   updateProfile,
})(SettingsContainer);
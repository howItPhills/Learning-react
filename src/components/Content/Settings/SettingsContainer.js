import React from 'react'
import { connect } from 'react-redux';
import { getProfile, updateProfile } from "../../../redux/profileReducer";
import Preloader from '../../../common/preloader';
import Settings from './Settings';



class SettingsContainer extends React.Component {

   componentDidMount() {
      this.props.getProfile(this.props.authorizedId);
   }

   render() {
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
   }
}

export default connect(mapStateToProps, {
   getProfile,
   updateProfile,
})(SettingsContainer);
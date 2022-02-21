import { connect } from 'react-redux'
import Preloader from "../common/preloader";

import { selectIsFetching } from '../redux/profile/profile.selectors'

const mapStateToProps = state => ({
   isFetching: selectIsFetching(state)
})

const withPreloader = ComponentToWrap => {
   const Spinner = ({ isFetching, ...otherProps }) => {
      return isFetching ?
         <Preloader /> :
         <ComponentToWrap {...otherProps} />
   }

   return connect(mapStateToProps)(Spinner)
}

export default withPreloader
import { compose } from "redux";
import { connect } from "react-redux";
import {
   getUsers,
   unfollowing,
   following,
   setUsers,
} from "../../../redux/findUsersPage/findUsersReducer";

import { createStructuredSelector } from "reselect";
import { selectCurrentPortionNumber, selectFollowInProgress, selectPageSize, selectPortionSize, selectTotalUsersCount, selectUsers } from "../../../redux/findUsersPage/findUsers.selectors";
import FindUsers from "./FindUsers";


const mapStateToProps = createStructuredSelector({
   users: selectUsers,
   pageSize: selectPageSize,
   totalUsersCount: selectTotalUsersCount,
   portionSize: selectPortionSize,
   currentPortionNumber: selectCurrentPortionNumber,
   followInProgress: selectFollowInProgress,
})

export default compose(connect(mapStateToProps, {
   getUsers,
   unfollowing,
   following,
   setUsers,
}))(FindUsers)

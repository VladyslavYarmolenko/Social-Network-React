import { connect } from 'react-redux';
import UsersC from './UsersC'
import { followAC, unFollowAC, setUsersAC } from '../../redux/usersReducer ';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount:state.usersPage.totalUsersCount,
    currentPage:state.usersPage.currentPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },

    unfollow: (userId) => {
      dispatch(unFollowAC(userId))
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersC);
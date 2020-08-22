const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
  }


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state, 
        users: state.users.map( u => {
          if(u.id === action.payload){
            return {...u,
                    followed: true}
          }
          return u;
        }),
        
      }
    case UNFOLLOW:
      return {
        ...state, 
        users: state.users.map( u => {
          if(u.id === action.payload){
            return {...u,
                    followed: false}
          }
          return u;
        }),
        
      }

    case SET_USERS: {
      return {...state,
              users: [...state.users, ...action.users]}
    }
 

    default:
      return state;
  }
}


    
export const followAC = (userId) => {
  
  return {
    type : FOLLOW,
    payload: userId
  }
}

export const unFollowAC = (userId) => {
  return {
    type:   UNFOLLOW,
    payload: userId,
  }
}

export const setUsersAC = (users) => {
  return {
    type:   SET_USERS,
    users,
  }
}


export default usersReducer;
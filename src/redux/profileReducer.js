const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  
    posts: [{id: '1', message: 'Hi, how are you?', likesCount: 12},
            {id: '2',message: 'It`s my first post', likesCount: 11}, 
            ],
    newPostText: 'BJJ',
    profile: null,
  }


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_POST: 
      
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      };
  
      const posts = [...state.posts, newPost];

      return {
        ...state,
        posts: posts,
        newPostText: ''
      };
  
    case UPDATE_NEW_POST_TEXT:
      return { 
        ...state,
        newPostText: action.payload
      }
    
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }

    default:
      return state;
  }
}

export const addPostActionCreator = () => {
  
  return {
    type : ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    payload: text,
  }
}

export const setUserProfileAC = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}

export default profileReducer;
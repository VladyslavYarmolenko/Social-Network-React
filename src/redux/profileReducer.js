const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  
    posts: [{id: '1', message: 'Hi, how are you?', likesCount: 12},
            {id: '2',message: 'It`s my first post', likesCount: 11}, 
            ],
    newPostText: 'BJJ'
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
    
    return state;

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


export default profileReducer;
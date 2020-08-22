import profileReducer from "./profileReducer";
import dialogsReduser from "./dialogsReduser";
import sidebarReducer from "./sidebarReducer";

let store =  {

  _state : {

    profilePage: {
  
      posts: [{id: '1', message: 'Hi, how are you?', likesCount: 12},
              {id: '2',message: 'It`s my first post', likesCount: 11}, 
              ],
      newPostText: 'BJJ'
    },
  
    dialogsPage: {
  
      dialogs: [{id: '1', name: 'Vlad'},
      {id: '2',name: 'Sasha',},
      {id: '3', name: 'Mykola',},
      {id: '4', name: 'Volodya',},
      {id: '5',name: 'Pasha',},
      {id: '6', name: "Gesha"},
      {id: '7', name: "Misha"}],
  
  
      messages: [{id: '1', message: 'Hi'},
      {id: '2',message: 'How is your studing?',}, 
      {id: '3', message: 'Samurai',}],
  
      newMessageText: 'message'
  
    },
  
    sidebar: {
      
      friendsList: [{id: '1', name: 'Vlad'},
      {id: '2',name: 'Sasha',},
      {id: '3', name: 'Mykola',},]
    }
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('State changed')
  },
  

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
}

window.store = store;

export default store;
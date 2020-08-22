const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  
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
}

const dialogsReduser = (state = initialState, action) => {

  switch (action.type) {

    case ADD_MESSAGE:

      let newMessage = {
        id: '4',
        message: state.newMessageText,
      }
    

      const messages = [...state.messages, newMessage];

      return {
      ...state,
      messages: messages,
      newMessageText :'',
      }



    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.payload,
      }



    default:
      return state;
  }
}


export const addMessageActionCreator = () => {
  
  return {
    type : ADD_MESSAGE,
  }
}

export const updateNewMessageTextActionCreator = (message) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    payload: message,
  }
}



export default dialogsReduser;
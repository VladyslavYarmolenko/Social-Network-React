import { rerenderEntireTree } from "../render";

let state = {

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
}

export let addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {

  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export let addMessage = () => {
  let newMessage = {
    id: '4',
    message: state.dialogsPage.newMessageText,
  }

  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
}

export let updateNewMessageText = (newMessage) => {
  state.dialogsPage.newMessageText = newMessage;
  rerenderEntireTree(state);
}

export default state;
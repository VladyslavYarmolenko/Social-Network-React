
let state = {

  profilePage: {

    posts: [{id: '1', message: 'Hi, how are you?', likesCount: 12},
            {id: '2',message: 'It`s my first post', likesCount: 11}, 
            ],
  },

  dialogsPage: {

    dialogs: [{id: '1', name: 'Vlad'},
    {id: '2',name: 'Sasha',},
    {id: '3', name: 'Mykola',},
    {id: '4', name: 'Volodya',},
    {id: '5',name: 'Pasha',},
    { id: '6', name: "Gesha"},
    {id: '7', name: "Misha"}],


    messages: [{id: '1', message: 'Hi'},
    {id: '2',message: 'How is your studing?',}, 
    {id: '3', message: 'Samurai',}],

  },

  sidebar: {
    
    friendsList: [{id: '1', name: 'Vlad'},
    {id: '2',name: 'Sasha',},
    {id: '3', name: 'Mykola',},]
  }
    

}

export default state;
let store = {
  _state: {
    dialogPage:
      {
        messageData: [
          {id: 1, message: 'hi'},
          {id: 2, message: 'hi how are you'},
          {id: 3, message: 'hi are you'},
          {id: 4, message: 'hi Tow'},
          {id: 5, message: ' bbbb'}
        ],
        dialogsData: [
          {id: 1, name: "Dima"},
          {id: 2, name: "Tom"}
        ]
      },
    profilePage:
      {
        posts: [
          { id: 1, message: 'How are you guys?', likeСount:6 },
          { id: 2, message:'Look at me!!!', likeСount: 5}
        ],
        placeholderPost:'click and write!'
      }
  },
  _callSubscriber(){
  },
  getState(){
    return this._state;
  },
  subscribe(observer){
    this._callSubscriber = observer;  // патерн наблюдатель
  },

  addPost(){
    let newPost = {
      id: 5,
      message: this._state.profilePage.placeholderPost,
      likeСount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._callSubscriber(this._state);
    this._state.profilePage.posts.updateNewPostText = '';
  },
  updateNewPostText(text){
    this._state.profilePage.placeholderPost = text;
    this._callSubscriber(this._state);
  }

}

window.store = store;

export default store;
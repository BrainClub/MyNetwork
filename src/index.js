import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./redux/state";

// Прокинули в файл state
// let messageData = [
//     {id: 1, message: 'hi'},
//     {id: 2, message: 'hi how are you'},
//     {id: 3, message: 'hi are you'},
//     {id: 4, message: 'hi Tow'}
// ];
// let dialogsData = [
//     {id: 1, name: "Dima"},
//     {id: 2, name: "Tom"}
// ];
// let posts = [
//        { id: 1, message: 'How are you guys?', likeСount:6 },
//        { id: 2, message:'Look at me', likeСount: 5}
// ];
// ReactDOM.render(<App dialogsData={dialogsData} messageData={messageData} posts={posts} />, document.getElementById('root'));

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost,updateNewPostText} from "./redux/state";




 let rerenderEntireTree = (state) =>{
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>, document.getElementById('root')
    );
};
subscribe(rerenderEntireTree);
rerenderEntireTree(state);



serviceWorker.unregister();

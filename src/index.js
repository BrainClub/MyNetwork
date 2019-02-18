import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state.js'

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
ReactDOM.render(<App state = {state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, {Component} from 'react';
import Post from './post/Post'
import style from './Mypost.module.css'
const Mypost = (props) => {
    // let posts = [
    //     { id: 1, message: 'How are you guys?', likeСount:6 },
    //     { id: 2, message:'Look at me', likeСount: 5}
    // ];
    let postsElements = props.posts.map(p =>
        (<Post message={p.message} likeСount={p.likeСount}  />)
    );
    let ChangePostText = () =>{
        let text = newPostElement.current.value;
      // props.updateNewPostText(text);
      props.dispatch({type: 'UPDATE-NEW-POST-TEXT', text: text })
    };
    let newPostElement = React.createRef();
    let addPost = () => {
     props.dispatch({type: 'ADD-POST'})
        // let text = newPostElement.current.value;
        // // newPostElement.current.value = '';
        // // може бути як, якби був ІD
        // //let text = document.getElementById('new-post').value;
        // props.addPost(text);
        // props.updateNewPostText('');
    };
    let clickPost = () =>{

        props.updateNewPostText('');
    };
        return (
            <div>
                <div>
                   <textarea ref={newPostElement}
                             onChange={ChangePostText}
                             value={props.placeholderPost}
                             // onClick={clickPost}
                   />
                    <button onClick={addPost}>add</button>
                </div>
                {postsElements}
                {/*<Post likeСount={posts[0].likeСount} message={posts[0].message}/>*/}
                {/*<Post likeСount='0' messege='Look at me'/>*/}
                {/*<Post likeСount='8' messege='Hi, it is awesome' />*/}
            </div>
        );
};
export default Mypost;
import React, {Component} from 'react';
import Post from './post/Post'
import style from './Mypost.module.css'

const Mypost = (props) => {
debugger;
    // let posts = [
    //     { id: 1, message: 'How are you guys?', likeСount:6 },
    //     { id: 2, message:'Look at me', likeСount: 5}
    // ];

    let postsElements = props.posts.map(p =>
        (<Post message={p.message} likeСount={p.likeСount}  />)
    )


        return (
            <div>
                <div>
                   <textarea></textarea>
                    <button>add</button>
                </div>
                {postsElements}

                {/*<Post likeСount={posts[0].likeСount} message={posts[0].message}/>*/}
                {/*<Post likeСount='0' messege='Look at me'/>*/}
                {/*<Post likeСount='8' messege='Hi, it is awesome' />*/}
            </div>
        );

}

export default Mypost;
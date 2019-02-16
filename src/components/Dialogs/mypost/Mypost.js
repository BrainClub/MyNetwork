import React, {Component} from 'react';
import Post from './post/Post'
import style from './Mypost.module.css'

class Mypost extends React.Component {
    render() {
        return (
            <div>

                <div>
                   <textarea></textarea>
                    <button>add</button>
                </div>


                <Post likeСounter='2' messege='How are you guys?'/>
                <Post likeСounter='0' messege='Look at me'/>
                <Post likeСounter='8' messege='Hi, it is awesome' />
            </div>
        );
    }
}

export default Mypost;
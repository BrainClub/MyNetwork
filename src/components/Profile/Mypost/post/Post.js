import React, {Component} from 'react';
import style from './Post.module.css'


const Post = (props) => {


        return (
            <div className={style.post}>

                <div className={style.flex}>

                    <div>
                        <h6>Mark</h6>
                        <img src="https://lux.fm/uploads/800x450_DIR/importedNews/main/2017/05/b6b658a3d886dc8f0f8faf570a3c34f201693d2b.jpg"></img>
                        <h6>like: {props.likeСount}</h6>
                    </div>

                    <div>

                        <div className={style.textarea}>
                            <span>{ props.message }</span>
                        </div>
                    </div>

                    </div>

            </div>
        );

}

export default Post;
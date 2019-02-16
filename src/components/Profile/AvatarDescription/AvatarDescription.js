import React, {Component} from 'react';
import style from "../Profile.module.css";




class AvatarDescription extends React.Component {
    render() {
        return (
            <div>
                <img className={style.img_size} src='https://cs8.pikabu.ru/post_img/2017/09/07/9/1504795185158164761.jpg'></img>
                <div>
                    main content
                </div>
                <div>
                    ava+description
                </div>
            </div>
        );
    }
}

export default AvatarDescription;
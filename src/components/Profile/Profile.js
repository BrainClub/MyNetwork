import React, {Component} from 'react';
import Mypost from "./Mypost/Mypost";
import style from './Profile.module.css'
import AvatarDescription from "./AvatarDescription/AvatarDescription";


const Profile = (props) => {


    return (
        <div>
            <AvatarDescription/>

            <Mypost posts={props.state.posts}/>
        </div>
    );

}

export default Profile;
import React, {Component} from 'react';
import Mypost from "./mypost/Mypost";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )};

const Message = (props) => {
    return (
        <div>{props.message}</div>
    )};


const Dialogs = (props) => {
/* ОПрокинув в індекс, засоряти тут нізя!!!
    let messageData = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'hi how are you'},
        {id: 3, message: 'hi are you'},
        {id: 4, message: 'hi Tow'}
    ];
*/
 /*   let dialogsData = [
        {id: 1, name: "Dima"},
        {id: 2, name: "Tom"}
    ];*/

    let dialogsElements = props.dialogsData.map( dialog => ( <DialogItem name={dialog.name} id={dialog.id}/>) );
    let messageElements = props.messageData.map( message => ( <Message message={message.message}/>) );
        return (
            <div>
             <div className={style.dialogs}>
                 <div className={style.dialogsItems}>
                     { dialogsElements }
                    {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
                    {/*<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
                 </div>
                 <div className={style.messengesItem}>
                     {messageElements}
                     {/*<Message message={messageData[0].message}  />*/}
                     {/*<Message message={messageData[1].message}  />*/}
                     {/*<Message message={messageData[2].message}  />*/}
                 </div>
             </div>
            </div>
        );
}

export default Dialogs;
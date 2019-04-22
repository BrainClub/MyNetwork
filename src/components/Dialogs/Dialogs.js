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

class Dialog extends React.Component {
    state = {text: '7567567'};

    onChange = (e) =>{
        console.log(e.target)
        this.setState({text: e.target.value})
    };
    onClick = () =>{
        console.log(this.state.text)
    };



    render() {

        const props = this.props;



        let dialogsElements = props.state.dialogsData.map( dialog => ( <DialogItem name={dialog.name} id={dialog.id}/>) );
        let messageElements = props.state.messageData.map( message => ( <Message message={message.message}/>) );

        // 111111111111111111111111111111111111111111111111
        // let wow = React.createRef();
        //
        // let it = () => {
        //     let lol = wow.current.value;
        //     alert(lol);
        // };
        //
        //111111111111111111111111111111111111111111111111

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
                        <textarea  ref={ i  => this.refText = i}   onChange={this.onChange}>{this.state.text}</textarea>
                        <button onClick={this.onClick}>Send</button>




                        <button onClick={() => console.log(this.refText.value)}>Send</button>
                        {/*<Message message={messageData[0].message}  />*/}
                        {/*<Message message={messageData[1].message}  />*/}
                        {/*<Message message={messageData[2].message}  />*/}
                    </div>
                    {/*// 111111111111111111111111111111111111111111111111*/}
                    {/*<div>*/}
                        {/*<textarea ref={ wow }> </textarea>*/}
                        {/*<button onClick={ it }>Send</button>*/}
                    {/*</div>*/}
                    {/*// 111111111111111111111111111111111111111111111111*/}
                </div>
            </div>
        );



    }
}
// const Dialogs = (props) => {
// /* ОПрокинув в індекс, засоряти тут нізя!!!
//     let messageData = [
//         {id: 1, message: 'hi'},
//         {id: 2, message: 'hi how are you'},
//         {id: 3, message: 'hi are you'},
//         {id: 4, message: 'hi Tow'}
//     ];
// */
//  /*   let dialogsData = [
//         {id: 1, name: "Dima"},
//         {id: 2, name: "Tom"}
//     ];*/
//
//     let dialogsElements = props.state.dialogsData.map( dialog => ( <DialogItem name={dialog.name} id={dialog.id}/>) );
//     let messageElements = props.state.messageData.map( message => ( <Message message={message.message}/>) );
//
//     // let newDialogElement = React.createRef();
//
//     let addMessage = () => {
//         let text = this.newDialogElement.current.value;
//         alert(text);
//     };
//
//
//
//     return (
//             <div>
//              <div className={style.dialogs}>
//                  <div className={style.dialogsItems}>
//                      { dialogsElements }
//
//                     {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
//                     {/*<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
//                  </div>
//                  <div className={style.messengesItem}>
//                      {messageElements}
//                      <textarea ref={ (elem) => (this.newDialogElement= elem)}></textarea>
//                      <button onClick={addMessage}>Send</button>
//                      {/*<Message message={messageData[0].message}  />*/}
//                      {/*<Message message={messageData[1].message}  />*/}
//                      {/*<Message message={messageData[2].message}  />*/}
//                  </div>
//              </div>
//             </div>
//         );
// }

export default Dialog;
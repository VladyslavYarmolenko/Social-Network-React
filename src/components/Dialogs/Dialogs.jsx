import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {

  let newMessage = React.createRef();
  let state = props.dialogsPage;

  let onClickaddMessage = () => {
    props.addMessage();
  }


  let onChangeMessage = () => {
    let mess = newMessage.current.value;
    props.updateNewMessageText(mess);
  } 


let dialogsElements = state.dialogs.map( dialog => 
  <DialogItem  name={dialog.name} key={dialog.id} id={dialog.id} />
)


let messagesElements = state.messages.map( message => <Message message={message.message} key={message.id}/>)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
      <div>
      <textarea ref={newMessage} value={props.dialogsPage.newMessageText} onChange={onChangeMessage}>
      </textarea>
    </div>
    <div>
      <button onClick={onClickaddMessage}>Add message</button>
    </div>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs
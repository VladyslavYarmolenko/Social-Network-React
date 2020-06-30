import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {

  let newMessage = React.createRef();

  let addMessage = () => {
    props.addMessage();
  }


  let onChangeMessage = () => {
    let mess = newMessage.current.value;
    props.updateNewMessageText(mess);
  } 

  let dialogs = props.state.dialogs;
  let messages = props.state.messages;


let dialogsElements = dialogs.map( dialog => 
  <DialogItem  name={dialog.name} id={dialog.id} />
) 


let messagesElements = messages.map( message => <Message message={message.message} id={message.id}/>)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={s.messages}>
      <div>
      <textarea ref={newMessage} onChange={onChangeMessage}>
      </textarea>
    </div>
    <div>
      <button onClick={addMessage}>Add message</button>
    </div>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs
import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) =>{
  let path = '/dialogs/'+ props.id;
  return (
    <div className={s.dialog}>
           <div className={s.dialogAva}> <img src="https://i.pinimg.com/originals/86/9e/60/869e60f10caa7b8e0ac30433652b3944.jpg"></img></div>
          <NavLink className={s.dialogNames} to={path}>{props.name}</NavLink> 
    </div>
  )
}



export default DialogItem 
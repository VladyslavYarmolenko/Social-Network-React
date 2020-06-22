import React from 'react';
import s from './FriendItem.module.css';


const FriendItem = (props) => {
  
return (
<div className={s.Friends}>
    <div className={s.Friends_ava}>
        <img src="https://i.pinimg.com/originals/86/9e/60/869e60f10caa7b8e0ac30433652b3944.jpg"></img>
    </div>
    <p className={s.FriendsName}>{props.name}</p>
</div>
      
  )
}


export default FriendItem;
import React from 'react';
import s from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem';


const Friends = (props) => {
  let Friends = props.state.friendsList;
  
  let FriendsElements = Friends.map( friend => 
    <FriendItem  name={friend.name} id={friend.id} />
  )

  return (
    <div className={s.Friends}>
      <div className={s.Friends_title}>Friends</div>
      <div className={s.Friends_list}>{FriendsElements}</div>
    </div>
  )
}


export default Friends;
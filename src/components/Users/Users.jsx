import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user_image.png'
import { NavLink } from 'react-router-dom';


let Users = (props) => {
  
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = []; 

  for(let i = 1; i <= pagesCount; i++){
    pages.push(i);
  }

  return   <div>
  {pages.map(p =>  {
   return <span className={styles.pageNum}><span className={props.currentPage === p? styles.selectedPage : ""} onClick={ (e) => {
     props.onPageChanged(p)}}>{p}</span></span>
  })}
<div>

</div>
{
  props.users.map( u => <div key={u.id}>
    <span>
      <div>
        <NavLink to={'/profile/' + u.id}><img src={u.photos.small != null ? u.photos.small : userPhoto } className = {styles.userPhoto}></img></NavLink>
      </div>
      <div>
      {u.followed 
      ? <button onClick = { () => {props.unfollow(u.id)}}>Unfollow</button> 
      : <button onClick = { () => {props.follow(u.id)}}>Follow</button>} 
      </div>
    </span>
    <span>
      <span>
        <div>{u.name}</div>
        <div>{u.status}</div>
      </span>
      <span>
        <div></div>
        <div></div>
      </span>
    </span>
  </div>)
}

</div>
}

export default Users;
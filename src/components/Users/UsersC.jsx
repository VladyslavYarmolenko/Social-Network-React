import React from 'react';
import styles from './Users.module.css'
import * as axios from 'axios';
import userPhoto from '../../assets/images/user_image.png'

class UsersC extends React.Component {
 

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=$(this.props.currentPage)&count=$(this.props.pageSize)`).then(response => {
      this.props.setUsers(response.data.items);
    });
  }
  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = []; 

    for(let i = 1; i <= pagesCount; i++){
      pages.push(i);
    }

    return <div>
      {pages.map(p =>  {
       return <span className={this.props.currentPage === p && styles.selectedPage}>{p}</span>
      })}
    <div>

    </div>
    {
      this.props.users.map( u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photos.small != null ? u.photos.small : userPhoto } className = {styles.userPhoto}></img>
          </div>
          <div>
          {u.followed 
          ? <button onClick = { () => {this.props.unfollow(u.id)}}>Unfollow</button> 
          : <button onClick = { () => {this.props.follow(u.id)}}>Follow</button>} 
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
}

export default UsersC;
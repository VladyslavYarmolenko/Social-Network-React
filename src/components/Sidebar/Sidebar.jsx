import React from 'react';
import s from './Sidebar.module.css';
import Friends from './Friends/Friends';


const Sidebar = (props) => {

  return (
    <div className={s.Sidebar}>
      <div className={s.friendsBlock}>
        <Friends state={props.state.sidebar}/>
      </div>
    </div>
  )
}


export default Sidebar;
import React from 'react';
import s from './Sidebar.module.css';
import Friends from './Friends/Friends';

class Sidebar extends React.Component {
  render() {
    return (
      <div className={s.Sidebar}>
          <div className={s.friendsBlock}>
            <Friends state={this.props.state.sidebar}/>
          </div>
      </div>
    )
  }
}

export default Sidebar;
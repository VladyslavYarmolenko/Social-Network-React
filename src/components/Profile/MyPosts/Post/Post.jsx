import React from 'react';
import s from'./Post.module.css';

const Post = (props) => {
  return   (
      <div className={s.item}>
      <img src="https://i.pinimg.com/originals/86/9e/60/869e60f10caa7b8e0ac30433652b3944.jpg"></img>
        {props.message}
        <div>
        <span>like</span>
        {props.likes}
        </div>
      </div>
  )
}


export default Post;
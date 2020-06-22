import React from 'react';
import s from'./ProfileInfo.module.css';


const ProfileInfo = () => {
  return   (
<div>
    <div>
        <img src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_771,c_fill,g_auto,h_434,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"></img>
    </div>
    <div className={s.descriptionBlock}>
        ava + description
    </div>
</div>
  )
}


export default ProfileInfo;
import React from 'react';
import s from'./ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';



const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader/>
  }

  let contacts = props.profile.contacts;
  

  return   (
<div>
    <div>
        <img src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_771,c_fill,g_auto,h_434,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"></img>
    </div>
    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large} className={s.AvaImg} />
        <div>{props.profile.aboutMe}</div>
        <div>
          { Object.keys(contacts).map(key => <div><a href={contacts[key]}>{contacts[key]}</a></div>) }
        </div>
        <div>{props.profile.lookingForAJob ? 'Ищю работу' : 'Трудоустроен'}</div>
        <div>{props.profile.lookingForAJobDescription}</div>
        <div>{props.profile.fullName}</div>
    </div>
</div>
  )
}


export default ProfileInfo;
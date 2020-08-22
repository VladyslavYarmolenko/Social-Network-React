import  React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator}  from '../../redux/dialogsReduser';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (mess) => {
      dispatch(updateNewMessageTextActionCreator(mess))
    },
    addMessage: () => {
      dispatch(addMessageActionCreator())
    },
}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
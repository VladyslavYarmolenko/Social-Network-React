import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Route, BrowserRouter,} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

// const App = (props) => {  
//   return (
//   <BrowserRouter>  
//     <div className="app-wrapper">
//       <Header/>
//       <Navbar/>
//       <div className= 'app-wrapper-content'>
//         <Route path="/dialogs" render={ () => <DialogsContainer/>} />
//         <Route path='/profile' render={ () => <Profile/>} />
//         <Route path='/news' render={ () => <News/>} />
//         <Route path='/music' render={ () => <Music/>}/>
//         <Route path='/settings' render={ () => <Settings/>} />
//       </div>
//       <Sidebar/>
//   </div>
//  </BrowserRouter>
  
//   );
// }

const App = (props) => {
  return  (
    <BrowserRouter>  
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className= 'app-wrapper-content'>
          <Route path="/dialogs" render={ () => <DialogsContainer/>} />
          <Route path='/profile' render={ () => <ProfileContainer/>} />
          <Route path='/news' render={ () => <News/>} />
          <Route path='/music' render={ () => <Music/>}/>
          <Route path='/settings' render={ () => <Settings/>} />
          <Route path='/users' render={ () => <UsersContainer/>} />
        </div>
      </div>
   </BrowserRouter>
  );
}

// const mapStateToProps = (store) => ({
//   state: store.state,
//   store: store
// })



// export default connect(mapStateToProps)(App);

export default App;

import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';

// let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
          <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
// }

// rerenderEntireTree();

// store.subscribe( () => {
//   rerenderEntireTree();
// });


serviceWorker.unregister();
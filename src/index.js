import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'//the provider tells the whole app about the store, must wrap the <App/> in <Provider/>, and point to the store={store}

import './index.css';
import App from './App';
import store from './Store/index'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

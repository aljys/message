import React from 'react';
import ReactDOM from 'react-dom';
import Basic from './router/Basic';
import {Provider} from 'react-redux';
import store from './redux/store'
ReactDOM.render(
<Provider store={store}>
  <Basic />
</Provider>,
document.getElementById('root'));

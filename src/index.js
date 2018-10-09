import React from 'react';
import ReactDOM from 'react-dom';
// 在index.js中引入index.css。此时全部组件都可以使用index.css中的样式
// 但是这样不太好，因为样式容易冲突等，所以我们使用 Styled-Components
import './style.js';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

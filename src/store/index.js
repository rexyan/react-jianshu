import { createStore, compose, applyMiddleware } from 'redux' // 导入applyMiddleware
import reducer from './reducer'
// 导入 redux-thunk
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// applyMiddleware(thunk) 使用thunk中间件
const store  = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store;
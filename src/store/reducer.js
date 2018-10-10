// import { combineReducers } from 'redux'
// 之前的combineReducers 是从redux中导入的，现在我们从redux-immutable导入combineReducers
// 这个combineReducers可以创建不可变的immutable对象
import { combineReducers } from 'redux-immutable'
import { reducer as herderReaducer } from '../common/header/store';

const reducer = combineReducers({
	header: herderReaducer
})

export default reducer;

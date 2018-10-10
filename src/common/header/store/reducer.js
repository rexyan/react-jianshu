import * as constants from './constants'
// 导入immutable
import { fromJS } from 'immutable' 

// 创建immutable对象
const defaultState = fromJS({
	'inputValue': ''
});


export default (state = defaultState, action ) => {
	if (action.type === constants.SEARCH_FOCUS){
		// return {
		// 	inputValue: '测试文本'
		// }
		// immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
		return state.set('inputValue', '测试文本')
	}
	return state;
}

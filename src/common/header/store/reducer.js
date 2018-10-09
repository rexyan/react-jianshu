import * as constants from './constants'

// 专为header建立一个reducer，用来存放和header的数据信息
const defaultState = {
	'inputValue': ''
};


export default (state = defaultState, action ) => {
	if (action.type === constants.SEARCH_FOCUS){
		return {
			inputValue: '测试文本'
		}
	}
	return state;
}

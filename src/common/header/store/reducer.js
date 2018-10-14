import * as constants from './constants'
import { fromJS } from 'immutable' 

const defaultState = fromJS({
	'showSearchArea': '',
	'list': []
});


export default (state = defaultState, action ) => {
	// 获得焦点，将showSearchArea的值设置为true
	if (action.type === constants.SEARCH_FOCUS){
		return state.set('showSearchArea', true)
	}
	// 失去焦点，将showSearchArea的值设置为false
	if (action.type === constants.SEARCH_BLUR){
		return state.set('showSearchArea', false)
	}
	// 获取热门搜索的值
	if (action.type === constants.CHANGE_LIST){
		return state.set('list', action.data)
	}
	return state;
}

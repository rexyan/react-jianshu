import * as constants from './constants'
import { fromJS } from 'immutable' 

const defaultState = fromJS({
	showSearchArea: '',
	list: [],
	page: 1,
	totalPage: 1,
	mouseIn: false
});


export default (state = defaultState, action ) => {
	switch(action.type){
		// 获得焦点，将showSearchArea的值设置为true
		case constants.SEARCH_FOCUS:
			return state.set('showSearchArea', true)

		// 失去焦点，将showSearchArea的值设置为false
		case constants.SEARCH_BLUR:
			return state.set('showSearchArea', false)

		// 获取热门搜索的值
		case constants.CHANGE_LIST:
			// return state.set('list', action.data).set('totalPage', action.totalPage)
			// 下面写法和上面一样的结果一样，merge相当于实现多个set
			return state.merge({
				'list': action.data,
				'totalPage': action.totalPage
			})

		// mouseEnter
		case constants.MOUSE_ENTER:
			return state.set('mouseIn', true)

		// mouseLeave
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn', false)

		// 更换页码
		case constants.CHANGE_PAGE:
			return state.set('page', action.page)

		default:
			return state;
	}
}

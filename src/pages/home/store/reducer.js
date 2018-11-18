import { fromJS } from 'immutable' 
import * as constants from './constants'

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList:[]
});


export default (state = defaultState, action ) => {
	switch(action.type){
		case constants.CHANGE_HOME_DATA:
			// state.set 只能改变一个state中的值， fromJS是将一个普通的js对象，转换成为一个 immutable的对象
			// state.set('topicList', fromJS(action.topicList))
			
			// state.merge 一次性改变多个值
			return state.merge({
				topicList: fromJS(action.topicList),
				articleList: fromJS(action.articleList),
				recommendList: fromJS(action.recommendList),
			})
		default:
			return state;
	}
}

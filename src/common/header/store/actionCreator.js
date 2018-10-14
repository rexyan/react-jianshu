import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable' 

export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
	type: constants.SEARCH_BLUR
});

export const getList = () => {
	// 使用redux-thunk之后，action不光可以返回一个对象，还可以返回一个函数。同时传入一个dispatch
	return (dispatch) => {
		axios.get('/api/headerList.json').then((res) => {
			// 获取到接口返回的数据
			const data = res.data;
			
			// 派发dispatch
			dispatch(changeList(data.data))
		}).catch(() => {
			console.log('Error')
		})
	}
};

const changeList = (data) => ({
	type: constants.CHANGE_LIST,
	
	// 因为State中的list数组是一个 immutable 对象，所以我们要将传入的值也变为一个immutable对象
	// 这样才能修改State中list的值
	data: fromJS(data) 
})

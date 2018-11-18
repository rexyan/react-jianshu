import axios from 'axios'
import * as constants from './constants'


const changeDetail = (title, content) => ({
	type: constants.CHANGE_DETAIL,
	title,
	content
})

export const getDetail = () =>{
	return (dispatch) => {
		axios.get('api/details.json').then((res) => {
			const result = res.data.data
			const action =  changeDetail(result.title, result.content)
			dispatch(action)
		})
	}
}
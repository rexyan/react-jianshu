import React, { Component } from 'react'
import Topic from './components/Topic' 
import List from './components/List' 
import Recommend from './components/Recommend' 
import Writer from './components/Writer' 
import axios from 'axios'
import { connect } from 'react-redux'

import { 
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style';


class Home extends Component {
	render(){
		return (
			<HomeWrapper> 
				<HomeLeft> 
					<img alt='' className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/4520/83fadd2df821d52fb277287ac4a189e8d21b7b65.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
					<Topic />
					<List/>
				</HomeLeft>
				<HomeRight> 
					<Recommend/>
					<Writer/>
				</HomeRight>
			</HomeWrapper>
		)
	}

	componentDidMount(){
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data
			const action = {
				type: 'change_home_data',
				topicList: result.topicList,
				articleList: result.articleList,
				recommendList: result.recommendList
			}
			this.props.changeHomeData(action)
		})
	}
}

const mapDispatch = (dispatch) => ({
	changeHomeData(action){
		dispatch(action);
	}
})


export default connect(null, mapDispatch)(Home);
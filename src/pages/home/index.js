import React, { Component } from 'react'
import Topic from './components/Topic' 
import List from './components/List' 
import Recommend from './components/Recommend' 
import Writer from './components/Writer' 
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { BackTop } from './style'

import { 
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style';


class Home extends Component {

	hancleCcrollTop(){
		window.scrollTo(0, 0)
	}

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
				<BackTop onClick={ this.hancleCcrollTop }> 顶部 </BackTop>
			</HomeWrapper>
		)
	}

	componentDidMount(){
		this.props.changeHomeData()
	}
}

const mapDispatch = (dispatch) => ({
	changeHomeData(){
		const action = actionCreators.getHomeInfo()
		dispatch(action)
	}
})


export default connect(null, mapDispatch)(Home);
import React, { Component } from 'react'
import { DetailWrapper, Header, Content } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'


class Detail extends Component {
	render(){
		const { title, content } = this.props

		return (
			<DetailWrapper>
				<Header>{ title }</Header>
				<Content dangerouslySetInnerHTML={{ __html: content }} /> 
			</DetailWrapper>
		)
	}

	componentDidMount(){
		// this.props.match.params.id 获取的参数是在路由中传递的。不是？方式的
		// ？方式使用 this.props.localtion.search
		this.props.getDetail(this.props.match.params.id)
	}
}

const mapState = (state) => ({
	title: state.get('detail').get('title'),
	content: state.get('detail').get('content')
})

const mapDispatch = (dispatch) => ({
	getDetail(id){
		dispatch(actionCreators.getDetail(id))
	}
})

export default connect(mapState, mapDispatch)(Detail);
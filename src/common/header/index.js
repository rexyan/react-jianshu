import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	Searchinfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList
}from './style'
import { actionCreator } from './store'


class Header extends Component {
	render(){
		return (
		<HeaderWrapper> 
			<Logo />
			<Nav>
				<NavItem className='left active'> 首页 </NavItem>
				<NavItem className='left'> 下载App </NavItem>
				<NavItem className='right'> 登录 </NavItem>
				<NavItem className='right'> Aa </NavItem>
				<NavSearch onFocus={ this.props.SearchFocus } onBlur={ this.props.SearchBlur }>	
				</NavSearch>
					{ this.getListArea() }
				<Addition>
					<Button className='writting'> 写文章 </Button>
					<Button className='reg'> 注册 </Button>
				</Addition>
			</Nav>
			</HeaderWrapper>
		)
	}

	getListArea = () => {
	if (this.props.showSearchArea){
		return (
			<Searchinfo>
				<SearchInfoTitle>
					热门搜索
					<SearchInfoSwitch>
						换一换
					</SearchInfoSwitch>
				</SearchInfoTitle>
				<SearchInfoList>
					{
						this.props.list.map((item)=>{
							return <SearchInfoItem key={ item }> { item } </SearchInfoItem>
						})
					}
				</SearchInfoList>
			</Searchinfo>
		)
	}else{
		return null;
	}
}
}


const mapStateToProps = (state) => {
	return {
		showSearchArea: state.get('header').get('showSearchArea'),
		list : state.get('header').get('list')
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		// 获得焦点，派发dispatch函数
		SearchFocus(){
			// 获取异步数据
			dispatch(actionCreator.getList())
			dispatch(actionCreator.searchFocus())
		},
		
		// 失去焦点，派发dispatch函数
		SearchBlur(){
			dispatch(actionCreator.searchBlur())
		}
	}
}


export default connect(mapStateToProps, mapDispathToProps)(Header);




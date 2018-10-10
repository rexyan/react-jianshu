import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button
}from './style'
import { actionCreator } from './store'

const Header = (props) => {
	return (
		<HeaderWrapper> 
			<Logo />
			<Nav>
				<NavItem className='left active'> 首页 </NavItem>
				<NavItem className='left'> 下载App </NavItem>
				<NavItem className='right'> 登录 </NavItem>
				<NavItem className='right' onClick={ props.clickSearchFocus }> Aa { props.inputValue } </NavItem>
				<NavSearch></NavSearch>
				<Addition>
					<Button className='writting'> 写文章 </Button>
					<Button className='reg'> 注册 </Button>
				</Addition>
			</Nav>
		</HeaderWrapper>
	)
}


const mapStateToProps = (state) => {
	return {
		// inputValue: state.header.get('inputValue') 这是没有使用redux-immutable
		// 只使用immutable的写法

		// 下面是我们使用redux-immutable后的写法，此时因为将/src/stare下的reducer中的state也变成了immutable对象
		// 所以直接使用get就行
		inputValue: state.get('header').get('inputValue')
		// 上面的写法和 inputValue: state.getIn(['header', 'inputValue']) 效果一样
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		clickSearchFocus(){
			dispatch(actionCreator.searchFocus())
		}
	}
}


export default connect(mapStateToProps, mapDispathToProps)(Header);




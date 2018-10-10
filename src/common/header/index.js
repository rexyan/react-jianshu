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
		// 这里因为使用了immutable，所以state.header是一个immutable对象，我们在获取值的时候就需要使用get方法。
		inputValue: state.header.get('inputValue') 
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




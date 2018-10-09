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
		inputValue: state.header.inputValue // 这里使用的是header下的reducer中的inputValue，也就是子reducer，所以写为state.header.inputValue
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




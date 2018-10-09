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

const Header = (props) => {
	return (
		<HeaderWrapper> 
			<Logo />
			<Nav>
				<NavItem className='left active'> 首页 </NavItem>
				<NavItem className='left'> 下载App </NavItem>
				<NavItem className='right'> 登录 </NavItem>
				<NavItem className='right'> Aa </NavItem>
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

	}
}

const mapDispathToProps = (dispatch) => {
	return {
		
	}
}


export default connect(mapStateToProps, mapDispathToProps)(Header);




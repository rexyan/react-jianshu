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

// 定义一个函数，函数的返回值为热门搜索部分的内容
// 获取搜索框内获取到焦点，那么就返回该热门搜索部分
// 否则就返回空，即不现实热门搜索部分
const getListArea = (show) => {
	if (show){
		return (
			<Searchinfo>
				<SearchInfoTitle>
					热门搜索
					<SearchInfoSwitch>
						换一换
					</SearchInfoSwitch>
				</SearchInfoTitle>
				<SearchInfoList>
					<SearchInfoItem> 教育 </SearchInfoItem>
					<SearchInfoItem> 区块链 </SearchInfoItem>
					<SearchInfoItem> 小程序 </SearchInfoItem>
					<SearchInfoItem> Vue </SearchInfoItem>
					<SearchInfoItem> 理财 </SearchInfoItem>
				</SearchInfoList>
			</Searchinfo>
		)
	}else{
		return null;
	}
}

const Header = (props) => {
	return (
		<HeaderWrapper> 
			<Logo />
			<Nav>
				<NavItem className='left active'> 首页 </NavItem>
				<NavItem className='left'> 下载App </NavItem>
				<NavItem className='right'> 登录 </NavItem>
				<NavItem className='right'> Aa </NavItem>
				<NavSearch onFocus={ props.SearchFocus } onBlur={ props.SearchBlur }>	
				</NavSearch>
					{ getListArea(props.showSearchArea) }
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
		showSearchArea: state.get('header').get('showSearchArea')
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		// 获得焦点，派发dispatch函数
		SearchFocus(){
			dispatch(actionCreator.searchFocus())
		},
		// 失去焦点，派发dispatch函数
		SearchBlur(){
			dispatch(actionCreator.searchBlur())
		}
	}
}


export default connect(mapStateToProps, mapDispathToProps)(Header);




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
}from './style';
import { actionCreator } from './store';
import { Link } from 'react-router-dom';
import { actionCreators as loginActionCreator } from '../../pages/login/store';

class Header extends Component {
	render(){
		// 解构赋值
		const { SearchFocus, SearchBlur, list, login, logout } = this.props;

		return (
		<HeaderWrapper>
			<Logo />
			<Nav>
				<NavItem className='left active'> 首页 </NavItem>
				<NavItem className='left'> 下载App </NavItem>
				{
					login ? <NavItem className='right' onClick={ logout }> 退出 </NavItem>: 
					<NavItem className='right'>登陆</NavItem>
				}
				<NavItem className='right'> Aa </NavItem>
				<NavSearch onFocus={ () => SearchFocus(list) } onBlur={ SearchBlur }>	
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
		// 解构赋值
		const { list, showSearchArea, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		// 因为 list 中的数据是 immutable对象，所以我们使用toJS方法将其转换为js对象，这样才能使用下标来取值
		const jsList = list.toJS(); 
		const pageList = []

		if (jsList.length){
			for (var i = (page-1)*10; i < page*10; i++) {
				pageList.push(
					<SearchInfoItem key={ jsList[i] }> { jsList[i] } </SearchInfoItem>
				)
			}
		}

		if (showSearchArea || mouseIn){
			return (
				<Searchinfo 
				onMouseEnter={ handleMouseEnter }
				onMouseLeave={ handleMouseLeave }
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={ ()=> handleChangePage(page, totalPage) }>
							换一换
						</SearchInfoSwitch>
					</SearchInfoTitle>
					
					<SearchInfoList>
						{ pageList }
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
		list : state.get('header').get('list'),
		page:  state.get('header').get('page'),
		mouseIn: state.get('header').get('mouseIn'),
		totalPage: state.get('header').get('totalPage'),
		login: state.get('login').get('login')
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		// 获得焦点，派发dispatch函数
		SearchFocus(list){
			// 没有数据的时候异步获取数据
			if (list.size === 0){
				dispatch(actionCreator.getList())
			}
			
			dispatch(actionCreator.searchFocus())
		},
		
		// 失去焦点，派发dispatch函数
		SearchBlur(){
			dispatch(actionCreator.searchBlur())
		},

		// 鼠标在上面
		handleMouseEnter(){
			dispatch(actionCreator.mouseEnter())
		},

		// 鼠标被移除
		handleMouseLeave(){
			dispatch(actionCreator.mouseLeave())
		},

		// 点击换一换更换页码
		handleChangePage(page, totalPage){
			if (page < totalPage){
				dispatch(actionCreator.changePage(page + 1))
			}else{
				dispatch(actionCreator.changePage(1))
			}
			
		},

		logout(){
			dispatch(loginActionCreator.Userlogout())
		},
	}
}


export default connect(mapStateToProps, mapDispathToProps)(Header);




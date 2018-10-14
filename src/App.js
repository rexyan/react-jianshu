import React, { Component } from 'react';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';
// 导入路由模块
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
    	<Provider store={store}>
    	<div>
    		<Header />
    		<BrowserRouter>
    			<div>
    				{
    					//exact 代表严格匹配
    				}
    				<Route path='/' exact render={()=><div>home</div>}> </Route> 
    				<Route path='/detail' exact render={()=><div>detail</div>}> </Route>
    			</div>
    		</BrowserRouter>
    	</div>
    	</Provider>
    );
  }
}

export default App;

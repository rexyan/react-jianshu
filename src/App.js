import React, { Component } from 'react';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';
// 导入路由模块
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
    	<div>
    		<Header />
    		<BrowserRouter>
    			<div>
    				{
    					// exact 代表严格匹配
                        // <Route path='/detail/:id' exact component={ Detail }> </Route>
                        // <Route path='/detail' exact component={ Detail }> </Route>
    				}
    				<Route path='/' exact component={ Home }> </Route> 
    				<Route path='/detail' exact component={ Detail }> </Route>

    			</div>
    		</BrowserRouter>
    	</div>
    	</Provider>
    );
  }
}

export default App;

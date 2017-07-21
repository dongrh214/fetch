import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import configureStore from './store/configureStore'

import './static/css/common.less'

// 创建 Redux 的 store 对象
const store = configureStore();

import RouteMap from './router/routeMap'

// 测试 fetch 的功能
import { getData, postData } from './fetch/fetch.js'
getData();
postData();

render(
    <Provider store={store}>
        <RouteMap history={browserHistory}/>
    </Provider>,
    document.getElementById('root')
);

### react-router
安装 `yarn add react-router-dom`
编写简单的路由程序
##### src/index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';

ReactDOM.render(<AppRouter>, document.getElementById('root'));
```

##### src/ 目录下创建 AppRouter.js
```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Index() {
  return (
    <h2>Jorna</h2>
  )
}

function List() {
  return (
    <h2>List-page</h2>
  )
}

function AppRouter() {
  return (
    <Router>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/list/">列表</Link></li>
      </ul>
      <Route path="/" exact component={Index}></Route>
      <Route path="/list/" component={List}></Route>
    </Router>
  )
}

export default AppRouter;
```

编写 Index 组件
##### 在 src/ 目录建立一个 views，然后建立一个组件 Index.js，代码如下：
```javascript
import React, { Component } from 'react';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <h2>Jorna in here</h2>
    )
  }
}

export default Index;
```
##### 创建并编写 List.js 组件
```javascript
import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <h2>List Page</h2>
    )
  }
}

export default List;
```

##### 修改

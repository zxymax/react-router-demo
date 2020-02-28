#### react-router 嵌套路由
初始化基本目录
##### 在 src/ 目录下建立 views，然后在 views 建立两个目录 video/ 和 workplace/，然后在 src/ 下建立一个 AppRouter.js 文件作为首页和路由的配置文件。
`AppRouter.js` 代码如下：
```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './views/Index';
import './index.css';

function AppRouter() {
  return (
    <Router>
      <div class="main-div">
        <div class="left-nav">
          <h2>一级导航</h2>
          <ul>
            <li><Link to="/">博客首页</Link></li>
            <li><Link to="">视频教程</Link></li>
            <li><Link to="">职场技能</Link></li>
          </ul>
        </div>
        <div class="right-main">
          <Route path="/" exact component={Index} />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter;
```

##### 修改 src/index.js 文件，代码如下：
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';

ReactDOM.render(<AppRouter>, document.getElementById('root'));
```
##### 修改 src/index.css 样式文件
```css
body {
  margin: 0;
  padding: 0;
}
.main-div {
  display: flex;
  width: 100%;
}
.left-nav {
  width: 16%;
  background-color: #c0c0c0;
  color: #333;
  font-size: 24px;
  height: 1000px;
  padding: 20px;
}
.right-main {
  width: 84%;
  height: 1000px;
  background: #fff;
  font-size: 20px;
}
```
#### 嵌套路由
编写 Video 的子页面
##### video/ 下创建 Flutter.js Vue.js ReactPage.js，代表着不同视频的页面
`Flutter.js`
```javascript
import React from 'react';

function Flutter() {
  return (
    <h2>Flutter 页面</h2>
  )
}

export default Flutter;
```

`Vue.js`
```javascript
import React from 'react';

function Vue() {
  return (
    <h2>Vue 页面</h2>
  )
}

export default Vue;
```

`ReactPage.js`
```javascript
import React from 'react';

function ReactPage() {
  return (
    <h2>ReactPage 页面</h2>
  )
}

export default ReactPage;
```
##### 更新 Video.js 文件
```javascript
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Flutter from './vide/Flutter';
import Vue from './vide/Vue';
import ReactPage from './vide/ReactPage';

export default function Video() {
  return (
    <div>
      <div className="top-nav">
        <ul>
          <li><Link to="/video/flutter">Flutter</Link></li>
          <li><Link to="/video/vue">vue</Link></li>
          <li><Link to="/video/reactpage">reactpage</Link></li>
        </ul>
      </div>
      <div className="video-content">
        <Route path="/video/flutter/" component={Flutter} />
        <Route path="/video/vue/" component={Vue} />
        <Route path="/video/reactpage/" component={ReactPage} />
      </div>
    </div>
  )
}
```
##### 更新 AppRouter.js
```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Index from './views/Index';
import Video from './views/Video';
import './index.css';

function AppRouter() {
  return (
    <Router>
      <div className="main-div">
        <div className="left-nav">
        <h2>一级导航</h2>
        <ul>
          <li><Link to="/">博客首页</Link></li>
          <li><Link to="/video/">视频教程</Link></li>
          <li><Link to="">职场技能</Link></li>
        </ul>
        </div>
        <div className="right-main">
          <Route path="/" component={Index} />
          <Route path="/video" component={Video} />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter;
```
##### 编写第三级子页面 在 src/workplace 下新建 Money.js 和 GetUp.js
`Money.js`
```javascript
import React from 'react';

function Money() {
  return (
    <h2>程序员加薪</h2>
  )
}

export default Money;
```
`GetUp.js`
```javascript
import React from 'react';

function GetUp() {
  return (
    <h2>程序员早起</h2>
  )
}

export default GetUp;
```
##### 编写二级子页面 src/views 下建立 WorkPlace.js，作为二级子页面
```javascript
import React from 'react';
import { Route, Link } from 'react-router-dom';
import GetUp from './workplace/GetUp';
import Money from './workplace/Money';

function WorkPlace() {
  return (
    <div>
      <div className="top-nav">
        <ul>
          <li><Link to="/workplace/money"></Link></li>
          <li><Link to="/workplace/getup"></Link></li>
        </ul>
      </div>
      <div className="video-content">
        <Route path="/workplace/money" component={Money} />
        <Route path="/workplace/getup" component={GetUp} />
      </div>
    </div>
  )
}

export default WorkPlace;
```
##### 配置 AppRouter.js
```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './views';
import Video from './views/Video';
import WorkPlace from './views/WorkPlace';
import './index.css';

function AppRouter() {
  return (
    <Router>
      <div className="main-div">
        <div className="top-nav">
          <ul>
            <li><Link to="/">博客首页</Link></li>
            <li><Link to="/video">视频教程</Link></li>
            <li><Link to="/workplace">职场技能</Link></li>
          </ul>
        </div>
        <div className="video-content">
          <Route path="/" exact component={Index} />
          <Route path="/video" component={Video} />
          <Route path="/workplace" component={WorkPlace} />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter;
```
#### 动态获取路由进行配置
- 模拟后台得到 JSON 数据
- 循环出 Link 区域
- 循环出路由配置
##### 更新 AppRouter.js
```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './views/Index';
import Video from './views/Video';
import WorkPlace from './views/WorkPlace';
import './index.css';

function App() {
  const routerConfig = [
    { path: '/', title: '博客首页', exact: true, component: Index },
    { path: '/video/', title: '视频教程', exact: false, component: Video },
    { path: '/workplace/', title: '职场技能', exact: false, component: WorkPlace }
  ]
  return (
    <Router>
      <div className="main-div">
        <div className="left-nav">
          <h2>Router</h2>
          <ul>
            {
              routerConfig.map((item, index) => {
                return <li key={index}><Link to={item.path}>{item.title}</Link></li>
              })
            }
          </ul>
        </div>
        <div className="right-main">
          {
            routerConfig.map((item, index) => {
              return <Route key={index} exact={item.exact} path={item.path} component={item.component} />
            })
          }
        </div>
      </div>
    </Router>
  )
}

export default AppRouter;
```


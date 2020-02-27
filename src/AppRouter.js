import React from 'react';
// 引入路由
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Index() {
  return <h2>Jorna</h2>;
}

function List() {
  return <h3>List-page</h3>;
}

function AppRouter() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/list/">列表</Link>
        </li>
      </ul>
      <Route path="/" exact component={Index}></Route>
      <Route path="/list/" component={List}></Route>
    </Router>
  );
}

export default AppRouter;

import React from 'react';
// 引入路由
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// function Index() {
//   return <h2>Jorna</h2>;
// }

// function List() {
//   return <h3>List-page</h3>;
// }
import Index from './views/Index';
import List from './views/List';
import Home from './views/Home';

function AppRouter() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/list/123">列表</Link>
        </li>
      </ul>
      <Route path="/" exact component={Index} />
      <Route path="/list/:id" component={List} />
      <Route path="/home/" component={Home} />
    </Router>
  );
}

export default AppRouter;

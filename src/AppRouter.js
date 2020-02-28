import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './views/Index';
import Video from './views/Video';
import WorkPlace from './views/WorkPlace';
import './index.css';

// function AppRouter() {
//   return (
//     <Router>
//       <div className="main-div">
//         <div className="left-nav">
//           <h2>Router</h2>
//           <ul>
//             <li><Link to="/">首页</Link></li>
//             <li><Link to="/video/">视频教程</Link></li>
//             <li><Link to="/workplace/">职场技能</Link></li>
//           </ul>
//         </div>
//         <div className="right-main">
//           <Route path="/video"  component={Video} />
//           <Route path="/workplace" component={WorkPlace} />
//         </div>
//       </div>
//     </Router>
//   )
// }

function AppRouter() {
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

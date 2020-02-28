import React from 'react';
import { Route, Link } from 'react-router-dom';
import Money from './workplace/Money';
import GetUp from './workplace/GetUp';

function WorkPlace() {
  return (
    <div>
      <div className="top-nav">
        <ul>
          <li><Link to="/workplace/money">Money</Link></li>
          <li><Link to="/workplace/getup">GetUp</Link></li>
        </ul>
      </div>
      <div className="video-content">
        <Route path="/workplace/money/" component={Money} />
        <Route path="/workplace/getup" component={GetUp} />
      </div>
    </div>
  )
}

export default WorkPlace;

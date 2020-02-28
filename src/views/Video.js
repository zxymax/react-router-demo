import React from 'react';
import { Route, Link } from 'react-router-dom';
import Flutter from './video/Flutter';
import Vue from './video/Vue';
import ReactPage from './video/ReactPage';

function Video() {
  return (
    <div>
      <div className="top-nav">
        <ul>
          <li><Link to="/video/flutter">Flutter</Link></li>
          <li><Link to="/video/vue">Vue</Link></li>
          <li><Link to="/video/reactpage">ReactPage</Link></li>
        </ul>
      </div>
      <div className="video-main">
        <Route path="/video/flutter/" component={Flutter} />
        <Route path="/video/vue/" component={Vue} />
        <Route path="/video/reactpage" component={ReactPage} />
      </div>
    </div>
  )
}

export default Video;

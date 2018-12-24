import React, { Component } from 'react';
import './App.css';
import 'tachyons';

import { classNamed } from 'classnamed-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import KeyboardNavigation from './scenes/keyboard-navigation/KeyboardNavigation';
import KeyboardForm from './scenes/keyboard-forms/KeyboardForms';
import KeyboardAudit from './scenes/keyboard-audit/KeyboardAudit';
import ScavengerHunt from './scenes/screen-reader-scavenger-hunt/ScavengerHunt';

const Button = classNamed('button')`
  f6 f5-ns fw6 dib ba
  b--black-20 bg-blue white
  ph3 ph4-ns pv2 pv3-ns br2
  grow no-underline
`;

const Index = () => <h2>Home</h2>;

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/keyboard-navigation/">Keyboard Navigation</Link>
          </li>
          <li>
            <Link to="/keyboard-form/">Keyboard Forms</Link>
          </li>
          <li>
            <Link to="/keyboard-audit/">Keyboard Audit</Link>
          </li>
          <li>
            <Link to="/screen-reader-scavenger-hunt/">
              Screen Reader Scavenger Hunt
            </Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/keyboard-navigation/" component={KeyboardNavigation} />
      <Route path="/keyboard-form/" component={KeyboardForm} />
      <Route path="/keyboard-audit/" component={KeyboardAudit} />
      <Route path="/screen-reader-scavenger-hunt/" component={ScavengerHunt} />
    </div>
  </Router>
);

export default App;

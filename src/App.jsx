/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import {
  makeObservable,
  makeAutoObservable,
  observable,
  computed,
  action,
  autorun,
  reaction,
  runInAction,
  when
} from 'mobx';
import { observer } from 'mobx-react';
import clsx from 'clsx';

import './App.scss';

import AppVm from './viewModels/AppVm';

function Home() {
  return (
    <main>
      <h2>Home</h2>
    </main>
  );
}

function About() {
  return (
    <main>
      <h2>About</h2>
    </main>
  );
}

// @observer
class App extends React.Component {
  // vm = new AppVm();

  render() {
    const { vm } = this;

    return (
      <Router>
        <h1>Welcome to React Router!</h1>
        <nav>
          <hr />

          <Link to="/">Home</Link>

          <hr />

          <Link to="/about">Users</Link>

          <hr />
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

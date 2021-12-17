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
import QuestionsView from './components/QuestionsView';

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
        <nav>
          <Link to="/">Home</Link>&nbsp;&nbsp;
          <Link to="/about">About</Link>&nbsp;&nbsp;
          <Link to="/questions">Questions</Link>&nbsp;&nbsp;
        </nav>
        <hr />
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/questions">
            <QuestionsView />
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

/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import clsx from 'clsx';

import './App.scss';

import AppVM from './viewModels/AppVM';
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

@observer
class App extends React.Component {
  vm = new AppVM();

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

import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Header from './components/Header/Header';
import Finder from './views/Finder/Finder';

import './App.scss';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Header />
      </Container>
      <Container maxWidth="md">
        <main>
          <Router>
            <Switch>
              <Route path="/">
                <Finder />
              </Route>
            </Switch>
          </Router>
        </main>
      </Container>
    </React.Fragment>    
  );
}

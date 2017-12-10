import React from 'react';
import Helmet from 'react-helmet';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Layout from 'components/Layout';
import Landing from 'pages/Landing';
import Complaints from 'pages/Complaints';
import Zones from 'pages/Zones';
import './App.scssm';

const title = 'Policibot';

const App = () => (
  <Router>
    <Layout>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{title}</title>
      </Helmet>

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/mis-denuncias" component={Complaints} />
        <Route path="/zonas-informadas" component={Zones} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  </Router>
)

export default App;

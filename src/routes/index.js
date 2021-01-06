import React from 'react';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux'

import {LinkedInPopUp} from 'react-linkedin-login-oauth2';

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

import store from '../store'
import Route from './Route'
import history from '../services/history';

import User from '../pages/User';

export default function Routes() {

  return (
    <>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>

            <Route path="/" exact component={User}/>

            <Route path='/' component={Header} />

            <Route path="/" component={Sidebar} />

          </div>
        </ConnectedRouter>
      </Provider>
    </>
  );
}

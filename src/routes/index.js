import React from 'react';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux'

import {LinkedInPopUp} from 'react-linkedin-login-oauth2';

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

import store from '../store'
import Route from './Route'
import history from '../services/history';

import SignIn from '../pages/SignIn';
import Interest from "../pages/Interest";
import Evaluation from "../pages/Evaluation";
import Question from "../pages/Question";
import Privacy from "../pages/Privacy";

export default function Routes() {

  return (
    <>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route path="/" exact component={SignIn}/>

            <Route path='/client*' component={Header} isPrivate/>

            <Route path="/client*" component={Sidebar} isPrivate/>

            <Route exact path="/linkedin" component={LinkedInPopUp}/>

            <Route path="/client/interest" exact component={Interest} isPrivate/>

            <Route path="/client/evaluation" exact component={Evaluation} isPrivate />

            <Route path="/client/question" exact component={Question} isPrivate />

            <Route path="/client/privacy" exact component={Privacy} isPrivate />

            {/* Pode-se usar o switch para um componente completamente montado */}
            {/* <Switch> */}
            {/* </Switch> */}

            {/* Pode-se usar o switch para um componente completamente montado */}
            {/* <Switch> */}
            {/* </Switch> */}
          </div>
        </ConnectedRouter>
      </Provider>
    </>
  );
}

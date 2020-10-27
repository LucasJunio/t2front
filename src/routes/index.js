import React from 'react';
// import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux'

import { LinkedInPopUp } from 'react-linkedin-login-oauth2';

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

import store from '../store'
import Route from './Route'
import history from '../services/history';

import SignIn from '../pages/SignIn';
import User from '../pages/User';
import Skill from '../pages/Skill';
import Office from '../pages/Office';
import Department from '../pages/Department';
import Segment from '../pages/Segment';
import Interest from '../pages/Interest';
import ContentType from '../pages/ContentType';
import Company from '../pages/Company';
import Content from '../pages/Content';
import Conquest from '../pages/Conquest';
import Quadrant from '../pages/Quadrant';
import Sublevel from '../pages/Sublevel';
import Audience from '../pages/Audience';
import Evaluation from '../pages/Evaluation';
import Question from "../pages/Question";

export default function Routes() {

  return (
    <>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
          <Route path="/" exact component={SignIn} />

          <Route path='/admin*' component={Header} isPrivate />

          <Route path="/admin*" component={Sidebar} isPrivate />

          <Route exact path="/linkedin" component={LinkedInPopUp} />

          <Route path="/admin/" exact component={Department} isPrivate />

          <Route exact path="/admin/office" component={Office} isPrivate />

          <Route path="/admin/interest" exact component={Interest} isPrivate />

          <Route path="/admin/contenttype" exact component={ContentType} isPrivate />

          <Route path="/admin/segment" exact component={Segment} isPrivate />

          <Route path="/admin/question" exact component={Question} isPrivate />

          <Route path="/admin/user" exact component={User} isPrivate />

          <Route path="/admin/skill" exact component={Skill} isPrivate />

          <Route path="/admin/company" exact component={Company} isPrivate />

          <Route path="/admin/content" exact component={Content} isPrivate />

          <Route path="/admin/conquest" exact component={Conquest} isPrivate />

          <Route path="/admin/skill" exact component={Skill} isPrivate />

          <Route path="/admin/quadrant" exact component={Quadrant} isPrivate />

          <Route path="/admin/sublevel" exact component={Sublevel} isPrivate />

          <Route path="/admin/audience" exact component={Audience} isPrivate />

          <Route path="/admin/evaluation" exact component={Evaluation} isPrivate />

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

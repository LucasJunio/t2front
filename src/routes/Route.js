import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import { getToken } from '../store/modules/auth/authLocalStorage';
import {useSelector} from "react-redux";

// Private router
export default function RouteWrapper({
  component:
  Component,
  isPrivate,
  ...rest
}) {

  // const signed = useSelector(state => state.auth.signed)
  // const validation = getToken();
  let validation = useSelector(state => state.auth.token)

    if (!validation && isPrivate) {
      return <Redirect to="/" />;
    }

    if (validation && !isPrivate) {
      return <Redirect to="/client" />;
    }

    return (
      <Route
        {...rest}
        render={props => (
            <Component {...props} />
        )}
      />
    );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

import React from 'react';

import { Local } from './style';

import logo from '../../assets/images/logo-horizontal.png';


import { useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';


export default function Header() {

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Local>
      <div className="header">
        <div class="logo">
          <a href="/"><img src={logo} /></a>
        </div>


        <div >
          <button className="btn-logout" onClick={handleLogout}> sair</button>
        </div>

      </div>
    </Local>
  );
}

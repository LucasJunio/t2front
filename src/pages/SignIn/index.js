import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import FacebookLogin from 'react-facebook-login';

import { signInRequest, loginSocial } from '../../store/modules/auth/actions';

import { LinkedIn } from 'react-linkedin-oauth2';

import { Local } from './style';
import history from "../../services/history";


const schema = Yup.object().shape({
  email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

const initialState = {
  email: "",
  password: ""
};

export default function SignIn() {

  const [
    { email, password },
    setState
  ] = useState(initialState);

  const dispatch = useDispatch();
  var loading = useSelector(state => state.auth.loading);

  const onChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signInRequest(email, password));
    // history.push('/admin/');
  }

  const handleSuccess = (data) => {
    console.log("scope" + data)
    console.log('arguments ', arguments)
    dispatch(loginSocial());
  }

  const handleFailure = (error) => {
    console.log(error)
    console.log('error args ', arguments)
  }

  const callbackFb = (data) => {
    console.log(data)
    dispatch(loginSocial({email: data.email, id_provider: data.id, name: data.name, provider_type: 'facebook'}));
    console.log('callback fb ', arguments)
  }

  const onClickFb = () => {
    console.log('onClickFb fb ', arguments)
  }

  return (
      <>
        <Local>
          <div className="body-sign-in">

            <div className="content-right">
              <div class="wrapper fadeInDown">
                <div id="formContent">

                  <h2> Sign In </h2>


                  <div class="fadeIn first">
                    <form schema={schema} onSubmit={handleSubmit}>
                      <div className="form-group">

                        <input type="text" value={email} name="email" placeholder="Email" onChange={onChange}/>
                        <i className="mtrl-select"></i>
                      </div>
                      <div className="form-group">

                        <input type="password" value={password} name="password" onChange={onChange} placeholder="Senha"/>

                        <i className="mtrl-select"></i>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" defaultChecked /><i className="check-box"></i>Always Remember Me.
                        </label>
                      </div>
                      <div className="submit-btns">
                        <button type="submit"><span>{loading ? 'Carregando...' : 'Acessar'}</span></button> &nbsp;
                        <button type="button"><span>Register</span></button>
                      </div>
                    </form>
                  </div>
                  <div>
                    <LinkedIn
                        clientId="788z1fppedvvap"
                        onFailure={handleFailure}
                        onSuccess={handleSuccess}
                        redirectUri="http://uptome.com.br:3001/linkedin"
                        scope="r_emailaddress"
                        client_secret="L4iXQ0cV6hthwrMl"
                        renderElement={({ onClick, disabled }) => (
                            <button class="socialButton" type="submit" onClick={onClick} disabled={disabled}> Login com LinkedIn</button>
                        )}
                    >
                    </LinkedIn>
                    <FacebookLogin
                        appId="552507135420231"
                        autoLoad={false}
                        fields="name,email,picture"
                        textButton="Login com Facebook"
                        onClick={onClickFb}
                        callback={callbackFb} />
                  </div>

                  <div id="formFooter">
                    <a href="#">Forgot Password</a>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </Local>
      </>
  );
}

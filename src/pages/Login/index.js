import React, { useState } from 'react';

import { Container, LoginBox, WelcomeArea, LoginArea, LoginForm, ErrorMsg, LoadingArea, BlueButton, Label, Input } from './styles';
import { GlobalStyle } from '../../globalStyle';

import { BiLogInCircle, BiMessageAltX } from 'react-icons/bi';

import ReactLoading from 'react-loading';
import api from '../../services/api';

export default function Home({ history }) {

  const [errorMsg, setErrorMsg] = useState('Default error message.');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [inputLogin, setInputLogin] = useState('');
  const [inputPassword, setInputPassword] = useState('');


  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true)
    setHasError(false);

    const user_login = inputLogin;
    const user_password = inputPassword;

    await api.post('/login', { user_login, user_password }).then(response => {
      const { token } = response.data;
      localStorage.setItem('token', token);
      setIsLoading(false);
      history.push('/home');
    })
      .catch(err => {
        const msgerro = err.response.data.error;
        setIsLoading(false);
        setHasError(true);
        setErrorMsg(msgerro);
      });

  }

  document.title = "Seven Inc - Login"
  return (
    <Container>
      <GlobalStyle />
      <LoginBox>
        <WelcomeArea>
          <h1>Olá,</h1>
          <h2>bem-vindo(a) ao Seven Inc!</h2>
          <p>Para acessar o sistema e conhecer todas as funcionalidades, por favor realize o login.</p>
        </WelcomeArea>

        <LoginArea>
          <LoginForm onSubmit={handleSubmit}>
            <Label>Usuário</Label>
            <Input margin={"0px 5px 30px 5px"} type="text" value={inputLogin} onChange={e => setInputLogin(e.target.value)} />
            <Label>Senha</Label>
            <Input margin={"0px 5px 0px 5px"} type="password" value={inputPassword} onChange={e => setInputPassword(e.target.value)} />
            {isLoading && <LoadingArea><ReactLoading type='cylon' color={'#2948ff'} width={40} /></LoadingArea>}
            {hasError && <ErrorMsg><BiMessageAltX size={14} />&nbsp;{errorMsg}</ErrorMsg>}
            <BlueButton margin={"50px 5px 30px 5px"} type="submit" disabled={isLoading || inputLogin.length < 4 || inputPassword.length < 6}><BiLogInCircle />&nbsp;Entrar</BlueButton>
          </LoginForm>

        </LoginArea>
      </LoginBox>
    </Container>
  )
}

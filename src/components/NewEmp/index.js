import React, { useState } from 'react'

import { GlobalStyle } from '../../globalStyle';
import { Container, HeaderArea, BodyArea, LoginForm, Label, Input, LoadingArea, ErrorMsg, SuccessMsg, Button, CloseButton } from './styles';

import { BiMessageAltX, BiCheckCircle, BiCheck, BiX } from 'react-icons/bi';
import ReactLoading from 'react-loading';

export default function NewEmp({ hideNewArea }) {

  const [errorMsg, setErrorMsg] = useState('Default error message.');
  const [successMsg, setSuccessMsg] = useState('Default success message.');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(false);

  return (
    <Container>
      <HeaderArea>
        <CloseButton title="Cancelar" onClick={hideNewArea}><BiX /></CloseButton>
        <h1>Novo Funcionário</h1>
      </HeaderArea>
      <BodyArea>
        <LoginForm>

          <Label>Nome do funcionário <small>*</small></Label>
          <Input type='text' />

          <Label>Data de nascimento <small>*</small></Label>
          <Input type='date' />

          <Label>Salário <small>*</small></Label>
          <Input type='tel' />

          <Label>Cargo <small>*</small></Label>
          <Input type='text' />

          {hasError && <ErrorMsg><BiMessageAltX />&nbsp;{errorMsg}</ErrorMsg>}
          {hasSuccess && <SuccessMsg><BiCheckCircle />&nbsp;{successMsg}</SuccessMsg>}
          {isLoading && <LoadingArea><ReactLoading type='cylon' color={'#fff'} width={40} /></LoadingArea>}

          <Button type='submit' disabled={isLoading}><BiCheck />&nbsp;Adicionar</Button>

        </LoginForm>
      </BodyArea>
    </Container>
  )
}

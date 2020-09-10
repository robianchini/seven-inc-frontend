import React, { useState } from 'react'

import { GlobalStyle } from '../../globalStyle';
import { Container, HeaderArea, BodyArea, LoginForm, Label, Input, LoadingArea, ErrorMsg, SuccessMsg, Button, CloseButton } from './styles';
import api from '../../services/api';

import { BiMessageAltX, BiCheckCircle, BiCheck, BiX } from 'react-icons/bi';
import ReactLoading from 'react-loading';

export default function NewEmp(props) {

  const [errorMsg, setErrorMsg] = useState('Default error message.');
  const [successMsg, setSuccessMsg] = useState('Default success message.');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(false);

  const [inputName, setInputName] = useState('');
  const [inputBornDate, setInputBornDate] = useState('');
  const [inputSalary, setInputSalary] = useState('');
  const [inputPosition, setInputPosition] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setHasError(false);
    setHasSuccess(false);

    await api.post('/employees', {
      emp_name: inputName,
      emp_born_date: inputBornDate,
      emp_salary: parseFloat(inputSalary),
      emp_position: inputPosition,
    }).then(response => {
      const { success } = response.data;
      setSuccessMsg(success);
      setHasSuccess(true);
      setHasError(false);
      setInputName('');
      setInputBornDate('');
      setInputSalary('');
      setInputPosition('');
      props.loadData();
    })

    setIsLoading(false);
  }

  document.title = "Seven Inc - Novo Funcionário"


  return (
    <Container>
      <HeaderArea>
        <CloseButton title="Cancelar" onClick={props.hideNewArea}><BiX /></CloseButton>
        <h1>Novo Funcionário</h1>
      </HeaderArea>
      <BodyArea>
        <LoginForm onSubmit={handleSubmit}>

          <Label>Nome completo <small>*</small></Label>
          <Input type='text' value={inputName} onChange={value => setInputName(value.target.value)} />

          <Label>Data de nascimento <small>*</small></Label>
          <Input type='date' value={inputBornDate} onChange={value => setInputBornDate(value.target.value)} />

          <Label>Salário <small>*</small></Label>
          <Input type='tel' value={inputSalary} onChange={value => setInputSalary(value.target.value.replace(',', '.'))} />

          <Label>Cargo <small>*</small></Label>
          <Input type='text' value={inputPosition} onChange={value => setInputPosition(value.target.value)} />

          {hasError && <ErrorMsg><BiMessageAltX />&nbsp;{errorMsg}</ErrorMsg>}
          {hasSuccess && <SuccessMsg><BiCheckCircle />&nbsp;{successMsg}</SuccessMsg>}
          {isLoading && <LoadingArea><ReactLoading type='cylon' color={'#fff'} width={40} /></LoadingArea>}

          <Button
            type='submit'
            disabled={
              !inputName.includes(' ') ||
              isLoading ||
              inputName.length <= 5 ||
              inputBornDate.length < 8 ||
              inputSalary.length < 3 ||
              inputPosition.length < 3
            }
          >
            <BiCheck />&nbsp;Adicionar
            </Button>

        </LoginForm>
      </BodyArea>
    </Container>
  )
}

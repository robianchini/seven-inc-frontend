import React, { useState } from 'react'

import { GlobalStyle } from '../../globalStyle';
import { Container, HeaderArea, CardEmp, BodyArea, EditForm, Label, SalaryLabel, Input, LoadingArea, ErrorMsg, SuccessMsg, ButtonArea, Button, DeleteButton, CloseButton } from './styles';
import CardEmpAvatar from '../CardEmpAvatar';

import { BiMessageAltX, BiCheckCircle, BiCheck, BiX, BiEdit, BiSave, BiTrash, BiShieldX } from 'react-icons/bi';
import ReactLoading from 'react-loading';
import NumberFormat from 'react-number-format';


export default function EditEmp({ hideEditArea }) {

  const [errorMsg, setErrorMsg] = useState('Default error message.');
  const [successMsg, setSuccessMsg] = useState('Default success message.');
  const [hasError, setHasError] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

  const [nameInput, setNameInput] = useState('Rodrigo Bianchini');
  const [bornDateInput, setBornDateInput] = useState('1992-04-10');
  const [salaryInput, setSalaryInput] = useState('3000');
  const [positionInput, setPositionInput] = useState('Desenvolvedor');


  async function handleUpdate() {
    alert('upadated')
    setEditMode(false)
  }

  async function handleDelete() {
    alert('deleted')
    setDeleteMode(false)

  }

  return (
    <Container>
      <HeaderArea>
        <CloseButton title="Cancelar" onClick={hideEditArea}><BiX /></CloseButton>
        <CardEmpAvatar empName='Nome do Funcionário'></CardEmpAvatar>
        <CardEmp>
          <h1>Nome do Funcionário</h1>
          <h2>Cargo</h2>
        </CardEmp>
      </HeaderArea>
      <BodyArea>
        <EditForm>

          <Label>Nome do funcionário</Label>
          <Input type='text' disabled={!editMode} value={nameInput} />

          <Label>Data de nascimento</Label>
          <Input type='date' disabled={!editMode} value={bornDateInput} onChange={value => console.log(value)} />

          <Label>Salário</Label>
          {!editMode && <SalaryLabel>R$ <NumberFormat value={salaryInput} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} fixedDecimalScale={true} decimalScale={2} /></SalaryLabel>}
          {editMode && <Input type='tel' disabled={!editMode} value={salaryInput} />}

          <Label>Cargo</Label>
          <Input type='text' disabled={!editMode} value={positionInput} />

          {hasError && <ErrorMsg><BiMessageAltX />&nbsp;{errorMsg}</ErrorMsg>}
          {hasSuccess && <SuccessMsg><BiCheckCircle />&nbsp;{successMsg}</SuccessMsg>}
          {isLoading && <LoadingArea><ReactLoading type='cylon' color={'#fff'} width={40} /></LoadingArea>}

          <ButtonArea>

            {!editMode && !deleteMode && <Button disabled={isLoading} deleteMode={deleteMode} onClick={() => setEditMode(true)}><BiEdit />&nbsp;Editar</Button>}
            {editMode && !deleteMode && <Button disabled={isLoading} deleteMode={deleteMode} onClick={() => handleUpdate()}><BiSave />&nbsp;Salvar</Button>}
            {!editMode && deleteMode && <Button disabled={isLoading} deleteMode={deleteMode} onClick={() => handleDelete()}> <BiTrash /> &nbsp;Confirmar</Button>}

            {!editMode && !deleteMode && <DeleteButton disabled={isLoading} onClick={() => setDeleteMode(true)}><BiTrash />&nbsp;Excluir</DeleteButton>}
            {editMode && !deleteMode && <DeleteButton disabled={isLoading} onClick={() => setEditMode(false)}><BiX />&nbsp;Cancelar</DeleteButton>}
            {!editMode && deleteMode && <DeleteButton disabled={isLoading} onClick={() => setDeleteMode(false)}><BiX />&nbsp;Cancelar</DeleteButton>}
          </ButtonArea>


        </EditForm>
      </BodyArea>
    </Container >
  )
}

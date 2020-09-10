import React, { useState, useEffect } from 'react'

import { GlobalStyle } from '../../globalStyle';
import { Container, HeaderArea, CardEmp, BodyArea, EditForm, Label, SalaryLabel, Input, LoadingArea, ErrorMsg, SuccessMsg, ButtonArea, Button, DeleteButton, CloseButton, EmpAvatar } from './styles';

import { BiMessageAltX, BiCheckCircle, BiCheck, BiX, BiEdit, BiSave, BiTrash, BiShieldX } from 'react-icons/bi';
import ReactLoading from 'react-loading';
import NumberFormat from 'react-number-format';

import api from '../../services/api';

export default function EditEmp(props) {

  const [errorMsg, setErrorMsg] = useState('Default error message.');
  const [successMsg, setSuccessMsg] = useState('Default success message.');
  const [hasError, setHasError] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const [empInitials, setEmpInitials] = useState('');
  const [empName, setEmpName] = useState('');
  const [empPosition, setEmpPosition] = useState('');

  const [nameInput, setNameInput] = useState('');
  const [bornDateInput, setBornDateInput] = useState('');
  const [salaryInput, setSalaryInput] = useState('');
  const [positionInput, setPositionInput] = useState('');


  useEffect(() => { loadData() }, []);

  async function handleUpdate() {

    const id = props.empId;
    await api.put(`/employees/${id}`, {
      emp_name: nameInput,
      emp_born_date: bornDateInput,
      emp_salary: parseFloat(salaryInput),
      emp_position: positionInput,
    }).then(response => {
      setHasError(false);
      setHasSuccess(true);
      setSuccessMsg(response.data.success);
      setEditMode(false);
      setIsLoading(false);
      loadData();
      props.loadData();
    })
      .catch(err => {
        const msgerro = err.response.data.error;
        setIsLoading(false);
        setHasError(true);
        setErrorMsg(msgerro);
      });
  }

  async function handleDelete() {
    setIsLoading(true)
    const id = props.empId;
    await api.delete(`/employees/${id}`).then(response => {
      setHasError(false);
      setHasSuccess(true);
      setSuccessMsg(response.data.success);
      setDeleteMode(false);
      setIsLoading(false);
      setIsDeleted(true);
      props.loadData();
    })
      .catch(err => {
        const msgerro = err.response.data.error;
        setIsLoading(false);
        setHasError(true);
        setErrorMsg(msgerro);
      });
  }

  async function loadData() {
    setIsLoading(true);
    setIsDeleted(true);
    const id = props.empId;
    const response = await api.get(`/employees/${id}`);
    const loadedEmp = response.data;

    const formatedInitials = loadedEmp.emp_name.split(' ')[0].substr(0, 1) + loadedEmp.emp_name.split(' ')[1].substr(0, 1)
    setEmpInitials(formatedInitials);

    setEmpName(loadedEmp.emp_name);
    setEmpPosition(loadedEmp.emp_position);

    setNameInput(loadedEmp.emp_name);
    setBornDateInput(loadedEmp.emp_born_date);
    setSalaryInput(loadedEmp.emp_salary);
    setPositionInput(loadedEmp.emp_position);

    setIsDeleted(false);
    setIsLoading(false);

    document.title = `Seven Inc - Editar ${loadedEmp.emp_name}`

  }

  return (
    <Container>
      <HeaderArea>
        <CloseButton title="Cancelar" onClick={props.hideEditArea}><BiX /></CloseButton>
        <EmpAvatar><h1>{empInitials}</h1></EmpAvatar>
        <CardEmp>
          <h1>{empName}</h1>
          <h2>{empPosition}</h2>
        </CardEmp>
      </HeaderArea>
      <BodyArea>
        <EditForm>

          <Label>Nome completo</Label>
          <Input type='text' disabled={!editMode} defaultValue={nameInput} onChange={value => setNameInput(value.target.value)} />

          <Label>Data de nascimento</Label>
          <Input type='date' disabled={!editMode} defaultValue={bornDateInput} onChange={value => setBornDateInput(value.target.value)} />

          <Label>Salário</Label>
          {editMode && <Input type='tel' disabled={!editMode} defaultValue={salaryInput} onChange={value => setSalaryInput(value.target.value.replace(',', '.'))} />}
          {!editMode && <SalaryLabel>R$ {salaryInput}</SalaryLabel>}

          <Label>Cargo</Label>
          <Input type='text' disabled={!editMode} defaultValue={positionInput} onChange={value => setPositionInput(value.target.value)} />

          {hasError && <ErrorMsg><BiMessageAltX />&nbsp;{errorMsg}</ErrorMsg>}
          {hasSuccess && <SuccessMsg><BiCheckCircle />&nbsp;{successMsg}</SuccessMsg>}
          {isLoading && <LoadingArea><ReactLoading type='cylon' color={'#fff'} width={40} /></LoadingArea>}

          <ButtonArea>
            {!editMode && !deleteMode && <Button disabled={isLoading || isDeleted} deleteMode={deleteMode} onClick={() => setEditMode(true)}><BiEdit />&nbsp;Editar</Button>}
            {editMode && !deleteMode && <Button disabled={isLoading} deleteMode={deleteMode} onClick={() => handleUpdate()}><BiSave />&nbsp;Salvar</Button>}
            {!editMode && deleteMode && <Button disabled={isLoading} deleteMode={deleteMode} onClick={() => handleDelete()}> <BiTrash /> &nbsp;Confirmar</Button>}

            {!editMode && !deleteMode && <DeleteButton disabled={isLoading || isDeleted} onClick={() => setDeleteMode(true)}><BiTrash />&nbsp;Excluir</DeleteButton>}
            {editMode && !deleteMode && <DeleteButton disabled={isLoading} onClick={() => setEditMode(false)}><BiX />&nbsp;Cancelar</DeleteButton>}
            {!editMode && deleteMode && <DeleteButton disabled={isLoading} onClick={() => setDeleteMode(false)}><BiX />&nbsp;Cancelar</DeleteButton>}
          </ButtonArea>


        </EditForm>
      </BodyArea>
    </Container >
  )
}

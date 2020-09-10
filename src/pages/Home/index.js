import React, { useState, useEffect } from 'react'

import { GlobalStyle } from '../../globalStyle';
import { Container, MainBox, NewButton, NewArea, ListArea, ListBox, EditArea, LoadingArea, TipText, NoEmpText, WelcomeTxt } from './styles';

import NumberFormat from 'react-number-format';
import ReactLoading from 'react-loading';
import moment from 'moment';
import 'moment/locale/pt-br';

import { RiUserAddLine } from 'react-icons/ri';

import NewEmp from '../../components/NewEmp';
import EditEmp from '../../components/EditEmp';
import api from '../../services/api';

export default function Home({ history }) {

  const [isLoading, setIsLoading] = useState(false);
  const [newAreaVisible, setNewAreaVisible] = useState(false);
  const [editAreaVisible, setEditAreaVisible] = useState(false);
  const [empList, setEmpList] = useState([]);
  const [empId, setEmpId] = useState([]);
  const [loggedUser, setLoggedUser] = useState({});

  useEffect(() => { loadData() }, []);

  async function loadData() {
    setIsLoading(true)
    const loggedId = await localStorage.getItem('id');

    const reqLoggedUser = await api.get(`users/${loggedId}`)
    setLoggedUser(reqLoggedUser.data);

    const response = await api.get('/employees');
    setEmpList(response.data.employeesList);

    setIsLoading(false)
  }

  function hideNewArea() {
    setNewAreaVisible(false)
  }

  function hideEditArea() {
    setEditAreaVisible(false)
  }

  function openEditArea(id) {
    setEmpId(id);
    setEditAreaVisible(true);
  }

  function handleLogout() {
    localStorage.clear('token');
    localStorage.clear('id');
    history.push('/');
  };

  document.title = "Seven Inc"

  return (
    <Container>
      <GlobalStyle />
      <MainBox>
        {newAreaVisible && <NewArea><NewEmp hideNewArea={hideNewArea} loadData={loadData} /></NewArea>}
        <ListArea>
          <WelcomeTxt>
            {!editAreaVisible && !newAreaVisible && <h1>Olá, {loggedUser.user_name}!</h1>}
            {!editAreaVisible && !newAreaVisible && <h2 onClick={() => handleLogout()}>Sair</h2>}
          </WelcomeTxt>
          <ListBox hideTable={empList.length === 0} setOpacity={newAreaVisible || editAreaVisible ? true : false}>
            <h1>Meus Funcionários ({empList.length})</h1>
            {isLoading && <LoadingArea><ReactLoading type='cylon' color={'#2948ff'} width={50} /></LoadingArea>}
            <table>
              <thead>
                <tr>
                  <th valign="bottom">Nome</th>
                  <th valign="bottom">Data de Nascimento</th>
                  <th valign="bottom">Salário</th>
                  <th valign="bottom">Cargo</th>
                </tr>
              </thead>
              <tbody>
                {empList.map((emp) => (
                  <tr onClick={() => openEditArea(emp.emp_id)} key={emp.emp_id}>
                    <td valign="middle" width={'25%'}>{emp.emp_name}</td>
                    <td valign="middle" width={'25%'}>{moment(emp.emp_born_date).format('DD/MM/YYYY')}</td>
                    <td valign="middle" width={'25%'}>R$ <NumberFormat value={emp.emp_salary} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} fixedDecimalScale={true} decimalScale={2} /></td>
                    <td valign="middle" width={'25%'}>{emp.emp_position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {empList.length === 0 && <NoEmpText>Nenhum funcionário foi encontrado. <span onClick={() => setNewAreaVisible(true)}>Cadastrar o primeiro</span>?</NoEmpText>}
          </ListBox>

          {!newAreaVisible && !editAreaVisible && <NewButton title="Cadastrar novo funcionário" onClick={() => setNewAreaVisible(true)}><RiUserAddLine /></NewButton>}
          {!editAreaVisible && !newAreaVisible && empList.length > 0 && <TipText>Dica: para editar um funcionário, clique sobre ele!</TipText>}

        </ListArea>

        {editAreaVisible && <EditArea><EditEmp hideEditArea={hideEditArea} loadData={loadData} empId={empId} /></EditArea>}

      </MainBox>
    </Container >
  )
}

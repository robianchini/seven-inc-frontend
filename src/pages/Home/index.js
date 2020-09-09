import React, { useState } from 'react'

import { GlobalStyle } from '../../globalStyle';
import { Container, MainBox, NewButton, NewArea, ListArea, EditArea } from './styles';

import { RiUserAddLine } from 'react-icons/ri';

import NewEmp from '../../components/NewEmp';
import EditEmp from '../../components/EditEmp';

export default function Home() {

  const [isLoading, setIsLoading] = useState(false);
  const [newAreaVisible, setNewAreaVisible] = useState(false);
  const [editAreaVisible, setEditAreaVisible] = useState(false);

  function hideNewArea() {
    setNewAreaVisible(false)
  }

  function hideEditArea() {
    setEditAreaVisible(false)
  }


  document.title = "Seven Inc"

  return (
    <Container>
      <GlobalStyle />
      <MainBox>

        {newAreaVisible && <NewArea><NewEmp hideNewArea={hideNewArea} /></NewArea>}
        <ListArea>
          <NewButton title="Cadastrar novo funcionário" onClick={() => setNewAreaVisible(true)}><RiUserAddLine /></NewButton>
          {/* <button onClick={() => setEditAreaVisible(!editAreaVisible)}>edita</button> */}
        </ListArea>
        {editAreaVisible && <EditArea><EditEmp hideEditArea={hideEditArea} /></EditArea>}

      </MainBox>
    </Container>
  )
}

import React, { useState, useEffect } from 'react';

import { Avatar } from './styles';


function CardEmpAvatar(props) {

  const [name, setName] = useState('Nome do Funcionârio');

  useEffect(() => { loadName() }, []);

  function loadName() {
    const receivedName = props.empName;
    const formattedName = receivedName.split(' ')[0].substr(0, 1) + receivedName.split(' ')[1].substr(0, 1);
    setName(formattedName)
  }


  return (
    <Avatar>
      <h1>{name}</h1>
    </Avatar>
  );
}

export default CardEmpAvatar;
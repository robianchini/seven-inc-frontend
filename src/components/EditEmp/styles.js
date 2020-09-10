import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-content: flex-start;
`

export const HeaderArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 20%;
  width: 100%;
  border-bottom: 1px solid #fafafa;
  padding-top: 15px;
`

export const CardEmp = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  h1{
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #222;
    font-size: 17px;
    margin: 0px;
    width: 180px;
  }

  h2{
    font-family: 'Roboto', sans-serif;
    color: #222;
    font-size: 13px;
    margin: 0px;
    width: 180px;
    font-weight: normal;
  }
`

export const BodyArea = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 80%;
  width: 100%;
  padding-top: 30px;
`

export const EditForm = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
`

export const Label = styled.label`
  font-size: 12px;
  color: #34495e;
`

export const SalaryLabel = styled.label`
  font-size: 12px;
  color: #95a5a6;
  padding: 5px 10px 5px 10px;
  margin-bottom: 15px;
  `

export const Input = styled.input`
  background-color: transparent;
  height: 20px;
  width: 180px;
  margin-bottom: 15px;
  padding: 5px 10px 5px 10px;
  font-size: 12px;
  color: #a1aeff;
  border-color: #a1aeff;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  transition: ease-in-out 0.4s;
  outline: none;
  font-family: 'Roboto', sans-serif;

  &::-webkit-calendar-picker-indicator{
    color: #a1aeff
  }

  &:focus{
    color: #a1aeff;
    border-color: #a1aeff;
    font-size: 13px;
  }

  &:disabled{
    color: #95a5a6;
    border: none;
    font-size: 13px;
  }

  @media(max-width: 700px) {
    width: 200px;
  }
`

export const LoadingArea = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 10px;
`

export const ErrorMsg = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  color: #ffb8b8;
  font-size: 12px;
`

export const SuccessMsg = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  color: #2ecc71;
  font-size: 12px;
`

export const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 100%;
  max-width: 300px;
  border: none;
  background-color: ${props => props.deleteMode === true ? "#e74c3c" : "#396afc"};
  font-size: 13px;
  color: #fff;
  margin-top: 30px;
  margin-right: 5px;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  span{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover{
    opacity: 0.9;
  }
  &:disabled{
    opacity: 0.7;
    cursor: default;
  }
`

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 100%;
  max-width: 300px;
  border: none;
  background-color: #396afc;
  font-size: 13px;
  color: #fff;
  margin-top: 30px;
  margin-right: 5px;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  span{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover{
    opacity: 0.9;
  }
  &:disabled{
    opacity: 0.7;
    cursor: default;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 25px;
  border: none;
  color: #396afc;
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
  border-radius: 100%;
  outline: none;
  cursor: pointer;
  padding: 0px;

  &:hover{
    opacity: 0.9;
  }
`

export const EmpAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 43px;
  width: 43px;
  margin-right: 10px; 
  border-radius: 100%;
  background: -webkit-linear-gradient(to bottom, #396afc, #2948ff);
  background: linear-gradient(to bottom, #396afc, #2948ff);

  h1{
    font-weight: bolder;
    color: #fff;
    font-size: 18px;
    margin: 0px;
    text-transform: uppercase;
  }
`
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`

export const LoginBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
  width: 60%;
  height: 450px;
  margin-top: 100px;

  @media(max-width: 1000px) {
    width: 95%;
    margin-top: 20px;
    min-height: 650px;
  }
`

export const WelcomeArea = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 25px;
  width: 40%;

  background: -webkit-linear-gradient(to bottom, #2948ff, #396afc); 
  background: linear-gradient(to bottom, #2948ff, #396afc); 

  h1{
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    margin: 2px 5px;
  }

  h2{
    color: #fff;
    font-size: 21px;
    font-weight: bold;
    margin: 2px 5px;
  }

  p{
    color: #fff;
    font-size: 15px;
    font-weight: normal;
    margin: 20px 5px;

  }

`

export const LoginArea = styled.div`
  width: 60%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 30px;
`

export const LoginForm = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const ErrorMsg = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 30px 0px 0px 0px;
    color: tomato;
    font-size: 12px;
    transition: ease-in-out 0.3s;
`

export const LoadingArea = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
      width: 100%;
    height: 10px;
    padding-top: 10px;
`

export const BlueButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2948ff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #fff;
  height: 40px;
  width: 300px;
  margin: ${props => props.margin};
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;

  &:hover{
    opacity: 0.95;
  }
  &:disabled{
    cursor: default;
    opacity: 0.7;
  }

  @media(max-width: 700px) {
    width: 230px;
  }
`

export const Label = styled.label`
  font-size: 12px;
  color: #396afc;
`

export const Input = styled.input`
  background-color: transparent;
  height: 30px;
  width: 300px;
  margin: ${props => props.margin};
  padding: 5px 10px 5px 10px;
  font-size: 14px;
  color: #a1aeff;
  border-color: #eee;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  transition: ease-in-out 0.3s;
  outline: none;

  &:focus{
    color: #2948ff;
    border-color: #2948ff;
    font-size: 16px;
  }

  @media(max-width: 700px) {
    width: 200px;
  }

`
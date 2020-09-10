import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-content: flex-start;
  background: -webkit-linear-gradient(to bottom, #396afc, #2948ff);
  background: linear-gradient(to bottom, #396afc, #2948ff);
`

export const HeaderArea = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 100%;
  
  h1{
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #fff;
    font-size: 22px;
  }
`

export const BodyArea = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 80%;
  width: 100%;
`

export const LoginForm = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
`

export const Label = styled.label`
  font-size: 12px;
  color: #d4daff;
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

  &:focus{
    color: #fff;
    border-color: #fff;
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
  color: #3ae374;
  font-size: 12px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 100%;
  max-width: 300px;
  border: none;
  color: #396afc;
  font-size: 13px;
  background-color: #fff;
  margin-top: 30px;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
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
  top: 2px;
  right: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 25px;
  border: none;
  color: #fff;
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


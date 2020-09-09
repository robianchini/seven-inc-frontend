import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;
`

export const MainBox = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  width: 70%;
  height: 500px;
  margin-top: 70px;

  @media(max-width: 850px) {
    width: 85%;
    margin-top: 20px;
    min-height: 650px;
  }

  @media(max-width: 800px) {
    width: 95%;
    margin-top: 20px;
    min-height: 650px;
    flex-direction: column;
  }
`

export const NewArea = styled.div`
  height: 100%;
  width: 40%;
  /* display: none; */
  border-right: 1px solid #eee;

  @media(max-width: 800px) {
    border-bottom: 1px solid #eee;
    border-right: none;
    width: 100%;
  }
`

export const ListArea = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

export const EditArea = styled.div`
  height: 100%;
  width: 40%;
  border-left: 1px solid #eee;

  @media(max-width: 600px) {
    border-top: 1px solid #eee;
    border-left: none;
    width: 100%;
  }
`

export const NewButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background: #2948ff;
  color: #fff;
  font-size: 25px;
  border: none;
  outline: none;
  cursor: pointer;
  bottom: 10px;
  left: 10px;

  &:hover{
    opacity: 0.9;
  }
`
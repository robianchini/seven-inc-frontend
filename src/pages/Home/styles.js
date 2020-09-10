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
  border-top: 3px solid #396afc;

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
    min-height: 500px;

  }
`

export const ListArea = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

export const ListBox = styled.div`
  opacity: ${props => props.setOpacity === true ? '0.1' : '1'};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 40px;
  overflow-y: scroll;
  max-height: 400px;

  @media(max-width: 600px) {
    margin: 5px;
  }

  h1{
    width: 100%;
    font-size: 20px;
    color: #34495e;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;

    @media(max-width: 600px) {
      font-size: 13px;
      width: 50%;
    }
  }

  table{
    width: 100%;
    display: ${props => props.hideTable && 'none'};
  }

  thead{
    th{
      text-align: left;
      height: 18px;
      padding: 5px;
      color: #34495e;
      font-size: 14px;

      @media(max-width: 600px) {
        font-size: 12px;
      }
    }
  }

  tbody{
    tr{
      background: ${props => props.selected === true ? 'tomato' : 'transparent'};
      &:hover{
        cursor: pointer;
        background-color: #fcfcfc;
      }
    }
    td{
      height: 18px;
      padding: 5px;
      color: #7f8c8d;
      font-size: 13px;

      @media(max-width: 600px) {
        font-size: 12px;
      }
    }
  }

`

export const EditArea = styled.div`
  height: 100%;
  width: 40%;
  border-left: 1px solid #eee;

  @media(max-width: 600px) {
    border-top: 1px solid #eee;
    border-left: none;
    width: 100%;
    min-height: 500px;
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
  transition: ease-in-out 0.2s;
  box-shadow: 1px 2px 3px 0px rgba(211,211,211,1);

  &:hover{
    opacity: 0.9;
    width: 37px;
    height: 37px;
  }
`

export const LoadingArea = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
      width: 100%;
    height: 10px;
    padding-top: 10px;
`

export const TipText = styled.p`
  position: absolute;
  bottom: 0px;
  right: 15px;
  font-size: 10px;
  font-style: italic;
  color: #575757;
`

export const NoEmpText = styled.p`
  font-size: 15px;
  font-weight: 100;
  color: #575757;
  width: 100%;
  text-align: center;
  margin-top: 60px;
  opacity: 0.8;

  @media(max-width: 600px) {
      font-size: 13px;
    }

  span{
    cursor: pointer;
    color: #4c92ec;

    &:hover{
      opacity: 0.85;
    }
  }
`

export const WelcomeTxt = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 40px;
  top: 15px;
  text-align: right;

  @media(max-width: 600px) {
    right: 20px;
  }

  h1{
    color: #575757;
    font-size: 13px;
    margin: 0px;
    @media(max-width: 600px) {
      font-size: 10px;
    }
  }

  h2{
    margin: 0px;
    cursor: pointer;
    color: #4c92ec;
    font-size: 12px;
    @media(max-width: 600px) {
      font-size: 10px;
    }
    &:hover{
      opacity: 0.85;
    }
  }
`
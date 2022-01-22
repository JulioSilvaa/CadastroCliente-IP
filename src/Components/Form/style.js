import styled from "styled-components";

export const ContainerForm = styled.div`
  max-width: 80%;
  height: 400px;
  padding: 10px;
  margin: 0 auto;
  background: #ededed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  form {
    margin: 30px auto;
    max-width: 400px;
    height: 200px;

    input {
      border: none;
    }
  }
`;

export const InputName = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  input {
    max-width: 448px;
    height: 25px;
  }
`;
export const ContainerContatoProfissao = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  input {
    width: 190px;
    height: 25px;
  }
`;
export const InputProfissao = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const InputContato = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const ContainerIp = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  button {
    margin-top: 20px;
    width: 120px;
    height: 25px;
    background-color: #00d9d0;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const InputIP = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  input {
    width: 250px;
    height: 25px;
    &:hover {
      cursor: no-drop;
    }
  }
`;

export const ContainerButtons = styled.div`
  max-width: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 60px auto;

  button {
    width: 100px;
    height: 20px;
    background-color: #0b1632;
    color: #fff;
    font-weight: 200;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
`;

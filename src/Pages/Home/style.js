import styled from "styled-components";

export const ContainerHeader = styled.div`
  background-color: #0b1632;
  display: flex;
  align-items: center;

  img {
    width: 88px;
    height: 96px;
    margin-left: 20px;
  }
`;

export const TitleHeader = styled.div`
  h2 {
    color: #fff;
  }
  p {
    color: #04d9cc;
  }
`;

export const ContainerForm = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
  align-items: center;
  max-width: 1000px;
  height: 460px;
  margin: 0 auto;
  background: #ededed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  form {
    margin: 40px auto;
    max-width: 400px;
    height: 300px;
  }
`;

export const InputNome = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  input {
    max-width: 541px;
    height: 24px;
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
  }
`;
export const InputIP = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  input {
    width: 250px;
    height: 25px;
  }
`;

export const ContainerButtons = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

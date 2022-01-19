
import React from "react";
import {
  ContainerHeader,
  TitleHeader,
  ContainerForm,
  InputName,
  ContainerContatoProfissao,
  InputProfissao,
  InputContato,
  ContainerIp,
  InputIP,
  ContainerButtons,


} from "./style";

export const HomePage = () => {
  return (
    <>
      <ContainerHeader>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E0BAQG_4Egrr-BR5Q/company-logo_200_200/0/1636209936648?e=1650499200&v=beta&t=rqoUArNoXjEQmWkGTePEqyu5lMt_MOCK1q8_GVJShqc"
          alt="logo da empresa"
        />
        <TitleHeader>
          <h2>Cowala</h2>
          <p>Software</p>
        </TitleHeader>
      </ContainerHeader>

      <ContainerForm>
    
          <form>
            <InputName>
              <label>Nome:</label>
              <input type="text" />
            </InputName>
            <ContainerContatoProfissao>
              <InputProfissao>
                <label>Profissão:</label>
                <input type="text" />
              </InputProfissao>
              <InputContato>
                <label>Celular:</label>
                <input type="text" />
              </InputContato>
            </ContainerContatoProfissao>
            <ContainerIp>
              <InputIP>
                <label>Meu IP:</label>
                <input
                  type="text"
                  type="number"
                  placeholder="Preenchimento Automático"
                  readOnly
                />
              </InputIP>
              <div>
                <button>ENCONTRAR IP</button>
              </div>
            </ContainerIp>
            <ContainerButtons>
              <button>SALVAR</button>
              <button>LIMPAR</button>
            </ContainerButtons>
          </form>
     
      </ContainerForm>
    </>
  );
};

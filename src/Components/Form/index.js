import React, { useState } from "react";
import {
  ContainerForm,
  InputName,
  ContainerContatoProfissao,
  InputProfissao,
  InputContato,
  ContainerIp,
  InputIP,
  ContainerButtons,
} from "./style";

export const Form = ({ getNewIP }) => {
  //estado que agrupa os valores dos inputs em um único Obejto
  const [form, setForm] = useState({
    nome: "",
    profession: "",
    cell: "",
    ip: "",
  });

  // função que realiza a chamda para a API e salva os dados do form em Localstorage, junto ao prevent Default para impedir a atualização do form
  const enviarDados = (e) => {
    e.preventDefault();
    getNewIP();
  };

  //unificando as funções para pegar os valores do Input e adionar no estado do form
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Container com todos dos inputs do form */}
      <ContainerForm>
        <form onSubmit={enviarDados}>
          <InputName>
            <label>Nome:</label>
            <input
              type="text"
              value={form.nome}
              onChange={onChange}
              name="nome"
            />
          </InputName>
          <ContainerContatoProfissao>
            <InputProfissao>
              <label>Profissão:</label>
              <input
                type="text"
                value={form.profissao}
                onChange={onChange}
                name="profession"
              />
            </InputProfissao>
            <InputContato>
              <label>Celular:</label>
              <input
                type="text"
                value={form.celular}
                onChange={onChange}
                name="cell"
              />
            </InputContato>
          </ContainerContatoProfissao>
          <ContainerIp>
            <InputIP>
              <label>Meu IP:</label>
              <input
                onChange={onChange}
                value={form.ip}
                type="number"
                placeholder="Preenchimento Automático"
                readOnly
                name="ip"
              />
            </InputIP>
            <div>
              <button onClick={enviarDados}>ENCONTRAR IP</button>
            </div>
          </ContainerIp>
        </form>
        <ContainerButtons>
          <button>SALVAR</button>
          <button>LIMPAR</button>
        </ContainerButtons>
      </ContainerForm>
    </div>
  );
};

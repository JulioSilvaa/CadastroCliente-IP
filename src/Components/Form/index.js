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

export const Form = ({ getNewIP, ip }) => {
  //estado que agrupa os valores dos inputs em um único Obejto
  const [form, setForm] = useState({
    name: "",
    profession: "",
    cell: "",
  });

  //unificando as funções para pegar os valores do Input e adionar no estado do form
  const onChange = (e) => {
    //variavel NAME que recebe o parametro name do input o qual foi alterado
    //variavel VALUE que recebe o parametro value do input que tambem foi alterado
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // função que realiza a chamada para a API e salva os dados do form em Localstorage, junto ao prevent Default para impedir a atualização do form
  const sendData = (e) => {
    e.preventDefault();
    getNewIP();
  };

  return (
    <div>
      {/* Container com todos dos inputs do form */}
      <ContainerForm>
        <form onSubmit={sendData}>
          <InputName>
            <label>Nome:</label>
            <input
              type="text"
              // required
              value={form.name}
              onChange={onChange}
              name="name"
            />
          </InputName>
          <ContainerContatoProfissao>
            <InputProfissao>
              <label>Profissão:</label>
              <input
                type="text"
                // required
                value={form.profession}
                onChange={onChange}
                name="profession"
              />
            </InputProfissao>
            <InputContato>
              <label>Celular:</label>
              <input
                type="text"
                // required
                value={form.cell}
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
                // required
                value={ip}
                type="text"
                placeholder="Preenchimento Automático"
                readOnly
              />
            </InputIP>
            <div>
              <button>ENCONTRAR IP</button>
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

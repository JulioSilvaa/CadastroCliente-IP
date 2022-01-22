import React, { useEffect, useState } from "react";

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
    getNewIP();
    e.preventDefault();
  };

  // função que converte os dados do form e salva-os no localStorage, realizo um spread do form e adiciono o IP
  const saveData = () => {
    localStorage.setItem("form", JSON.stringify({ ...form, ip: ip }));
  };

  // useEffect verificando se existe algum dado no localStorage para renderizar dentro do form
  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("form"));
    if (local) {
      setForm(local);
    }
  }, []);

  // função que apaga os dados do localStorage e limpa os campos do form
  const cleanFields = () => {
    localStorage.clear();
    document.location.reload();
  };

  return (
    <ContainerForm>
      {/* Container com todos dos inputs do form */}
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
              name="ip"
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
        {/* chama a função que salva os dados  */}
        <button onClick={saveData}>SALVAR</button>
        {/* Remove dos dados do localStorage */}
        <button onClick={cleanFields}>LIMPAR</button>
      </ContainerButtons>
    </ContainerForm>
  );
};

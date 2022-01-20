import React, { useState } from "react";
import axios from "axios";
import { BaseURL } from "./../../Constants/BaseUrl";
import { Form } from "../../Components/Form";
import { Header } from "../../Components/Header";

export const HomePage = () => {
  //estado para adicionar o response da API
  const [ip, setip] = useState("");

  // Função responsável por bater na API e adicionar a resposta no estado IP
  const getNewIP = () => {
    axios
      .get(`${BaseURL}`)
      .then((res) => {
        //adicionando o retirno da API no estado IP
        setip(res.data);
      })
      .catch((err) => {
        // caso algo der errado será emitido um alert com a mensagem de erro.
        alert(err.message);
      });
  };

  return (
    <>
      {/* componente Header */}
      <Header />
      {/* component form, recebendo como props a função que chama a API, e o estado IP */}
      <Form getNewIP={getNewIP} ip={ip} />
    </>
  );
};

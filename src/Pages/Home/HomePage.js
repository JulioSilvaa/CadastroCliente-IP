import React, { useEffect } from "react";
import axios from "axios";
import { Form } from "../../Components/Form";
import { Header } from "../../Components/Header";
import { BaseURL } from "./../../Constants/BaseUrl";

export const HomePage = () => {

  
  const getNewIP = () => {
    axios
      .get(`${BaseURL}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <Form getNewIP={getNewIP} />
    </>
  );
};

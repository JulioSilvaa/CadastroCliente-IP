import { useState } from "react";
  // OBS não está sendo usado !! avaliar o uso depois 



//Hook que trata os dados do Formulário
const useForm = (initialState) => {
  //estado que agrupa os valores dos inputs em um único Obejto
  const [form, setForm] = useState(initialState);

  //unificando as funções para pegar os valores do Input e adionar no estado do form
  const onChange = (e) => {
    //variavel NAME que recebe o parametro name do input o qual foi alterado
    //variavel VALUE que recebe o parametro value do input que tambem foi alterado
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // função que limpa os inputs após salva-los no localStorage
  const cleanFields = () => {
    setForm(initialState);
  };
  //retornando o estado FORM, e a função ONCHANGE
  return [form, onChange, cleanFields, setForm];
};
export default useForm;

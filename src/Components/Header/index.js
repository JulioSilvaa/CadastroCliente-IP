import React from "react";
import { ContainerHeader, TitleHeader } from "./style";

export const Header = () => {
  return (
    <div>
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
    </div>
  );
};

import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../context/context";

export default function Docs() {
  const { t } = useTranslation();
  const [theme] = useContext(ThemeContext);
  return (
    <div
      className={`flex flex-wrap gap-20 justify-center items-center flex-col`}
    >
      <div className="flex flex-col flex-wrap gap-20 justify-center mt-[24px]  items-center">
        <h2 className="font-bold">{t("importCompany")}</h2>
        <div className="flex gap-20 justify-center flex-wrap">
          <img src="/path.png" alt="" />
          <img src="/path.png" alt="" />
          <img src="/path.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col flex-wrap gap-20 justify-center mt-[24px] items-center">
        <h2 className="font-bold">{t("exportCompany")}</h2>
        <div className="flex gap-20 justify-center flex-wrap">
          <img src="/path.png" alt="" />
          <img src="/path.png" alt="" />
          <img src="/path.png" alt="" />
        </div>
      </div>
    </div>
  );
}

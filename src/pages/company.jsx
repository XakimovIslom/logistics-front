import { ArrowLeftOutlined } from "@ant-design/icons";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function CompanyList({ companyType }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex items-center justify-between">
        <ArrowLeftOutlined
          onClick={() => navigate("/")}
          className="cursor-pointer text-[25px]"
        />
        <h1 className="font-bold">{t(companyType)}</h1>
        <p></p>
      </div>
    </div>
  );
}

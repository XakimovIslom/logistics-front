import Sider from "antd/es/layout/Sider";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="demo-logo-vertical bg-[red]" />
      <Menu
        onClick={({ key }) => navigate(key)}
        theme="dark"
        items={[
          { label: t("importCompany"), key: "/import" },
          { label: t("exportCompany"), key: "/export" },
        ]}
      ></Menu>
    </Sider>
  );
}

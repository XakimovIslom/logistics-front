import { MoonOutlined, SunOutlined, UserOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../context/context";
import { useNavigate } from "react-router-dom";
export default function Nav() {
  const { i18n } = useTranslation();
  const [theme, toggleTheme, handleLogin] = useContext(ThemeContext);
  const [showLogout, setShowlogout] = useState(false);
  const toggleLogout = () => {
    setShowlogout((prev) => !prev);
  };
  const navigate = useNavigate();
  let username = localStorage.getItem("username");
  const capitalizeFirstLetter = (string) => {
    return string?.charAt(0)?.toUpperCase() + string?.slice(1);
  };

  return (
    <Header
      className={` ${
        theme && "dark:bg-[#092635]"
      } p-0 bg-[#e0e0e0] shadow-md flex justify-between`}
    >
      <div></div>
      <div className="flex items-center justify-end pr-5 gap-5">
        <select
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          className={`bg-[#e0e0e0] ${theme && "dark:bg-[#092635] text-white"}`}
        >
          <option value="en">EN</option>
          <option value="ru">RU</option>
          <option value="uz">UZ</option>
        </select>
        <button onClick={() => toggleTheme()}>
          {theme ? (
            <SunOutlined style={{ fontSize: "24px", color: "#fff" }} />
          ) : (
            <MoonOutlined style={{ fontSize: "24px" }} />
          )}
        </button>
        <div
          className="flex items-center gap-2 relative cursor-pointer"
          onClick={() => toggleLogout()}
        >
          <p className={`${theme && "dark:text-white"}`}>
            {capitalizeFirstLetter(username)}
          </p>
          <UserOutlined
            style={{ fontSize: "24px" }}
            className={`${theme && "text-white"} cursor-pointer`}
          />
          {showLogout && (
            <div
              className="text-[red] bg-white absolute left-5 px-3 rounded top-[60px] shadow-2xl cursor-pointer"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/");
                handleLogin(false);
              }}
            >
              Log Out
            </div>
          )}
        </div>
      </div>
    </Header>
  );
}

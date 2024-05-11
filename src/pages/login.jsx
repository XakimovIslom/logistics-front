import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import React, { useState } from "react";
import axios from "axios";

export default function LoginPage({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setError(null);
    if (username === "" || password === "") {
      setError("Please fill the form");
      return;
    }
    try {
      const response = await axios.post(
        "https://admin.hightargetgroup.uz/api/v1/users/login/",
        {
          username,
          password,
        }
      );
      const { access: token } = response.data.data.tokens;
      localStorage.setItem("token", token);

      localStorage.setItem("username", username);
      handleLogin(true);
      setUsername("");
      setPassword("");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="bg-img h-screen bg-no-repeat bg-cover">
      <div className="bg-[#00000042] h-screen flex items-center justify-center">
        <Space
          direction="vertical"
          className="bg-[#ffffff] w-[500px] py-[100px] px-[10px] rounded-lg shadow-2xl absolute top-0 left-0 h-screen"
        >
          <h1 className="font-bold mb-[20px] text-[20px]">Login</h1>
          {error && <p className="text-red-600">{error}</p>}
          <Input
            placeholder="Username"
            className="py-[20px] w-full font-bold text-[#000000]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input.Password
            placeholder="Password"
            className="py-[20px] w-full font-bold text-[#000000] mb-[20px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <Button
            block={true}
            size={"large"}
            className="bg-[#224afa] text-[white] py-[30px] flex items-center justify-center"
            onClick={() => handleSubmit()}
          >
            Login
          </Button>
        </Space>
      </div>
    </div>
  );
}

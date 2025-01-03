import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setToken, deleteToken, getToken } from "../services/token";
import { postAuthLogin } from "../services/auth";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const token = getToken("greentoken");
    if (token) {
      const deltoken = deleteToken("greentoken");
    }

    const response = await postAuthLogin({ email, password });
    if (response) {
      setToken("greentoken", response);
      navigate("/dashboard");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="bg-white h-screen w-full flex">
      <div className="w-1/2 bg-white justify-center items-center flex h-screen">
        <div className="flex justify-center items-center space-x-6 flex-col space-y-10 pt-8">
          <h1 className="text-black text-3xl font-poppins font-semibold flex">
            Tekrar Hoş Geldin
            <img src="../assets/handnos.png" alt="handnos" className="ml-5" />
          </h1>

          <div className="flex space-x-6"></div>

          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="w-[600px] h-16 mb-4 p-3 border rounded-full bg-white"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Şifre"
              className="w-[600px] h-16 mb-4 p-3 border rounded-full bg-white"
              onChange={(e) => setPassword(e.target.value)}
            />
            <h2 className="text-[#A5A5A5]  font-poppins text-xs flex justify-end items-end cursor-pointer">
              Şifreni mi unuttun?
            </h2>
          </div>
          <button
            onClick={handleLogin}
            className="bg-gradient-to-b from-[#F6D107] to-[#F49939] text-white px-4 py-2 rounded-full w-[500px] h-16 hover:bg-gradient-to-r hover:from-[#F49939] hover:to-[#F49939]"
          >
            <span className="font-poppins">Giriş Yap</span>
          </button>
          <div>
            <h2 className="font-poppins text-[#A5A5A5] text-sm">
              Hesabın yok mu?{" "}
              <span className="font-semibold text-black cursor-pointer">
                <Link to="/register">Kayıt Ol.</Link>
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="w-1/2 max-h-screen flex justify-center items-center">
        <img
          src="../assets/loginimg.png"
          alt="loginimg"
          className="max-w-[600px] h-full p-20  "
        />
      </div>
    </div>
  );
};

export default LoginScreen;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setToken, deleteToken, getToken } from "../services/token";
import { postAuthRegister } from "../services/auth";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ulname, setUlname] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const token = getToken("greentoken");
    if (token) {
      const deltoken = deleteToken("greentoken");
    }
    const data = {
      email: email,
      password: password,
      ulname: "ulname",
      uwork: "uwork",
      name: "name",
    };

    const response = await postAuthRegister(data);
    if (response) {
      navigate("/login");
    } else {
      alert("Register failed");
    }
  };

  return (
    <div className="bg-white h-screen w-screen flex">
      <div className="w-1/2 h-screen flex justify-center items-center">
        <img
          src="../assets/registerimg.png"
          alt="loginimg"
          className="max-w-[600px] h-full p-20"
        />
      </div>
      <div className="w-1/2 bg-white justify-center items-center flex h-screen">
        <div className="flex justify-center items-center space-x-6 flex-col space-y-12 pt-8">
          <h1 className="text-black text-3xl font-poppins font-semibold flex ">
            GreenStep'e <br /> Hoş Geldin
          </h1>

          <div className="flex space-x-6">           
          </div>         
          <div className="flex flex-col">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-[600px] h-16 mb-4 p-3 border rounded-full bg-white"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Şifre"
              className="w-[600px] h-16 mb-4 p-3 border rounded-full bg-white"
            />
          </div>
          <button
            onClick={handleLogin}
            className="bg-gradient-to-b from-[#F6D107] to-[#F49939] text-white px-4 py-2 rounded-full w-[500px] h-16 hover:bg-gradient-to-r hover:from-[#F49939] hover:to-[#F49939]"
          >
            <span className="font-poppins">Kayıt Ol</span>
          </button>
          <div>
            <h2 className="font-poppins text-[#A5A5A5] text-sm">
              Zaten hesabın var mı?{" "}
              <span className="font-semibold text-black cursor-pointer">
                <Link to="/login">Giriş Yap.</Link>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;

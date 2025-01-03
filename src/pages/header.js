import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="bg-[#41884E]">
      <div className="flex justify-between z-20 relative">
        <img
          src="../assets/greensteplogo.png"
          alt="GreenStep Logo"
          className="flex justify-between ml-10 mt-2"
        />
        <div className="flex mr-12 mt-16 space-x-12">
          <a
            href="/#"
            className="text-[#FFFFFF] font-poppins mt-2 hover:text-green-300"
          >
            Ana Sayfa
          </a>

          <a
            href="/information"
            className="text-[#FFFFFF] font-poppins mt-2 hover:text-green-300"
          >
            Bilgilendirme
          </a>
          <button
            onClick={handleClick}
            className="bg-[#32B347] text-white px-4 py-2  shadow-black shadow-sm rounded-xl w-36 h-11 hover:bg-green-600"
          >
            Giriş Yap
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center pt-24"
      style={{
        backgroundImage: `url('../assets/footerimage.png')`,
      }}
    >
      <div className="absolute top-0 left-0 items-center p-4 flex">
        <div className="flex flex-col mr-4">
          <div className="flex items-center">
            <img
              src="../assets/greensteplogo.png"
              alt="greensteplogo"
              className="mr-2 ml-20 mt-16 w-36 h-32"
            />
            <h1 className="font-poppins text-white text-4xl mt-16">
              Green
              <span className="font-poppins font-semibold text-[#9AC8A2] text-4xl">
                Step
              </span>
            </h1>
          </div>
          <div className="mt-6 ml-28">
            <h2 className="font-poppins text-white text-start">
              GreenStep ile geri dönüşüm bilincini <br /> yayarak çevresel
              sürdürülebilirliğe <br /> katkıda bulunalım; doğayı koruma <br />{" "}
              sorumluluğumuzu üstlenerek gelecek <br /> nesillere yaşanabilir
              bir dünya <br />
              bırakalım.
            </h2>
          </div>
        </div>

        <div className="flex flex-col text-start ml-36 space-y-6 mt-10">
          <h1 className="font-poppins font-semibold text-white text-2xl">
            HIZLI LİNKLER
          </h1>
          <a
            href="/login"
            className="text-[#FFFFFF]  font-poppins hover:text-green-700 text-md"
          >
            Giriş Yap
          </a>

          <a
            href="/register"
            className="text-[#FFFFFF]  font-poppins hover:text-green-700 text-md"
          >
            Kayıt Ol
          </a>
          <a
            href="/information"
            className="text-[#FFFFFF]  font-poppins hover:text-green-700 text-md "
          >
            Bilgilendirme
          </a>
        </div>
      </div>
      <div className="flex flex-col mr-56 mt-10 space-y-8 justify-end items-end">
        <img
          src="../assets/appstore.png"
          alt="appstorelogo"
          className="w-60 h-20"
        />
        <img
          src="../assets/googleplay.png"
          alt="appstorelogo"
          className="w-60 h-20"
        />
      </div>
    </div>
  );
}

export default Footer;

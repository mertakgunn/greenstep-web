import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

const Badges = () => {
  return (
    <div className="h-screen">
      <div className="bg-[#459A7D] w-60 h-screen fixed">
        <div className="flex justify-start items-center">
          <img
            src="../assets/greenstepwhite.png"
            alt="logo"
            className="w-16 h-12 mt-5 ml-4"
          />
          <h1 className="font-poppins font-light text-white text-md mt-5">
            GREEN
          </h1>{" "}
          <span className="font-poppins text-white font-bold text-md mt-5">
            STEP
          </span>
        </div>
        <div className="ml-6 mt-20 space-y-8">
          <Link to="/dashboard" className="flex items-center space-x-4 mt-8">
            <img
              src="../assets/dimage1.png"
              alt="dashboard"
              className="w-6 h-6"
            />
            <h1 className="font-poppins text-white text-md">Dashboard</h1>
          </Link>

          <Link to="/profile  " className="flex items-center space-x-4 mt-8 ">
            <img
              src="../assets/dimage2.png"
              alt="progress"
              className="w-6 h-6"
            />
            <h1 className="font-poppins text-white text-md">Profil</h1>
          </Link>

          <Link
            to="/"
            className="flex items-center space-x-4 ml-4"
            onClick={(e) => {
              const confirmed = window.confirm(
                "Çıkış yapmak istediğinize emin misiniz?"
              );
              if (!confirmed) {
                e.preventDefault();
              }
            }}
          >
            <img
              src="../assets/dimage4.png"
              alt="leaderboard"
              className="w-6 h-6 mt-80"
            />
            <h1 className="font-poppins text-white text-md mt-80">Çıkış Yap</h1>
          </Link>
        </div>
      </div>
      <div className="bg-stone-100 w-full h-full">
        <div className="flex space-x-4">
          <div className="ml-64 pt-6">
            <div className="relative w-[1000px]">
              <CiSearch
                className="absolute left-3 top-6 text-gray-500"
                size={20}
              />
              <input
                type="search"
                placeholder="Ara"
                className="w-[1000px] h-16 border-2 rounded-xl pl-10 pr-4 bg-white"
              />
            </div>
          </div>
          <div className="bg-white border-2 rounded-xl w-44 h-16 mt-6">
            <div className="flex">
              <Link to="/profile" className="flex items-center space-x-4 ml-4">
                <img
                  src="../assets/gsprofile.png"
                  alt="plus"
                  className="w-8 h-8 mt-4 ml-2"
                />
              </Link>
              <div className="flex flex-col justify-center items-center mt-3 mr-1">
                <h1 className="font-poppins text-sm text-gray-400 ml-2">
                  Mert Akgün
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start  space-x-6 ml-64 mt-6">
          <div className="bg-[#FFFFFF] w-[280px] h-44 rounded-xl  ">
            <div className="flex">
              <img
                src="../assets/badges.png"
                alt="rozetler"
                className="w-14 h-14 ml-6 mt-6"
              />
              <h1 className="text-[#F49939] font-poppins font-semibold mt-8 ml-4">
                Eko Savaşçı
              </h1>
            </div>
            <div className=" ">
              <h2 className="text-[#A7A7AB] font-poppins font-semibold text-xs p-6 text-start ml-4">
                100 adet atığı geri dönüştüren kullanıcılar için.
              </h2>
            </div>
          </div>
          <div className="bg-[#FFFFFF] w-[280px] h-44 rounded-xl ">
            <div className="flex">
              <img
                src="../assets/badges.png"
                alt="rozetler"
                className="w-14 h-14 ml-6 mt-6"
              />
              <h1 className="text-[#F49939] font-poppins font-semibold mt-8 ml-4">
                Çevreleyen
              </h1>
            </div>
            <div className=" ">
              <h2 className="text-[#A7A7AB] font-poppins font-semibold text-xs p-6 text-start ml-4">
                Sürdürülebilir alışkanlıkları 7 gün boyunca devam ettiren
                kullanıcılar için.
              </h2>
            </div>
          </div>
          <div className="bg-[#FFFFFF] w-[280px] h-44 rounded-xl ">
            <div className="flex">
              <img
                src="../assets/badges.png"
                alt="rozetler"
                className="w-14 h-14 ml-6 mt-6"
              />
              <h1 className="text-[#F49939] font-poppins font-semibold mt-8 ml-4">
                Doğa Dostu
              </h1>
            </div>
            <div className=" ">
              <h2 className="text-[#A7A7AB] font-poppins font-semibold text-xs p-6 text-start ml-4">
                Sürdürülebilir alışkanlıkları 30 gün boyunca devam ettiren
                kullanıcılar için.
              </h2>
            </div>
          </div>
        </div>
        <div className="flex ml-64 mt-12 font-semibold text-2xl">
          <h1>Kazandığın Rozetler</h1>
        </div>
        <div className="bg-[#FFFFFF] w-[330px] h-24 rounded-xl ml-64 mt-16 ">
          <div className="flex">
            <img
              src="../assets/badges.png"
              alt="rozetler"
              className="w-14 h-14 ml-6 mt-6"
            />
            <h1 className="text-[#F49939] font-poppins font-semibold mt-10 ml-4">
              Eko Savaşçı
            </h1>
            <button className="bg-[#459A7D] w-20 h-8 rounded-xl mt-9 ml-8">
              <h1 className="text-white font-poppins font-semibold text-xs">
                Paylaş
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badges;

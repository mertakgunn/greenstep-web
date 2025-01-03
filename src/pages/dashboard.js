import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="">
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

          <Link to="/#" className="flex items-center space-x-4 ml-4">
            <img
              src="../assets/dimage4.png"
              alt="leaderboard"
              className="w-6 h-6 mt-80 "
            />
            <h1 className="font-poppins text-white text-md mt-80  ">
              Çıkış Yap
            </h1>
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
                className="w-[1000px] bg-white h-16 border-2 rounded-xl pl-10 pr-4"
              />
            </div>
          </div>
          <div className="bg-white border-2 rounded-xl w-44 h-16 mt-6">
            <div className="flex">
              <img
                src="../assets/ornekprofil.png"
                alt="plus"
                className="w-8 h-8 mt-4 ml-2"
              />
              <div className="flex flex-col justify-center items-center mt-3 mr-1">
                <h2 className="font-poppins text-xs text-gray-400 mr-7">
                  Prof. Dr.
                </h2>
                <h1 className="font-poppins text-sm text-black ml-2">
                  Erdem Uçar
                </h1>
              </div>
              <IoMdNotificationsOutline className="mt-6" size={20} />
              <img
                src="../assets/numbertwo.png"
                alt="plus"
                className="w-3 h-3 mt-5 absolute ml-36"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-6 ml-60 mt-6">
          <div className="bg-[#459A7D] w-[280px] h-44 rounded-xl shadow-gray-400 shadow-xl">
            <div className="flex flex-col pt-12 space-y-3 ">
              <h1 className="text-white font-poppins font-light">
                KAZANILAN ROZETLER
              </h1>
              <h2 className="text-white font-poppins font-bold text-3xl">
                184
              </h2>
            </div>
          </div>
          <div className="bg-white w-[280px] h-44 rounded-xl">
            <div className="flex flex-col pt-12 space-y-3 ">
              <h1 className="text-black font-poppins font-light">PUANLAR</h1>
              <h2 className="text-black font-poppins font-bold text-3xl">
                1427
              </h2>
            </div>
          </div>
          <div className="bg-white w-[280px] h-44 rounded-xl">
            <div className="flex flex-col pt-12 space-y-3 ">
              <h1 className="text-black font-poppins font-light">
                TOPLAM KAZANILAN PUAN
              </h1>
              <h2 className="text-black font-poppins font-bold text-3xl">
                84,382
              </h2>
            </div>
          </div>
          <div className="bg-white w-[280px] h-44 rounded-xl">
            <div className="flex flex-col space-y-3 items-start ml-6 ">
              <h1 className="text-black font-poppins mt-12 font-light ">
                ROZET DETAYLARI
              </h1>
              <div className="flex">
                <img
                  src="../assets/verifyicon.png"
                  alt="rozetler"
                  className="w-14 h-14"
                />
                <a href="/badges">
                  <img
                    src="../assets/buttonicon.png"
                    alt="rozetler"
                    className="w-14 h-14 ml-28 mt-8 cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-white w-[890px] h-[530px] rounded-xl  ml-64 mt-6 ">
            <div className="flex">
              <h1 className="font-poppins text-black font-semibold mt-6 ml-6">
                Grafiksel Analiz
              </h1>
              <button className="bg-transparent border border-gray-300 w-24 h-14 rounded-xl text-black font-poppins font-semibold mt-6 ml-24">
                7 Günlük
              </button>
              <button className=" w-24 h-14 rounded-xl text-gray-300 font-poppins  font-semibold mt-6 ml-6">
                30 Günlük
              </button>
              <button className=" w-24 h-14 rounded-xl text-gray-300 font-poppins font-semibold mt-6 ml-6">
                6 Aylık
              </button>
              <button className=" w-24 h-14 rounded-xl text-gray-300 font-poppins font-semibold mt-6 ml-6">
                12 Aylık
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-col space-y-10">
                <h1>400</h1>
                <h1>300</h1>
                <h1>200</h1>
                <h1>100</h1>
                <h1>0</h1>
              </div>
              <img
                src="../assets/graph.png"
                alt="graph"
                className="w-[750px] h-[400px]"
              />
            </div>
          </div>
          <div className="bg-white w-[280px] h-[410px] rounded-xl ml-6 mt-6">
            <div className="flex flex-col justify-start items-start ml-3 mt-2">
              <h1 className="font-poppins text-black font-semibold">
                Fakülte Öğretmenleri
              </h1>
              <h2 className="font-poppins text-black font-light text-xs mt-1">
                Fakülte öğretmenlerinin rozetlerini takip et.
              </h2>
            </div>
            <div className="bg-transparent border border-gray-300 w-64 h-14 rounded-xl text-black font-poppins font-semibold mt-2 ml-2 ">
              <div className="flex">
                <img
                  src="../assets/imageorn.png"
                  alt="plusicon"
                  className="w-10 h-10 ml-2 mt-2"
                />
                <div className="flex flex-col justify-start items-start ml-2 mt-2">
                  <span className="text-sm font-poppins">Sıla Koç</span>
                  <span className="text-xs font-poppins font-light ">
                    silakoc@trakya.edu.tr
                  </span>
                </div>
                <div className="text-xs mt-3 ml-6">
                  <h1>32</h1>
                  <h2 className="font-poppins font-normal">Rozet</h2>
                </div>
              </div>
            </div>
            <div className="bg-transparent border border-gray-300 w-64 h-14 rounded-xl text-black font-poppins font-semibold mt-2 ml-2 ">
              <div className="flex">
                <img
                  src="../assets/imageorn.png"
                  alt="plusicon"
                  className="w-10 h-10 ml-2 mt-2"
                />
                <div className="flex flex-col justify-start items-start ml-2 mt-2">
                  <span className="text-sm font-poppins">Sıla Koç</span>
                  <span className="text-xs font-poppins font-light ">
                    silakoc@trakya.edu.tr
                  </span>
                </div>
                <div className="text-xs mt-3 ml-6">
                  <h1>32</h1>
                  <h2 className="font-poppins font-normal">Rozet</h2>
                </div>
              </div>
            </div>
            <div className="bg-transparent border border-gray-300 w-64 h-14 rounded-xl text-black font-poppins font-semibold mt-2 ml-2 ">
              <div className="flex">
                <img
                  src="../assets/imageorn.png"
                  alt="plusicon"
                  className="w-10 h-10 ml-2 mt-2"
                />
                <div className="flex flex-col justify-start items-start ml-2 mt-2">
                  <span className="text-sm font-poppins">Sıla Koç</span>
                  <span className="text-xs font-poppins font-light ">
                    silakoc@trakya.edu.tr
                  </span>
                </div>
                <div className="text-xs mt-3 ml-6">
                  <h1>32</h1>
                  <h2 className="font-poppins font-normal">Rozet</h2>
                </div>
              </div>
            </div>
            <div className="bg-transparent border border-gray-300 w-64 h-14 rounded-xl text-black font-poppins font-semibold mt-2 ml-2 ">
              <div className="flex">
                <img
                  src="../assets/imageorn.png"
                  alt="plusicon"
                  className="w-10 h-10 ml-2 mt-2"
                />
                <div className="flex flex-col justify-start items-start ml-2 mt-2">
                  <span className="text-sm font-poppins">Sıla Koç</span>
                  <span className="text-xs font-poppins font-light ">
                    silakoc@trakya.edu.tr
                  </span>
                </div>
                <div className="text-xs mt-3 ml-6">
                  <h1>32</h1>
                  <h2 className="font-poppins font-normal">Rozet</h2>
                </div>
              </div>
            </div>
            <div className="bg-transparent border border-gray-300 w-64 h-14 rounded-xl text-black font-poppins font-semibold mt-2 ml-2 ">
              <div className="flex">
                <img
                  src="../assets/imageorn.png"
                  alt="plusicon"
                  className="w-10 h-10 ml-2 mt-2"
                />
                <div className="flex flex-col justify-start items-start ml-2 mt-2">
                  <span className="text-sm font-poppins">Sıla Koç</span>
                  <span className="text-xs font-poppins font-light ">
                    silakoc@trakya.edu.tr
                  </span>
                </div>
                <div className="text-xs mt-3 ml-6">
                  <h1>32</h1>
                  <h2 className="font-poppins font-normal">Rozet</h2>
                </div>
              </div>
            </div>
            <h1 className="font-poppins text-gray-400 font-semibold text-sm mt-3 mr-20">
              TÜMÜNÜ GÖRÜNTÜLE →
            </h1>
            <div className="bg-white w-[280px] h-28 mt-4 rounded-xl ">
              <h1 className="font-poppins text-sm text-black font-semibold pt-2 mr-28">
                DİĞER ÖĞRETMENLER
              </h1>
              <div className="avatar-group -space-x-6 rtl:space-x-reverse flex mt-2 ml-4">
                <div className="avatar ">
                  <div className="w-12">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img
                      src="../assets/buttonicon.png"
                      alt="icon"
                      className="ml-24"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

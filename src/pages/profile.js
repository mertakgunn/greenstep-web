import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useState, useEffect } from "react";
import { getAuth, updateAuth } from "../services/auth/index";
export default function Profile() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [academictitle, setAcademictitle] = useState("");
  const [facultyname, setFacultyname] = useState("");
  const [errors, setErrors] = useState({});

  async function fetchData() {
    const response = await getAuth();
    setName(response.name);
    setSurname(response.ulname);
    setEmail(response.email);
    setPhone(response.phone);
    setAcademictitle(response.academic_title);
    setFacultyname(response.university_name);
  }

  const handleFaculty = (event) => {
    setFacultyname(event.target.value);
  };
  async function handleSubmit() {
    const data = {
      name: name,
      ulname: surname,
      email: email,
      phone: phone,
      academic_title: academictitle,
      university_name: facultyname,
    };

    const response = await updateAuth(data);

    alert("Başarılı bir şekilde güncellendi.");
    window.location.reload();
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="">
      <div className="bg-[#459A7D] w-60 h-full fixed">
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

          <Link
            to="/profile"
            className="flex items-center space-x-4 mt-8  p-2 rounded-md "
          >
            <img
              src="../assets/dimage2.png"
              alt="progress"
              className="w-6 h-6"
            />
            <h1 className="font-poppins text-white text-md ">Profil</h1>
          </Link>

          <Link to="/" className="flex items-center space-x-4 ml-4">
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
        <div className="bg-white w-[1190px] h-full rounded-xl  ml-64 mt-6">
          <h1 className="font-poppins font-semibold flex justify-start ml-8 pt-8">
            Profilini Düzenle
          </h1>
          <div className="flex justify-center mt-8">
            <img
              src="../assets/kisiexmp.png"
              alt="kisiexmp"
              className="w-24 h-24 "
            />
            <img
              src="../assets/duzenle.png"
              alt="duzenle"
              className="w-8 h-8 mt-16 ml-16 absolute"
            />
          </div>
          <div className="">
            <div className="pt-4 gap-4 mt-16 ">
              <div className="w-full max-w-5xl mx-auto">
                <div className="flex gap-20">
                  <div className="flex flex-col w-full pb-10">
                    <input
                      type="text"
                      placeholder="İsim"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border-gray-300 bg-[#FFFF] border-2 rounded-md focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <input
                      type="text"
                      placeholder="Soyisim"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      className="w-full px-4 py-3 border-gray-300 bg-[#FFFF] border-2 rounded-md focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <input
                      type="email"
                      placeholder="E-posta"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border-gray-300 bg-[#FFFF] border-2 rounded-md focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-20">
                  <div className="flex flex-col w-full">
                    <input
                      type="tel"
                      placeholder="Telefon Numarası"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 border-gray-300 bg-[#FFFF] border-2 rounded-md focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <input
                      type="text"
                      name="text"
                      placeholder="Akademik Ünvan"
                      value={academictitle}
                      onChange={(e) => setAcademictitle(e.target.value)}
                      className="w-full px-4 py-3 border-gray-300 bg-[#FFFF] border-2 rounded-md focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <select
                      onChange={handleFaculty}
                      value={facultyname}
                      className="select select-bordered border-gray-300 bg-[#FFFF] w-full max-w-xs"
                    >
                      <option disabled selected>
                        Lütfen Bölümünüzü Seçin.
                      </option>
                      <option value={"Yönetim Bilişim"}>
                        Yönetim Bilişim Sistemleri
                      </option>
                      <option value={"Turizm İşletmeciliği"}>
                        Turizm İşletmeciliği
                      </option>
                      <option value={"Finans ve Bankacılık"}>
                        Finans ve Bankacılık
                      </option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-20">
                  <div className="flex flex-col w-72  pt-10"></div>
                </div>
                <button
                  onClick={handleSubmit}
                  className="bg-[#459A7D]  text-white w-64 h-12 rounded-lg mt-10 mb-14 text-center"
                >
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

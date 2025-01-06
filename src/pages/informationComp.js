import React from "react";

const Information = ({ title, description, button }) => {
  return (
    <div className="information-container ">
      <div className="bg-gray-100 ml-12 mr-12 rounded-3xl mt-12 mb-12 flex items-center">
        <img
          src="../assets/informationimage.png"
          alt="infimg"
          className="p-6"
        />
        <div className="bg-white w-full p-12 mr-8 rounded-3xl flex flex-col space-y-6">
          <h1 className="text-2xl font-semibold text-start font-poppins text-black">
            {title}
          </h1>
          <h2 className="text-lg text-start font-poppins text-gray-500">
            {description}
          </h2>

          {button && (
            <a
              href={button.link}
              className="bg-green-500 text-white p-2 rounded-xl w-36 hover:bg-green-600 text-center "
            >
              {button.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Information;

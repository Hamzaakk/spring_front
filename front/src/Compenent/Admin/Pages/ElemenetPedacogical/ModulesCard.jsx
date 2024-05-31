import React, { useState } from "react";

import img from "../../../../assets/images/tables-with-gray-chairs-unfocused.jpg";
const ModulesCard = ({ title, prof_coordinateur, prof_ensg }) => {
  return (
    <div
      className={`relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl mt-12 `}
    >
      <div className="relative w-full">
        <img
          src={img}
          className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
          alt=""
        />
      </div>
      <div className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-sky-200 left-4 -top-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      </div>
      <h3 className="mb-3 text-xl font-bold text-indigo-600">{title}</h3>
 
      <div className="flex items-centerbg p-2 rounded-md bg-white justify-between mb-2">
        <div>
          <p className="text-sm font-medium text-gray-600">
            {" "}
            coordinetur : {prof_coordinateur.firstName} {prof_coordinateur.lastName}{" "}
          </p>
          <p className="text-xs text-gray-500">{prof_coordinateur.email} </p>
        </div>
      </div>
      <div className="flex items-centerbg p-2 rounded-md bg-white justify-between mb-2">
      
        <div>
          <p className="text-xs font-medium text-gray-600">
            {" "}
          prof ensg:   {prof_ensg.firstName} {prof_ensg.lastName}
          </p>
          <p className="text-xs text-gray-500"> {prof_ensg.email} </p>
        </div>
      </div>
    </div>
  );
};

export default ModulesCard;

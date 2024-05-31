import React, { useState } from 'react';

const ModulesCard = ({ theme, title, team, timeLeft, members, progress }) => {
  return (
    <div className={`relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl mt-12 ${theme}`}>
      <div className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-sky-200 left-4 -top-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="mt-8">
        <p className="text-xl font-semibold my-2">{title}</p>
       
        
      </div>
    </div>
  );
};


export default ModulesCard;
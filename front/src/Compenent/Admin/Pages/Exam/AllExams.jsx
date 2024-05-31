import React from "react";
import Layout from "../../Layout";
import { Link } from "react-router-dom";

const ExamCard = ({
  elementPedagogique,
  startDate,
  startTime,
  duration,
  session,
  image,
  buttonText,
}) => {
  return (
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">
        {elementPedagogique}
      </h3>
      <div className="relative">
        <img
          className="w-full rounded-xl"
          src={image}
          alt={elementPedagogique}
        />
      </div>
      <div className="mt-4 text-gray-800">
        <p className="text-2xl font-bold cursor-pointer"> {startDate}</p>
        <p className="text-2xl font-bold cursor-pointer"> {startTime}</p>
        <div className="my-4">
          <div className="flex space-x-1 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-600 mb-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <p>{duration}</p>
          </div>
          <div className="flex space-x-1 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-600 mb-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </span>
            <p>Session: {session}</p>
          </div>
        </div>
        <button  className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
         <Link to={`exam/detail/1`}>
         {buttonText}
         </Link>
         
        </button>
      </div>
    </div>
  );
};

const AllExams = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-20">
        <Link
          className="rounded-md ml-2 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          to={`/exams`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
            />
          </svg>
        </Link>
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          <ExamCard
            elementPedagogique="Mathematics"
            startDate="2024-06-01"
            startTime="10:00 AM"
            duration="2 Hours"
            session="Normal"
            image="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            buttonText="More Info"
          />
          <ExamCard
            elementPedagogique="Physics"
            startDate="2024-06-02"
            startTime="1:00 PM"
            duration="3 Hours"
            session="Rattrapage"
            image="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
            buttonText="More Info"
          />
          <ExamCard
            elementPedagogique="Chemistry"
            startDate="2024-06-03"
            startTime="9:00 AM"
            duration="1.5 Hours"
            session="Normal"
            image="https://images.unsplash.com/photo-1561835491-ed2567d96913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
            buttonText="More Info"
          />
        </div>
      </div>
    </Layout>
  );
};

export default AllExams;

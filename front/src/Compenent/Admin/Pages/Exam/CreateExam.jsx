import React, { useState, useEffect } from 'react';
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import axios from 'axios';


import img from "../../../../assets/images/unfocused-restaurant-with-tidy-tables.jpg"
const CreateExam = () => {
  // State to hold department data
  const [departmentData, setDepartmentData] = useState([]);

  useEffect(() => {
    // Fetch department data from backend
   
    const fetchDepartments = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const response = await axios.get('http://localhost:8080/api/department/departements', {
       
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log(response.data)
        setDepartmentData(response.data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchDepartments();
  }, []); // Empty dependency array to run this effect only once after initial render

  return (
    <Layout>
      <div className="flex flex-wrap py-2 bg-slate-100 mx-8">
        {departmentData.map((department) => (
          <div
            key={department.id}
            className="z-5 mx-2 relative flex flex-col mt-2 rounded-[20px] max-w-[300px]  bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full p-4 3xl:p-[18px] bg-white"
          >
            <div className="h-full w-full">
              <div className="relative w-full">
                <img
                  src={img}
                  className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                  alt=""
                />
              </div>
              <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                <div className="mb-2">
                  <p className="text-lg font-bold text-navy-700">
                    {department.departement_name}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between md:items-center lg:justify-between">
                <Link
                  className="rounded-md flex justify-center  bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  to={`/exams/department/${department.id}`}
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default CreateExam;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../Layout';
import axios from 'axios';

const GroupWithProfs = () => {
  const { id } = useParams();

  // State to hold group data
  const [groupData, setGroupData] = useState(null);

  useEffect(() => {
    // Fetch group data when component mounts
    fetchGroupData();
  }, []);

  const fetchGroupData = async () => {
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem('access_token');

      // Make the request with the Authorization header
      const response = await axios.get(`http://localhost:8080/api/group/profs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setGroupData(response.data);

      // Log the fetched data
      console.log('Group data fetched successfully:', response.data);
    } catch (error) {
      console.error('Error fetching group data:', error);
    }
  };

  if (!groupData) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="h-screen bg-indigo-100 flex justify-center items-center">
        <div className="lg:w-2/5 md:w-1/2 w-2/3">
          <div key={groupData.grpId} className="z-5 relative flex flex-col rounded-[20px] max-w-[300px]  bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full p-4 3xl:p-[18px] bg-blue-50">
            <div className="h-full w-full">
              <div className="relative w-full">
                <img src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png" className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt="" />
                <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                  <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path>
                    </svg>
                  </div>
                </button>
              </div>
              <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                <div className="mb-2">
                  <p className="text-lg font-bold text-navy-700"> {groupData.group_name} </p>
                </div>
              </div>
              <div className="flex flex-col">
                {groupData.profDtoList.map((professor) => (
                  <div key={professor.id} className="flex items-centerbg p-2 rounded-md bg-white justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium text-gray-600"> {professor.firstName} {professor.lastName} </p>
                      <p className="text-xs text-gray-500"> {professor.email} </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-600"> {professor.departement_name} </p>
                      <p className="text-xs text-gray-500"> {professor.field_name} </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GroupWithProfs;

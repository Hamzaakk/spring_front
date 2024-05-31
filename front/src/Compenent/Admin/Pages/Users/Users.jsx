import React, { useEffect, useState } from 'react';
import Layout from '../../Layout';
import { Link, useNavigate } from 'react-router-dom';

import {fetchDataAllAdmin} from "../../../../api/Admin/AdminCrud"

const Dropdown = ({ options }) => (
  <div className="relative">
    <select className="appearance-none h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
      {options.map(option => (
        <option key={option}>{option}</option>
      ))}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </div>
);

const SearchInput = () => (
  <div className="block relative">
    <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
        <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z" />
      </svg>
    </span>
    <input placeholder="Search" className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
  </div>
);

const UserRow = ({ user }) => (
  <tr>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <div className="flex items-center">
        
        <div className="ml-3">
          <p className="text-gray-900 whitespace-no-wrap">{user.name}</p>
        </div>
      </div>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">{user.role}</p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">{user.email}</p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <span className={`relative inline-block px-3 py-1 font-semibold leading-tight text-${user.idColor}-900`}>
        <span aria-hidden className={`absolute inset-0 bg-${user.idColor}-200 opacity-50 rounded-full`}></span>
      <div className="flex ">
        <Link 
        className="rounded-md  bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
         to={`/update/${user.id}`}
          >edit</Link>
        <Link
        className="rounded-md mx-2 bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        to={`/remove/${user.id}`} >Remove</Link>
        </div>
      </span>
    </td>
  </tr>
);

const UserTable = ({ users }) => (
  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            User
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Role
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            email
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <UserRow key={user.name} user={user} />
        ))}
      </tbody>
    </table>
  </div>
);

const Pagination = () => (
  <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
    <span className="text-xs xs:text-sm text-gray-900">Showing 1 to 4 of 50 Entries</span>
    <div className="inline-flex mt-2 xs:mt-0">
      <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">Prev</button>
      <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">Next</button>
    </div>
  </div>
);

const  Users= () => {
  const users = [
    {
      name: "Vera Carpenter",
      role: "Admin",
      email: "Jan 21, 2020",
      id: 1,
      idColor: "green",
      imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    },
    {
      name: "Blake Bowman",
      role: "Admin",
      email: "Jan 01, 2020",
      id: 1,
      idColor: "green",
      imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    },
    {
      name: "Dana Moore",
      role: "Admin",
      email: "Jan 10, 2020",
      id: "Suspended",
      idColor: "orange",
      imgSrc: "https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    },
    {
      name: "Alonzo Cox",
      role: "Admin",
      email: "Jan 18, 2020",
      id: 1,
      idColor: "red",
      imgSrc: "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    },
  ];

  const [AllAdmins,setAllAdmins] = useState()

const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if(token ==="")
      navigate('/NotFound')
    const fetchUsers = async () => {
      try {
        const data = await fetchDataAllAdmin();
        setAllAdmins(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
   <Layout>
     <div className="antialiased font-sans">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">Admins</h2>
          </div>
          <div className="my-2 flex sm:flex-row flex-col">
            <div className="flex flex-row mb-1 sm:mb-0">
              <Dropdown options={['5', '10', '20']} />
              <Dropdown options={['All', 1, 'I1']} />
            </div>
            <SearchInput />
            <Link 
                className="rounded-md ml-2 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                to={`/admin/creaet`}
              >
                Add new Admin
              </Link>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <UserTable users={users} />
          </div>
          <Pagination />
        </div>
      </div>
    </div>
   </Layout>
  );
};

export default Users;

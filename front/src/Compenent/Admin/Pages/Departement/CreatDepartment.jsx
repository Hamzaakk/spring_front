import React, { useEffect, useState } from 'react'
import Layout from '../../Layout'

function CreatDepartment() {

  const [departement, setDepatemnts] = useState({
    departement_name: '',
  });


 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepatemnts(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <Layout>
      <div className="h-screen bg-indigo-100 flex justify-center items-center">
        <div className="lg:w-2/5 md:w-1/2 w-2/3">
          <form className="bg-white p-10 rounded-lg shadow-lg min-w-full" onSubmit={handleSubmit}>
            <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Add new Department </h1>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="firstName">First Name</label>
              <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="firstName" id="firstName" placeholder="First Name"  onChange={handleChange} />
            </div>
        
            <button type="submit" className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Add</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreatDepartment;

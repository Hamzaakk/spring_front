import React, { useState } from 'react';
import Layout from '../../Layout';
import { useParams } from 'react-router-dom';

const EditProf = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    department: '',
    field: ''
  });


  const {id} = useParams()

  const departments = [
    { id: 1, name: "Informatique" },
    { id: 2, name: "Electronique" },
    { id: 3, name: "Mathématiques" },
    // Add more departments as needed
  ];

  const fields = [
    { id: 1, name: "Computer Science" },
    { id: 2, name: "Electrical Engineering" },
    { id: 3, name: "Mathematics" },
    // Add more fields as needed
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const createProfInfo = [{
      user: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      },
      department: {
        id: parseInt(formData.department),
      },
      field: {
        id: parseInt(formData.field),
      },
    }];
    console.log(createProfInfo);
  };


  return (
    <Layout>

<div className="h-screen  bg-indigo-100 flex justify-center items-center">
      <div className="lg:w-2/5 md:w-1/2 w-2/3">
        <form className="bg-white p-10 rounded-lg shadow-lg min-w-full" onSubmit={handleSubmit}>
          <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Edit Prof id : {id} </h1>
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="firstName">First Name</label>
            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="firstName" id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
          </div>
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="lastName">Last Name</label>
            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="lastName" id="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
          </div>
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="email">Email</label>
            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="email" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="password">Password</label>
            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="password" name="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          </div>
          
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="department">Department</label>
            <select className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" name="department" id="department" value={formData.department} onChange={handleChange}>
              <option value="">Select Department</option>
              {departments.map(department => (
                <option key={department.id} value={department.id}>{department.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="field">Field</label>
            <select className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" name="field" id="field" value={formData.field} onChange={handleChange}>
              <option value="">Select Field</option>
              {fields.map(field => (
                <option key={field.id} value={field.id}>{field.name}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Register</button>
        </form>
      </div>
    </div>
    </Layout>
   
  );
};

export default EditProf;

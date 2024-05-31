import React, { useState, useEffect } from 'react';
import Layout from '../../Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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

  const departments = [
    { id: 1, name: "Math Informatique" },
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

  useEffect(() => {
    fetchProfData();
  }, []);

  const params = useParams();

  const fetchProfData = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await axios.get(`http://localhost:8080/api/admin/profs/${params.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const prof = response.data;

      // Extracting data from the response
      const { department, user } = prof;

      // Now you can access properties of department and user objects
      console.log('Department:', department);
      console.log('User:', user);

      // Update the state with the received data
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        department: department.id.toString(), // Assuming you want to set department id as string
        field: '', // You need to set field based on your data structure
      });

      console.log('Prof data fetched successfully:', prof);
    } catch (error) {
      console.error('Error fetching prof data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProfInfo = {
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
    };
    console.log(updatedProfInfo);
    // Send the updatedProfInfo to the server to update the prof details
  };

  return (
    <Layout>
      <div className="h-screen bg-indigo-100 flex justify-center items-center">
        <div className="lg:w-2/5 md:w-1/2 w-2/3">
          <form className="bg-white p-10 rounded-lg shadow-lg min-w-full" onSubmit={handleSubmit}>
            <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Edit Prof id : {params.id}</h1>
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
              <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="password" name="password" id="password" placeholder="Password"  onChange={handleChange} />
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
            <button type="submit" className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Update</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default EditProf;

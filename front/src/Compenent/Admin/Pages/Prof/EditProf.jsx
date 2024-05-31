import React, { useState, useEffect } from 'react';
import Layout from '../../Layout';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { fetchFields } from '../../../../api/Filed/FiledApi';

const EditProf = () => {
 
  const [professorData, setProfessorData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    fieldId: ''
  });

  const [fields, setFields] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getFields = async () => {
      try {
        const fieldsData = await fetchFields();
        setFields(fieldsData);
      } catch (error) {
        console.error('Error fetching fields:', error);
      }
    };

    getFields();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfessorData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const {id} = useParams()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const professorInfo = {
      password: professorData.password,
      firstName: professorData.firstName,
      lastName: professorData.lastName,
      email: professorData.email,
     
    };


    
    try {
      const token = localStorage.getItem('access_token');
      const response = await axios.put(`http://localhost:8080/api/auth/user/${id}`, professorInfo, {
      });
      console.log('Professor created successfully:', response.data);
      navigate('/success'); // Redirect to success page or show a success message
    } catch (error) {
      console.error('Error creating professor:', error);
    }
  };

  return (
    <Layout>
      <div className="h-screen bg-indigo-100 flex justify-center items-center">
        <div className="lg:w-2/5 md:w-1/2 w-2/3">
          <form className="bg-white p-10 rounded-lg shadow-lg min-w-full" onSubmit={handleSubmit}>
            <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Edit Professor</h1>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="firstName">First Name</label>
              <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="firstName" id="firstName" placeholder="First Name" value={professorData.firstName} onChange={handleChange} />
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="lastName">Last Name</label>
              <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="lastName" id="lastName" placeholder="Last Name" value={professorData.lastName} onChange={handleChange} />
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="email">Email</label>
              <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="email" name="email" id="email" placeholder="Email" value={professorData.email} onChange={handleChange} />
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="password">Password</label>
              <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="password" name="password" id="password" placeholder="Password" value={professorData.password} onChange={handleChange} />
            </div>
          
            <button type="submit" className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Edit</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default EditProf;

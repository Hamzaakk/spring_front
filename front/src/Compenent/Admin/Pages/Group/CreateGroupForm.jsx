import React, { useEffect, useState } from 'react';
import Layout from '../../Layout';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

const CreateGroupForm = () => {
  const [professors, setProfessors] = useState([]);
  const [formData, setFormData] = useState({
    groupName: '',
    professorIds: [],
  });
  const history = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const response = await axios.get('http://localhost:8080/api/professor/all', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProfessors(response.data);
      console.log('Data fetched successfully:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, options } = e.target;
    if (name === 'professorIds') {
      const selectedIds = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value);
      setFormData({
        ...formData,
        [name]: selectedIds,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('access_token');
      const response = await axios.post(
        'http://localhost:8080/api/group/create',
        {
          name: formData.groupName,
          profIds: formData.professorIds.map(id => parseInt(id)),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log( {
        name: formData.groupName,
        profIds: formData.professorIds.map(id => parseInt(id, 10)),
      })
      console.log('Group created successfully:', response.data);
      history('/success'); // Redirect to modules page after success
    } catch (error) {
      console.error('Error creating group:', error);
    }
  };

  return (
    <Layout>
      <div className="h-screen bg-indigo-100 flex justify-center items-center">
        <div className="lg:w-2/5 md:w-1/2 w-2/3">
          <form className="bg-white p-10 rounded-lg shadow-lg min-w-full" onSubmit={handleSubmit}>
            <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Create Group</h1>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="groupName">
                Group Name
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="groupName"
                id="groupName"
                placeholder="Group Name"
                value={formData.groupName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="professorIds">
                Professors
              </label>
              <select
                multiple
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                name="professorIds"
                id="professorIds"
                value={formData.professorIds}
                onChange={handleChange}
              >
                {professors.map((professor) => (
                  <option key={professor.id} value={professor.id}>
                    {professor.firstName} {professor.lastName}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
            >
              Create Group
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateGroupForm;

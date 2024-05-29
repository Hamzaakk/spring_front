import React, { useState } from 'react';
import Layout from '../../Layout';

const CreateGroupForm = () => {
  // Mock data for professors (replace with actual data from API or props)
  const [professors, setProfessors] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Jane', lastName: 'Smith' },
    // Add more professors as needed
  ]);

  const [formData, setFormData] = useState({
    groupName: '',
    professorIds: [], // For storing selected professor IDs
  });

  const handleChange = (e) => {
    const { name, options } = e.target;
    const selectedIds = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);
    setFormData({
      ...formData,
      [name]: selectedIds,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call onSubmit with form data
    // onSubmit(formData);
  };

  return (
    <Layout>
      <div className="h-screen bg-indigo-100 flex justify-center items-center">
        <div className="lg:w-2/5 md:w-1/2 w-2/3">
          <form className="bg-white p-10 rounded-lg shadow-lg min-w-full" onSubmit={handleSubmit}>
            <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Create Group</h1>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="groupName">Group Name</label>
              <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="groupName" id="groupName" placeholder="Group Name" value={formData.groupName} onChange={(e) => setFormData({ ...formData, groupName: e.target.value })} />
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="professorIds">Professors</label>
              <select multiple className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" name="professorIds" id="professorIds" value={formData.professorIds} onChange={handleChange}>
                {professors.map(professor => (
                  <option key={professor.id} value={professor.id}>{professor.firstName} {professor.lastName}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Create Group</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateGroupForm;

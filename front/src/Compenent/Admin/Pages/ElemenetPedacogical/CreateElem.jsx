import React, { useEffect, useState } from 'react';
import Layout from '../../Layout';
import { fetchFields } from '../../../../api/Filed/FiledApi'; // Import the API function

function CreateElem() {
  const [fields, setFields] = useState([]);
  const [ElemePedagogique, setElemPedagogique] = useState({
    title: '',
    prof_elem_id: '',
    prof_cordi_id: '',
    level_id: '',
    elem_type_id: ''
  });

  useEffect(() => {
    const getFields = async () => {
      const fieldsData = await fetchFields();
      setFields(fieldsData);
    };

    getFields();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setElemPedagogique(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ElemePedagogique);
  };

  return (
    <div>
      <Layout>
        <div className="h-screen bg-indigo-100 flex justify-center items-center">
          <div className="lg:w-2/5 md:w-1/2 w-2/3">
            <form className="bg-white p-10 rounded-lg shadow-lg min-w-full" onSubmit={handleSubmit}>
              <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Create Element Pedagogique</h1>
              <div>
                <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="title">Module</label>
                <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="title" id="title" placeholder="Name" value={ElemePedagogique.title} onChange={handleChange} />
              </div>
              <div>
                <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="prof_elem_id">Prof</label>
                <select className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" name="prof_elem_id" id="prof_elem_id" onChange={handleChange}>
                  <option value="">Select Prof</option>
                  {fields.map(field => (
                    <option key={field.id} value={field.id}>{field.filed_name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="level_id">Level</label>
                <select className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" name="level_id" id="level_id" onChange={handleChange}>
                  <option value="">Select Level</option>
                  {fields.map(field => (
                    <option key={field.id} value={field.id}>{field.filed_name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="elem_type_id">Type</label>
                <select className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" name="elem_type_id" id="elem_type_id" onChange={handleChange}>
                  <option value="">Select Type</option>
                  {fields.map(field => (
                    <option key={field.id} value={field.id}>{field.filed_name}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Register</button>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default CreateElem;

import React, { useState } from 'react';

const Modal = ({ modalClass, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    names: '',
    phone: '',
    id_number: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster ${modalClass}`}>
      <div className="border border-blue-500 shadow-lg modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold text-gray-500">Add Caretaker</p>
            <div className="modal-close cursor-pointer z-50" onClick={onClose}>
              <svg className="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
              </svg>
            </div>
          </div>
          <div className="my-5 mr-5 ml-5 flex justify-center">
            <form onSubmit={onSubmit} className="w-full">
              <div>
                <div>
                  <label htmlFor="names" className="text-md text-gray-600">Full Names</label>
                </div>
                <div>
                  <input type="text" id="names" autoComplete="off" name="names" value={formData.names} onChange={handleChange} className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md" placeholder="Example. John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="text-md text-gray-600">Phone Number</label>
                </div>
                <div>
                  <input type="text" id="phone" autoComplete="off" name="phone" value={formData.phone} onChange={handleChange} className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md" placeholder="Example. 0729400426" />
                </div>
                <div>
                  <label htmlFor="id_number" className="text-md text-gray-600">ID Number</label>
                </div>
                <div>
                  <input type="number" id="id_number" autoComplete="off" name="id_number" value={formData.id_number} onChange={handleChange} className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md" placeholder="Caretaker's ID number" />
                </div>
              </div>
            </form>
          </div>
          <div className="flex justify-end pt-2 space-x-14">
            <button className="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold" onClick={onClose}>Cancel</button>
            <button className="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400" onClick={() => onSubmit(formData)}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

 const AnimatedModal = ({ className }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleSubmit = (formData) => {
    // Your form submission logic here
    console.log(formData);
    closeModal();
  };

  return (
    <>
      <button onClick={openModal} className={`bg-blue-500 text-white p-2 rounded text-2xl font-bold ${className}`}>Open Modal</button>
      <Modal
        modalClass={showModal ? 'fadeIn' : 'fadeOut'}
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
    </>
  );
};


export default Modal;
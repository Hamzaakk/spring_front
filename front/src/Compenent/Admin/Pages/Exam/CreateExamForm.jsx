import React, { useState } from 'react';
import Layout from '../../Layout';

const CreateExamForm = () => {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    endDateExact: '',
    examTest: '',
    pv: '',
    rapport: '',
    roomId: '',
    profsSupervised: [],
    profCoordinatorId: '',
    adminMonitoringId: '',
    sessionId: '',
    examTypeId: '',
    semesterId: '',
    pedagogicalElementId: '',
  });

  // Sample data for professors, rooms, sessions, exam types, semesters, and pedagogical elements
  const [professors, setProfessors] = useState([
    { id: 1, name: 'Professor 1' },
    { id: 2, name: 'Professor 2' },
    // Add more professors as needed
  ]);

  const [rooms, setRooms] = useState([
    { id: 1, name: 'Room 1' },
    { id: 2, name: 'Room 2' },
    // Add more rooms as needed
  ]);

  // Sample data for sessions, exam types, semesters, and pedagogical elements
  const [sessions, setSessions] = useState([
    { id: 1, name: 'Session 1' },
    { id: 2, name: 'Session 2' },
    // Add more sessions as needed
  ]);

  const [examTypes, setExamTypes] = useState([
    { id: 1, name: 'Exam Type 1' },
    { id: 2, name: 'Exam Type 2' },
    // Add more exam types as needed
  ]);

  const [semesters, setSemesters] = useState([
    { id: 1, name: 'Semester 1' },
    { id: 2, name: 'Semester 2' },
    // Add more semesters as needed
  ]);

  const [pedagogicalElements, setPedagogicalElements] = useState([
    { id: 1, name: 'Pedagogical Element 1' },
    { id: 2, name: 'Pedagogical Element 2' },
    // Add more pedagogical elements as needed
  ]);

  const [adminMonitoring, setAdminMonitoring] = useState([
    { id: 1, name: 'dadi' },
    { id: 2, name: 'regragui' },
    // Add more pedagogical elements as needed
  ]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call onSubmit with form data
    // onSubmit(formData);
  };

  return (
    <Layout>
      <div className="h-screen  flex justify-center items-center">
        <div className="lg:w-2/5 md:w-1/2 w-2/3">
          <form className="bg-white p-10 rounded-lg shadow-lg min-w-full" onSubmit={handleSubmit}>
            <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Create Exam</h1>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="startDate">Start Date</label>
              <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="datetime-local" name="startDate" id="startDate" value={formData.startDate} onChange={handleChange} />
            </div>
            {/* Add more input fields for other exam details */}
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="sessionId">Session</label>
              <select className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" name="sessionId" id="sessionId" value={formData.sessionId} onChange={handleChange}>
                <option value="">Select Session</option>
                {sessions.map(session => (
                  <option key={session.id} value={session.id}>{session.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="examTypeId">Exam Type</label>
              <select className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" name="examTypeId" id="examTypeId" value={formData.examTypeId} onChange={handleChange}>
                <option value="">Select Exam Type</option>
                {examTypes.map(examType => (
                  <option key={examType.id} value={examType.id}>{examType.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="semesterId">Semester</label>
              <select className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" name="semesterId" id="semesterId" value={formData.semesterId} onChange={handleChange}>
                <option value="">Select Semester</option>
                {semesters.map(semester => (
                  <option key={semester.id} value={semester.id}>{semester.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="pedagogicalElementId">Pedagogical Element</label>
              <select className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" name="pedagogicalElementId" id="pedagogicalElementId" value={formData.pedagogicalElementId} onChange={handleChange}>
                <option value="">Select Pedagogical Element</option>
                {pedagogicalElements.map(element => (
                  <option key={element.id} value={element.id}>{element.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="pedagogicalElementId">Pedagogical Element</label>
              <select className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" name="pedagogicalElementId" id="pedagogicalElementId" value={formData.pedagogicalElementId} onChange={handleChange}>
                <option value="">Select professors for Monitoring</option>
                {professors.map(element => (
                  <option key={element.id} value={element.id}>{element.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="pedagogicalElementId">Pedagogical Element</label>
              <select className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" name="pedagogicalElementId" id="pedagogicalElementId" value={formData.pedagogicalElementId} onChange={handleChange}>
                <option value="">Select Admin for Monitoring</option>
                {adminMonitoring.map(element => (
                  <option key={element.id} value={element.id}>{element.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="pedagogicalElementId">Pedagogical Element</label>
              <select className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" name="pedagogicalElementId" id="pedagogicalElementId" value={formData.pedagogicalElementId} onChange={handleChange}>
                <option value="">Room</option>
                {rooms.map(element => (
                  <option key={element.id} value={element.id}>{element.name}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Create Exam</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateExamForm;

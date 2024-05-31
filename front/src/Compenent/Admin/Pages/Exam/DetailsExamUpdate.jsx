// import React, { useEffect, useState } from 'react'
// import Layout from '../../Layout'
// import { useNavigate, useParams } from 'react-router-dom';

// function DetailsExamUpdate() {
 

//   const params = useParams();
//   const [formData, setFormData] = useState({
//     startDate: "",
//     examTypeId: params.idType,
//     year: "",
//     sessionId: "",
//     pedagogicalElementId: params.idel,
//     monitoringList: [],
//   });

//   const [groupsData, setGroupsData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('access_token');
//     if (!token) {
//       navigate('/');
//     }

//     const fetchGroups = async () => {
//       try {
//         const data = await fetchGrou();
//         setGroupsData(data);
//       } catch (error) {
//         console.error('Error fetching group data:', error);
//       }
//     };

//     fetchGroups();
//   }, []);


//   const [sessions] = useState([
//     { id: 1, name: "Normale" },
//     { id: 2, name: "Rattrapage" },
//   ]);

//   const [rooms, setRooms] = useState([]);
 

//   useEffect(() => {
//     fetchRooms();
//   }, []);

//   const fetchRooms = async () => {
//     try {
//       const token = localStorage.getItem('access_token');
//       const response = await axios.get("http://localhost:8080/api/room/allRooms",
//      {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//      }
//       );
//       setRooms(response.data);
//       console.log("Rooms fetched successfully:", response.data);
//     } catch (error) {
//       console.error("Error fetching rooms:", error);
//     }
//   };

//   const handleChange = (e, index) => {
//     const { name, value } = e.target;
//     const updatedMonitoringList = [...formData.monitoringList];
//     updatedMonitoringList[index][name] = value;
//     setFormData({
//       ...formData,
//       monitoringList: updatedMonitoringList,
//     });
//   };

//   const handleAddMonitoring = () => {
//     setFormData({
//       ...formData,
//       monitoringList: [
//         ...formData.monitoringList,
//         {
//           roomId: "",
//           groupId: "",
//           profNumber: 0,
//         },
//       ],
//     });
//   };

//   const handleRemoveMonitoring = (index) => {
//     const updatedMonitoringList = [...formData.monitoringList];
//     updatedMonitoringList.splice(index, 1);
//     setFormData({
//       ...formData,
//       monitoringList: updatedMonitoringList,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData); // For testing purposes
//     // Call onSubmit with form data
//     // onSubmit(formData);


//     try {
//       const token = localStorage.getItem('access_token');
//       const response = await axios.post('http://localhost:8080/api/exam/create', formData, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       console.log('exam created successfully:', response.data);
//       navigate('/success'); // Redirect to success page or show a success message
//     } catch (error) {
//       console.error('Error creating exam:', error);
//     }
//   };

//   const getFilteredRooms = (index) => {
//     const selectedRooms = formData.monitoringList
//       .filter((_, i) => i !== index)
//       .map((monitoring) => monitoring.roomId);
//     return rooms.filter(
//       (room) => !selectedRooms.includes(room.id.toString())
//     );
//   };

//   const getFilteredGroups = (index) => {
//     const selectedGroups = formData.monitoringList
//       .filter((_, i) => i !== index)
//       .map((monitoring) => monitoring.groupId);
//     return groupsData.filter(
//       (group) => !selectedGroups.includes(group.id.toString())
//     );
//   };

//   return (
//     <Layout>
//       <div className="h-screen m-2 flex justify-center items-center">
//         <div>
//           <form
//             className="bg-white p-10 rounded-lg shadow-lg min-w-full"
//             onSubmit={handleSubmit}
//           >
//             <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
//               Create Exam departement id : {params.id}  , filier id : {params.idfil}  , elem id : {params.idel}  
//             </h1>
//             <div className="flex m-2 flex-wrap">
//               <div className="m-2">
//                 <label
//                   className="text-gray-800 font-semibold block my-3 text-md"
//                   htmlFor="startDate"
//                 >
//                   Start Date
//                 </label>
//                 <input
//                   className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
//                   type="datetime-local"
//                   name="startDate"
//                   id="startDate"
//                   value={formData.startDate}
//                   onChange={(e) =>
//                     setFormData({ ...formData, startDate: e.target.value })
//                   }
//                 />
//               </div>
//               <div className="m-2">
//                 <label
//                   className="text-gray-800 font-semibold block my-3 text-md"
//                   htmlFor="time"
//                 >
//                   Time
//                 </label>
//                 <input
//                   className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
//                   type="text"
//                   name="time"
//                   id="time"
//                   value={params.idType}
                 
        
//                 />
//                  <div className="m-2">
//                 <label
//                   className="text-gray-800 font-semibold block my-3 text-md"
//                   htmlFor="time"
//                 >
//                   Year
//                 </label>
//                 <input
//                   className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
//                   type="text"
//                   name="year"
//                   id="year"
                  
//                   onChange={(e) =>
//                     setFormData({ ...formData, year: e.target.value })
//                   }
        
//                 />
//               </div>
//               </div>
//               <div className="m-2">
//                 <label
//                   className="text-gray-800 font-semibold block my-3 text-md"
//                   htmlFor="sessionId"
//                 >
//                   Session
//                 </label>
//                 <select
//                   className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
//                   name="sessionId"
//                   id="sessionId"
//                   value={formData.sessionId}
//                   onChange={(e) =>
//                     setFormData({ ...formData, sessionId: e.target.value })
//                   }
//                 >
//                   <option value="">Select Session</option>
//                   {sessions.map((session) => (
//                     <option key={session.id} value={session.id}>
//                       {session.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//             {/* Monitoring List */}
//             {formData.monitoringList.map((monitoring, index) => (
//               <div key={index} className="m-2">
//                 <label
//                   className="text-gray-800 font-semibold block my-3 text-md"
//                   htmlFor={`roomId_${index}`}
//                 >
//                   Room {index + 1}
//                 </label>
//                 <select
//                   className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
//                   name="roomId"
//                   id={`roomId_${index}`}
//                   value={monitoring.roomId}
//                   onChange={(e) => handleChange(e, index)}
//                 >
//                   <option value="">Select Room</option>
//                   {getFilteredRooms(index).map((room) => (
//                     <option key={room.id} value={room.id}>
//                       {room.name}
//                     </option>
//                   ))}
//                 </select>
//                 <label
//                   className="text-gray-800 font-semibold block my-3 text-md"
//                   htmlFor={`groupId_${index}`}
//                 >
//                   Select Group
//                 </label>
//                 <select
//                   className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
//                   name="groupId"
//                   id={`groupId_${index}`}
//                   value={monitoring.groupId}
//                   onChange={(e) => handleChange(e, index)}
//                 >
//                   <option value="">Select Group</option>
//                   {getFilteredGroups(index).map((group) => (
//                     <option key={group.id} value={group.id}>
//                       {group.name}
//                     </option>
//                   ))}
//                 </select>
//                 <label
//                   className="text-gray-800 font-semibold block my-3 text-md"
//                   htmlFor={`nomberSupervised_${index}`}
//                 >
//                   Number Supervised
//                 </label>
//                 <input
//                   className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
//                   type="number"
//                   name="profNumber"
//                   id={`nomberSupervised_${index}`}
//                   value={monitoring.nomberSupervised}
//                   onChange={(e) => handleChange(e, index)}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => handleRemoveMonitoring(index)}
//                   className="mt-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
//                 >
//                   Remove Monitoring
//                 </button>
//               </div>
//             ))}
//             {/* Add Monitoring Button */}
//             <button
//               type="button"
//               onClick={handleAddMonitoring}
//               className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
//             >
//               Add Monitoring
//             </button>
//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
//             >
//               Create Exam
//             </button>
//           </form>
//         </div>
//       </div>
//     </Layout>
//   );
// };


// export default DetailsExamUpdate
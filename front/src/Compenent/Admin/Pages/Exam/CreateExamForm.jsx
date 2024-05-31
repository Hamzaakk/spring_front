import React, { useState } from "react";
import Layout from "../../Layout";

const CreateExamForm = () => {
  const [formData, setFormData] = useState({
    startDate: "",
    time: "",
    examTypeId: "",
    sessionId: "",
    pedagogicalElementId: "",
    monitoringList: [],
  });

  const [sessions] = useState([
    { id: 1, name: "Normale" },
    { id: 2, name: "Rattrapage" },
  ]);

  const [rooms] = useState([
    { id: 1, name: "Room 1" },
    { id: 2, name: "Room 2" },
  ]);

  const [groups] = useState([
    { id: 1, name: "A" },
    { id: 2, name: "B" },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedMonitoringList = [...formData.monitoringList];
    updatedMonitoringList[index][name] = value;
    setFormData({
      ...formData,
      monitoringList: updatedMonitoringList,
    });
  };

  const handleAddMonitoring = () => {
    setFormData({
      ...formData,
      monitoringList: [
        ...formData.monitoringList,
        {
          roomId: "",
          groupId: "",
          nomberSupervised: "",
        },
      ],
    });
  };

  const handleRemoveMonitoring = (index) => {
    const updatedMonitoringList = [...formData.monitoringList];
    updatedMonitoringList.splice(index, 1);
    setFormData({
      ...formData,
      monitoringList: updatedMonitoringList,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // For testing purposes
    // Call onSubmit with form data
    // onSubmit(formData);
  };

  const getFilteredRooms = (index) => {
    const selectedRooms = formData.monitoringList
      .filter((_, i) => i !== index)
      .map((monitoring) => monitoring.roomId);
    return rooms.filter(
      (room) => !selectedRooms.includes(room.id.toString())
    );
  };

  const getFilteredGroups = (index) => {
    const selectedGroups = formData.monitoringList
      .filter((_, i) => i !== index)
      .map((monitoring) => monitoring.groupId);
    return groups.filter(
      (group) => !selectedGroups.includes(group.id.toString())
    );
  };

  return (
    <Layout>
      <div className="h-screen m-2 flex justify-center items-center">
        <div>
          <form
            className="bg-white p-10 rounded-lg shadow-lg min-w-full"
            onSubmit={handleSubmit}
          >
            <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
              Create Exam
            </h1>
            <div className="flex m-2 flex-wrap">
              <div className="m-2">
                <label
                  className="text-gray-800 font-semibold block my-3 text-md"
                  htmlFor="startDate"
                >
                  Start Date
                </label>
                <input
                  className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                  type="datetime-local"
                  name="startDate"
                  id="startDate"
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                />
              </div>
              <div className="m-2">
                <label
                  className="text-gray-800 font-semibold block my-3 text-md"
                  htmlFor="time"
                >
                  Time
                </label>
                <input
                  className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                  type="number"
                  name="time"
                  id="time"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                />
              </div>
              <div className="m-2">
                <label
                  className="text-gray-800 font-semibold block my-3 text-md"
                  htmlFor="sessionId"
                >
                  Session
                </label>
                <select
                  className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                  name="sessionId"
                  id="sessionId"
                  value={formData.sessionId}
                  onChange={(e) =>
                    setFormData({ ...formData, sessionId: e.target.value })
                  }
                >
                  <option value="">Select Session</option>
                  {sessions.map((session) => (
                    <option key={session.id} value={session.id}>
                      {session.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* Monitoring List */}
            {formData.monitoringList.map((monitoring, index) => (
              <div key={index} className="m-2">
                <label
                  className="text-gray-800 font-semibold block my-3 text-md"
                  htmlFor={`roomId_${index}`}
                >
                  Room {index + 1}
                </label>
                <select
                  className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                  name="roomId"
                  id={`roomId_${index}`}
                  value={monitoring.roomId}
                  onChange={(e) => handleChange(e, index)}
                >
                  <option value="">Select Room</option>
                  {getFilteredRooms(index).map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name}
                    </option>
                  ))}
                </select>
                <label
                  className="text-gray-800 font-semibold block my-3 text-md"
                  htmlFor={`groupId_${index}`}
                >
                  Select Group
                </label>
                <select
                  className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                  name="groupId"
                  id={`groupId_${index}`}
                  value={monitoring.groupId}
                  onChange={(e) => handleChange(e, index)}
                >
                  <option value="">Select Group</option>
                  {getFilteredGroups(index).map((group) => (
                    <option key={group.id} value={group.id}>
                      {group.name}
                    </option>
                  ))}
                </select>
                <label
                  className="text-gray-800 font-semibold block my-3 text-md"
                  htmlFor={`nomberSupervised_${index}`}
                >
                  Number Supervised
                </label>
                <input
                  className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                  type="number"
                  name="nomberSupervised"
                  id={`nomberSupervised_${index}`}
                  value={monitoring.nomberSupervised}
                  onChange={(e) => handleChange(e, index)}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveMonitoring(index)}
                  className="mt-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
                >
                  Remove Monitoring
                </button>
              </div>
            ))}
            {/* Add Monitoring Button */}
            <button
              type="button"
              onClick={handleAddMonitoring}
              className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
            >
              Add Monitoring
            </button>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
            >
              Create Exam
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateExamForm;

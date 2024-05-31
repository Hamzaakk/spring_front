import axios from "axios";
import { useNavigate } from "react-router-dom";

//get All Admin
export const fetchDataAllAdmin = async () => {
  try {
    // Retrieve the token from local storage
    const token = localStorage.getItem("access_token");

    // Make the request with the Authorization header
    const response = await axios.get("http://localhost:8080/api/admin/admins", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Log and return the fetched data
    console.log("Data fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// creaet Admin

export const sendDatatoDatabase = async (adminInfo) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/auth/register",
      adminInfo,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Admin Created successfully:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error response from server:", error.response.data);
      console.error("Error status:", error.response.status);
      console.error("Error headers:", error.response.headers);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }
    console.error("Config:", error.config);
    throw error;
  }
};

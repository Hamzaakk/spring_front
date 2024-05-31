import axios from "axios";

//get All Profs
export const fetchData = async () => {
  try {
    // Retrieve the token from local storage
    const token = localStorage.getItem("access_token");

    // Make the request with the Authorization header
    const response = await axios.get(
      "http://localhost:8080/api/professor/all",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Log and return the fetched data
    console.log("Data fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// creaet prof

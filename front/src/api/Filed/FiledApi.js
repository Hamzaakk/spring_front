import axios from "axios";

export const fetchFields = async () => {
  try {
    const token = localStorage.getItem("access_token");
    const response = await axios.get(
      "http://localhost:8080/api/field/allFields",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching fields:", error);
    return [];
  }
};

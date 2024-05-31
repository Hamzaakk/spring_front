import axios from "axios";

export const fetchGrou = async () => {
  try {
    const token = localStorage.getItem("access_token");
    const response = await axios.get(
      "http://localhost:8080/api/admin/group/prof_groupsDto",
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

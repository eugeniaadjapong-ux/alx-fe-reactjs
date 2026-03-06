import axios from "axios";

const BASE_URL = "https://api.github.com";

export const searchUsers = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users?q=${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw error;
  }
};
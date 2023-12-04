import axios from "axios";

export const getUserData = async () => {
  try {
    const userId = sessionStorage.getItem('id');
    const res = await axios.get(`http://localhost:8080/user/${userId}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

import axios from "axios";

export const handleSignUp = async (id: string, pw: string, name: string) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:8080/signup',
        data: { id, pw, name },
        headers: { 'Content-Type': 'application/json' },
      });
  
      alert('회원가입 성공!');
      return response; // Return the entire response
  
    } catch (error) {
      throw error; // Rethrow the error for handling in the caller function
    }
  };
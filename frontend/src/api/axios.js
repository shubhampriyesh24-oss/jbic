import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Yeh aapke backend ka address hai
  withCredentials: true, // Yeh token aur cookies bhejney ke liye zaroori hai
});

export default instance;
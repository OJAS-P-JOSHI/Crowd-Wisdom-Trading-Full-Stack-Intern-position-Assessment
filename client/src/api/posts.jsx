import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://crowd-wisdom-trading-full-stack-intern-p-ojas-p-joshis-projects.vercel.app',
});

export default instance;

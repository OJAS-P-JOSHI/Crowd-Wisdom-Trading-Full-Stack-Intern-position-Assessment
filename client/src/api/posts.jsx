import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://crowd-wisdom-trading-full-stack-intern.onrender.com/',
});

export default instance;

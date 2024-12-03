import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://crowd-wisdom-trading-full-stack-intern-p-ojas-p-joshis-projects.vercel.app',
});

export default instance;

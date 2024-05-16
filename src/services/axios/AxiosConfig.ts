import axios from "axios";


const apiRequests = axios.create({
  baseURL: 'http://localhost:3100/',
})

export default apiRequests;
import axios from "axios";

const apiInstance = axios.create({
    baseURL : 'https://fir-todo-9862c-default-rtdb.firebaseio.com'
})

export default apiInstance;
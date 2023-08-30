import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: 'a2867b33929040f286daaa9b8d75e672'
    }
})
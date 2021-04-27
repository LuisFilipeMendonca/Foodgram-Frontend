import axios from "axios";

const port = process.env.REACT_APP_BACKEND_PORT || 3001;

export default axios.create({ baseURL: `http://localhost:${port}` });

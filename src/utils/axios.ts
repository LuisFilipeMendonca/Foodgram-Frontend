import axios from "axios";

const port = 3001;

export default axios.create({ baseURL: `http://localhost:${port}` });

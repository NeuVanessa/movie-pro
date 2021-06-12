import axios from "axios";

const api = axios.create({
  baseURL:"https://api.themoviedb.org/3",
});
///movie/550?api_key=2084a00f95fb3e4737567fae4e38ed85
export default api;

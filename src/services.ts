import axios from "axios";

export async function getClothes(endpoint: string) {
  const response = await axios.get(`http://localhost:8080/${endpoint}`);
  return response.data;
}

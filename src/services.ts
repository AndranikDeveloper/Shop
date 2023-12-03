import axios from 'axios';

export async function getClothes(endpoint: string) {
  const response = await axios.get(`https://fakestoreapi.com/${endpoint}`);
  return response.data;
}

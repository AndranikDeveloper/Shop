import axios from "axios";

export async function getClothes(endpoint: string, query: string = '') {
    const response = await axios.get(`https://fakestoreapi.com/${endpoint}/${query}`);
    return response.data;
}
  
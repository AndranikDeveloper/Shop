import { ICategoryData } from "./categories-types";

export interface IUsers {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: number;
  favorites: ICategoryData[];
  cart: ICategoryData[];
  address: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    country: string;
  };
}

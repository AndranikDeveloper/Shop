import React, { Dispatch, SetStateAction } from 'react';
import { ICategoryData } from './categories-types';

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

export interface IInputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
  type: string;
  styles: React.CSSProperties;
}

export interface ISignUpData {
  placeholder: string;
  type: string;
  styles: React.CSSProperties;
  text: string;
  component: (props: IInputProps) => React.ReactNode;
}

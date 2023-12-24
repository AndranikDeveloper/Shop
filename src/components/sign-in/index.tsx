import React, { useEffect, useState } from 'react';
import { IUsers } from '../../types/users-types';
import {
  InputStyled,
  SignButtonStyled,
  SignInBlockStyled,
  SignInStyled,
  SignInTitleStyled,
  SignUpLinkStyled,
} from './styled';
import axios from 'axios';
import { SignUp } from '../sign-up';
import { Input } from '../input';

interface IUsersData {
  users: IUsers[];
}

export const SignIn: React.FC<IUsersData> = ({ users }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [isUser, setIsUser] = useState<null | boolean>(null);

  async function submit() {
    const currentUser = users.find((user) => {
      return user.email === login && user.password === password;
    });
    if (currentUser) {
      await axios.post(`http://localhost:8080/currentUser`, currentUser);
    } else {
      setIsUser(false);
    }
    setLogin('');
    setPassword('');
  }

  const inputStyles = {
    padding: '10px',
    border: '1px solid gray',
    borderRadius: '10px',
    outline: 'none',
    borderColor: '#1877f2',
  };

  return (
    <>
      {isModal && <SignUp setIsModal={setIsModal} />}
      <SignInStyled>
        <SignInBlockStyled>
          <SignInTitleStyled>Sign In</SignInTitleStyled>
          <Input
            value={login}
            type='email'
            placeholder='Enter the Email'
            setValue={setLogin}
            styles={inputStyles}
          />
          <Input
            value={password}
            type='password'
            placeholder='Enter the Password'
            setValue={setPassword}
            styles={inputStyles}
          />
          <SignButtonStyled onClick={submit}>Sign In</SignButtonStyled>
          <SignUpLinkStyled href='#' onClick={() => setIsModal(true)}>
            Sign Up
          </SignUpLinkStyled>
        </SignInBlockStyled>
      </SignInStyled>
    </>
  );
};

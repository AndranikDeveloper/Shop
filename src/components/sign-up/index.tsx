import React, { useState } from 'react';
import {
  BackgroundStyled,
  CloseIconStyled,
  InputsBlockStyled,
  SignUpModalStyled,
  SignUpStyled,
} from './styled';
import { Input } from '../input';

interface ISignUpProps {
  setIsModal: (val: boolean) => void;
}

export const SignUp: React.FC<ISignUpProps> = ({ setIsModal }) => {
  const [signUpValue, setSignUpValue] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const stylesObj = {
    width: '100%',
  };
  return (
    <SignUpStyled>
      <BackgroundStyled onClick={() => setIsModal(false)}></BackgroundStyled>
      <SignUpModalStyled>
        <InputsBlockStyled>
          <div>
            <h6>Email</h6>
            <Input
              value={signUpValue}
              setValue={setSignUpValue}
              placeholder='Enter Your Email'
              styles={stylesObj}
              type='email'
            />
          </div>
          <div>
            <h6>Enter your new Password</h6>
            <Input
              value={signUpPassword}
              setValue={setSignUpPassword}
              placeholder='Create Your Password'
              styles={stylesObj}
              type='password'
            />
          </div>
          <div>
            <h6>Confirm Password</h6>
            <Input
              value={confirmPassword}
              setValue={setConfirmPassword}
              placeholder='Confirm Password'
              styles={stylesObj}
              type='password'
            />
          </div>
        </InputsBlockStyled>
        <CloseIconStyled onClick={() => setIsModal(false)} />
      </SignUpModalStyled>
    </SignUpStyled>
  );
};

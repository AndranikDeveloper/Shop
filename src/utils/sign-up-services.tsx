import { Input } from '../components/input';
import { IInputProps, ISignUpData } from '../types/users-types';

export const signUpData: ISignUpData[] = [
  {
    text: 'Email',
    placeholder: 'Enter Your Email',
    type: 'email',
    component: (props: IInputProps) => <Input {...props} />,
    styles: {
      width: '100%',
      borderColor: '#1877f2',
    },
  },
  {
    text: 'Password',
    placeholder: 'Enter Your Password',
    type: 'password',
    component: (props: IInputProps) => <Input {...props} />,
    styles: {
      width: '100%',
      borderColor: '#1877f2',
    },
  },
  {
    text: 'Confirm Password',
    placeholder: 'Confirm your new Password',
    type: 'password',
    component: (props: IInputProps) => <Input {...props} />,
    styles: {
      width: '100%',
      borderColor: '#1877f2',
    },
  },
];

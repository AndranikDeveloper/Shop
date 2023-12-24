import styled from 'styled-components';
import { IoMdCloseCircle } from 'react-icons/io';

export const SignUpStyled = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 2;
`;
export const BackgroundStyled = styled(SignUpStyled)`
  background: rgba(60, 59, 59, 0.8);
`;
export const SignUpModalStyled = styled.div`
  color: black;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 14px 28px;
  border-radius: 3px;
  min-width: 300px;
  height: 300px;
  z-index: 3;
`;

export const CloseIconStyled = styled(IoMdCloseCircle)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const InputsBlockStyled = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

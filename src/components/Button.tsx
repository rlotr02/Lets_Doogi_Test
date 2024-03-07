import React from 'react';
import styled from 'styled-components';

interface TButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<TButtonProps> = ({ text, ...props }) => {
  return <Btn {...props}>{text}</Btn>;
};

export default Button;

const Btn = styled.button`
  width: 238px;
  height: 64px;
  background-color: #f5f9ff;
  border: 1px solid #000000;
  border-radius: 20px;
  margin-bottom: 23px;

  font-family: GmarketSansMedium;
  font-weight: 500;
  font-size: 20px;
  color: #000000;

  transition: all 0.2s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

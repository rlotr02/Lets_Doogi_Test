import React from 'react';
import styled from 'styled-components';
import RightDoogi from '../assets/images/rightDoogi.png';

interface TSelectRightProps extends React.HTMLAttributes<HTMLDivElement> {
  text1: string;
}

const SelectRight: React.FC<TSelectRightProps> = ({ text1, ...props }) => {
  return (
    <Container>
      <BubbleWrap {...props}>
        <Bubble>{text1}</Bubble>
        <BubbleTail />
        <BubbleTailInner />
      </BubbleWrap>
      <img src={RightDoogi} alt="두기" />
    </Container>
  );
};

export default SelectRight;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 38px;

  > img {
    width: 108px;
    margin-top: 31px;
    margin-left: 14px;
  }
`;

const BubbleWrap = styled.div`
  position: relative;
  height: 61.28px;
`;

const Bubble = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 179px;
  height: 100%;
  border-radius: 100px;
  background: #ffffff;
  border: 1px solid #000000;
  z-index: 2;

  font-family: GmarketSansMedium;
  font-weight: 500;
  font-size: 15px;
  color: #000000;
`;

const BubbleTail = styled.div`
  position: absolute;
  z-index: 0;
  right: -2px;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 22px solid transparent;
  border-top: 18px solid #000000;
  transform: rotate(190deg);
`;

const BubbleTailInner = styled.div`
  position: absolute;
  z-index: 3;
  right: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 9px solid transparent;
  border-right: 10px solid transparent;
  border-top: 13px solid #ffffff;
  transform: rotate(190deg);
`;

import React from 'react';
import styled, { keyframes } from 'styled-components';

interface TSelectRightProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  img: string;
  delay: string;
}

const ResultRight: React.FC<TSelectRightProps> = ({
  text,
  img,
  delay,
  ...props
}) => {
  return (
    <Container $delay={delay}>
      <BubbleWrap {...props}>
        <Bubble>{text}</Bubble>
        <BubbleTail />
        <BubbleTailInner />
      </BubbleWrap>
      <img src={img} alt="두기" />
    </Container>
  );
};

export default ResultRight;

const slideInFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Container = styled.div<{ $delay: string }>`
  opacity: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 38px;
  animation: 1s ${slideInFromRight} ease-out;
  animation-delay: ${(props) => props.$delay || '0s'};
  animation-fill-mode: forwards;

  > img {
    height: 104px;
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

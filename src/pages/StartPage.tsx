import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { pageState } from '../assets/recoil';
import Button from '../components/Button';
import SelectRight from '../components/SelectRight';
import SelectLeft from '../components/SelectLeft';
import KakaoAdfit1 from '../assets/KakaoAdfit/KakaoAdfit1';
import KakaoAdfit2 from '../assets/KakaoAdfit/KakaoAdfit2';
import KakaoAdfit3 from '../assets/KakaoAdfit/KakaoAdfit3';
import Information from '../components/Information';

const StartPage: React.FC = () => {
  const setPage = useSetRecoilState(pageState);

  return (
    <>
      <Container>
        <div>
          <h1>두기가되</h1>
          <SelectRight text1="내가 두기가 된다면?" />
          <SelectLeft text2="키야~ 궁금한데?" />
          <Button text="두기 되러 가기" onClick={() => setPage(1)} />
          <KakaoAdfit3 />
        </div>
        <KakaoAdfitDiv1>
          <KakaoAdfit1 />
        </KakaoAdfitDiv1>
        <KakaoAdfitDiv2>
          <KakaoAdfit2 />
        </KakaoAdfitDiv2>
      </Container>
      <Information />
    </>
  );
};

export default StartPage;

const Container = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  > div {
    @media screen and (min-width: 750px) {
      transform: scale(1.15);
    }

    @media screen and (max-height: 700px) {
      transform: scale(0.9);
    }
  }

  > div > h1 {
    font-family: GmarketSansBold;
    font-weight: 700;
    font-size: 40px;
    letter-spacing: 0.1em;
    color: #000000;
    margin-bottom: 46px;
  }
`;

const KakaoAdfitDiv1 = styled.div`
  position: absolute;
  margin-right: 700px;
`;

const KakaoAdfitDiv2 = styled.div`
  position: absolute;
  margin-left: 700px;
`;

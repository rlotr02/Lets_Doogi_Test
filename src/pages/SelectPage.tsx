import React, { useState } from 'react';
import styled from 'styled-components';
import { pageState, resultState } from '../assets/recoil';
import { useSetRecoilState } from 'recoil';
import QuestionJson from '../assets/api/Question.json';
import SelectRight from '../components/SelectRight';
import SelectLeft from '../components/SelectLeft';
import KakaoAdfit1 from '../assets/KakaoAdfit/KakaoAdfit1';
import KakaoAdfit2 from '../assets/KakaoAdfit/KakaoAdfit2';
import KakaoAdfit3 from '../assets/KakaoAdfit/KakaoAdfit3';
import Information from '../components/Information';

const SelectPage: React.FC = () => {
  const setPage = useSetRecoilState(pageState);
  const setResult = useSetRecoilState(resultState);
  const [num, setNum] = useState(0);

  const nextSlide = (type: number) => {
    if (type === 0) {
      setNum(num + 1);
    } else {
      setResult(type);
      setPage(2);
    }
  };

  return (
    <>
      <Container>
        <div>
          <Question>
            {QuestionJson[num].question} <br />
            당신은 어떻게 할 것인가?
          </Question>
          <SelectRight
            onClick={() => nextSlide(QuestionJson[num].answers[0].type)}
            style={{ cursor: 'pointer' }}
            text1={QuestionJson[num].answers[0].answer}
          />
          <SelectLeft
            onClick={() => nextSlide(QuestionJson[num].answers[1].type)}
            style={{ cursor: 'pointer' }}
            text2={QuestionJson[num].answers[1].answer}
          />
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

export default SelectPage;

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
  white-space: pre-line;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 750px) {
      transform: scale(1.2);
    }

    @media screen and (max-height: 700px) {
      transform: scale(0.9);
    }
  }
`;

const Question = styled.div`
  font-family: GmarketSansMedium;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #000000;

  margin-bottom: 49px;
`;

const KakaoAdfitDiv1 = styled.div`
  position: absolute;
  margin-right: 700px;
`;

const KakaoAdfitDiv2 = styled.div`
  position: absolute;
  margin-left: 700px;
`;

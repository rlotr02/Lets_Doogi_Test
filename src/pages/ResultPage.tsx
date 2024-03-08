import React, { useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { pageState, resultState } from '../assets/recoil';
import ResultJson from '../assets/api/Result.json';
import { RESULT_IMAGES, TRUE_RESULT_IMAGES } from '../assets/image';
import Button from '../components/Button';
import SelectRight from '../components/SelectRight';
import SelectLeft from '../components/SelectLeft';
import ResultRight from '../components/ResultRight';
import ResultLeft from '../components/ResultLeft';
import KakaoAdfit1 from '../assets/KakaoAdfit/KakaoAdfit1';
import KakaoAdfit2 from '../assets/KakaoAdfit/KakaoAdfit2';
import KakaoAdfit3 from '../assets/KakaoAdfit/KakaoAdfit3';
import Information from '../components/Information';

const ResultPage: React.FC = () => {
  const setPage = useSetRecoilState(pageState);
  const result = useRecoilValue(resultState);

  useEffect(() => {
    let scrollInterval: NodeJS.Timeout | null = null;
    let stopTimeout: NodeJS.Timeout | null = null;

    const stopScrolling = () => {
      if (stopTimeout) {
        clearTimeout(stopTimeout);
      }

      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };

    if (result === 7) {
      const startTimeout = setTimeout(
        () => {
          scrollInterval = setInterval(() => {
            const scrollAmount = window.innerWidth >= 750 ? 250 : 150;
            window.scrollBy(0, scrollAmount);
          }, 1000);

          stopTimeout = setTimeout(() => {
            if (scrollInterval) {
              clearInterval(scrollInterval);
            }
          }, 9000);
        },
        window.innerWidth >= 750 ? 1000 : 2000,
      );

      window.addEventListener('mousedown', stopScrolling);
      window.addEventListener('touchstart', stopScrolling);

      return () => {
        clearTimeout(startTimeout);
        if (stopTimeout) {
          clearTimeout(stopTimeout);
        }
        if (scrollInterval) {
          clearInterval(scrollInterval);
        }

        window.removeEventListener('mousedown', stopScrolling);
        window.removeEventListener('touchstart', stopScrolling);
      };
    }
  }, [result]);

  return (
    <>
      <Container>
        <div>
          {result === 7 ? (
            <>
              <p>
                당신은 두기의 유혹을 모두 피했습니다.
                <br />
                당신은...
              </p>
              <ResultRight
                text="내가 두기가 된다면?"
                img={TRUE_RESULT_IMAGES[0]}
                delay="1s"
              />
              <ResultLeft
                text="내가 두기가 된다면?"
                img={TRUE_RESULT_IMAGES[1]}
                delay="2s"
              />
              <ResultRight
                text="내가 두기가 된다면?"
                img={TRUE_RESULT_IMAGES[2]}
                delay="3s"
              />
              <ResultLeft
                text="내가 두기가 된다면?"
                img={TRUE_RESULT_IMAGES[3]}
                delay="4s"
              />
              <ResultRight
                text="내가 두기가 된다면?"
                img={TRUE_RESULT_IMAGES[4]}
                delay="5s"
              />
              <ResultLeft
                text="내가 두기가 된다면?"
                img={TRUE_RESULT_IMAGES[5]}
                delay="6s"
              />
              <Text>모든 두기의 왕 "두기가되"</Text>
            </>
          ) : (
            <>
              <SelectRight text1="내가 두기가 된다면?" />
              <SelectLeft text2={ResultJson[result - 1].toString()} />
            </>
          )}
          <Img
            src={RESULT_IMAGES[result - 1]}
            alt={ResultJson[result - 1].toString()}
            $result={result}
          />
          <ImgDownload
            href={RESULT_IMAGES[result - 1]}
            download={ResultJson[result - 1].toString()}
            $result={result}
          >
            두기 저장하기
          </ImgDownload>
          <Button
            text="다른 두기 되러 가기"
            onClick={() => {
              setPage(0);
            }}
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

export default ResultPage;

const bigAni = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const rotateAndGrow = keyframes`
  0% {
    opacity: 0;
    transform: rotate(0deg) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: rotate(360deg) scale(1);
  }
`;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  text-align: center;
  white-space: pre-line;

  > div {
    margin-top: 30px;
    width: 342px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 750px) {
      margin-top: 54px;
      zoom: 1.5;
    }
  }

  > div > p {
    margin-bottom: 46px;

    font-family: GmarketSansMedium;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #000000;
  }
`;

const Img = styled.img<{ $result: number }>`
  width: 320px;
  opacity: ${(props) => (props.$result === 7 ? 0 : 1)};
  animation: ${(props) =>
    props.$result === 7 ? css`1s ${rotateAndGrow} ease-out` : ''};
  animation-delay: ${(props) => (props.$result === 7 ? '8s' : '0s')};
  animation-fill-mode: forwards;
`;

const Text = styled.div`
  opacity: 0;
  animation: 1s ${bigAni} ease-out;
  animation-delay: 7s;
  animation-fill-mode: forwards;

  margin: 20px 0 10px;

  font-family: GmarketSansMedium;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #000000;
`;

const ImgDownload = styled.a<{ $result: number }>`
  margin-top: 8px;
  margin-bottom: 21px;
  text-decoration: none;

  font-family: GmarketSansMedium;
  font-weight: 500;
  font-size: 15px;
  color: #434343;

  opacity: ${(props) => (props.$result === 7 ? 0 : 1)};
  animation: ${(props) =>
    props.$result === 7 ? css`1s ${bigAni} ease-out` : ''};
  animation-delay: ${(props) => (props.$result === 7 ? '9s' : '0s')};
  animation-fill-mode: forwards;
`;

const KakaoAdfitDiv1 = styled.div`
  position: absolute;
  margin-right: 550px;
`;

const KakaoAdfitDiv2 = styled.div`
  position: absolute;
  margin-left: 550px;
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import { RiCloseFill } from 'react-icons/ri';
import RightDoogi from '../assets/images/rightDoogi.png';

const Information: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {!visible && (
        <Btn
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <img src={RightDoogi} alt="logo" />
        </Btn>
      )}
      {visible && (
        <InFoDiv id="informationdiv">
          <Div>
            <div>
              <img src={RightDoogi} alt="logo" />
            </div>
            <p>두기가되</p>
            <button
              onClick={() => {
                setVisible(!visible);
              }}
            >
              <RiCloseFill size="1x" color="#a1bbe0" />
            </button>
          </Div>
          <LinkA
            href="https://github.com/rlotr02"
            target="_blank"
            rel="noreferrer"
          >
            개발자 GITHUB 바로가기
          </LinkA>
          <LinkA
            href="https://www.instagram.com/rlotr.dev"
            target="_blank"
            rel="noreferrer"
          >
            개발자 인스타그램 바로가기
          </LinkA>
          <h4>ⓒ 2024. rlotr02 All rights reserved.</h4>
        </InFoDiv>
      )}
    </div>
  );
};

export default Information;

const Btn = styled.button`
  position: fixed;
  width: 6.25em;
  height: 6.25em;
  border: none;
  border-radius: 6.25em;
  bottom: 1.875em;
  right: 2.1875em;
  background: #f5f9ff;
  box-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.119);

  @media (max-width: 480px) {
    width: 5em;
    height: 5em;
    padding: 0.9em;
  }

  img {
    width: 4.5em;
    margin-top: 0.5em;
    margin-left: 0.25em;

    @media (max-width: 480px) {
      width: 4em;
      margin-top: -0.2em;
      margin-left: -0.32em;
    }
  }
`;

const InFoDiv = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 1.875em;
  right: 2.1875em;

  background: #f5f9ff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.119);
  border-radius: 50px;

  animation: fadeIn 0.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    width: 330px;
  }

  @media (max-width: 365px) {
    border-radius: 40px;
    width: 268px;
  }

  h4 {
    font-family: 'GmarketSansLight';
    font-size: 15px;
    font-weight: 300;
    color: #acc1df;
    margin-bottom: 34px;

    @media (max-width: 480px) {
      font-size: 13px;
      margin-bottom: 27px;
    }

    @media (max-width: 365px) {
      font-size: 10px;
      margin-bottom: 20px;
    }
  }
`;

const Div = styled.div`
  display: flex;

  div {
    margin: 32px 15px 31px 36px;
    width: 63px;
    height: 63px;

    background: #f5f9ff;
    border-radius: 100px;

    @media (max-width: 480px) {
      margin: 25px 15px 20px 20px;
      width: 55px;
      height: 55px;
    }

    @media (max-width: 365px) {
      margin: 25px 10px 15px 20px;
      width: 40px;
      height: 40px;
    }
  }

  img {
    width: 58px;
    margin: 4px;

    @media (max-width: 480px) {
      width: 50px;
      margin: 3px;
    }

    @media (max-width: 365px) {
      width: 36px;
    }
  }

  p {
    margin-right: 190px;
    margin-top: 45px;
    font-family: 'GmarketSansBold';
    font-weight: 700;
    font-size: 30px;
    color: #98b2d7;

    @media (max-width: 480px) {
      margin-right: 130px;
      margin-top: 35px;
      font-size: 26px;
    }

    @media (max-width: 365px) {
      margin-right: 120px;
      margin-top: 33px;
      font-size: 20px;
    }
  }

  button {
    position: absolute;
    right: 0;
    margin-top: 28px;
    margin-right: 20px;
    width: 53px;
    background: transparent;
    border: none;

    @media (max-width: 480px) {
      width: 50px;
    }

    @media (max-width: 365px) {
      width: 40px;
      margin-top: 20px;
      margin-right: 15px;
    }
  }
`;

const LinkA = styled.a`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 334px;
  height: 80px;

  background: #becee5;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.119);
  border: none;
  border-radius: 30px;

  font-family: 'GmarketSansBold';
  font-weight: 700;
  font-size: 20px;
  color: #6b89b3;
  text-decoration: none;

  @media (max-width: 480px) {
    margin-bottom: 25px;
    width: 280px;
    height: 75px;
    border-radius: 20px;
    font-size: 18px;
  }

  @media (max-width: 365px) {
    margin-bottom: 20px;
    width: 240px;
    height: 60px;
    border-radius: 15px;
    font-size: 16px;
  }
`;

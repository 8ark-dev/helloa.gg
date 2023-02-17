import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import awsconfig from "../../service/awsconfig";

import { Amplify, Auth } from "aws-amplify";

import "@aws-amplify/ui-react/styles.css";
import styled from "styled-components";

Amplify.configure(awsconfig);

export default function Register() {
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickName] = useState("");
  const [phone, setPhone] = useState("");

  //에러메시지 상태 state저장
  const [useridMessage, setUserIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState();
  const [phoneMessage, setPhoneMessage] = useState();
  const [nicknameMessage, setNickNameMessage] = useState();

  // 유효성 검사
  const [ispassword, setIsPassword] = useState("");

  const navigate = useNavigate("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await Auth.signUp({
        username: userid, //로아 닉네임
        password, // 비밀번호
        attributes: {
          name: nickname, // optional
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      alert(userid + "님, 가입이 완료되었습니다!");

      navigate("/login");
    } catch (error) {
      console.log("error signing up:", error);
    }
  };
  return (
    <Container>
      <LogoContainer
        onClick={() => {
          navigate("/");
        }}
      >
        <LogoImg alt="Helloa logo" src="/img/logo_lostark.jpeg" />
        <LogoText>
          <strong>Helloa</strong>.gg
        </LogoText>
      </LogoContainer>

      <RegisterContainer>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              value={nickname}
              className={"input-txt " + (nickname && "white")}
              onChange={(e) => {
                setNickName(e.target.value);
              }}
              placeholder="로스트아크 캐릭터 명"
            />
            <div>
              <input
                value={userid}
                className={"input-txt " + (userid && "white")}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="이메일"
              />
              <button>인증메일 발송</button>
            </div>
            <input
              value={phone}
              className={"input-txt " + (phone && "white")}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="휴대폰 번호(숫자만)"
            />
            <input
              value={password}
              className={"input-txt " + (password && "white")}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
            />
            <input
              value={ispassword}
              className={"input-txt " + (ispassword && "white")}
              onChange={(e) => setIsPassword(e.target.value)}
              placeholder="비밀번호 확인"
            />

            <AgreeContainer>
              <div>
                <input type="radio" />
                전체 동의
              </div>
              <div>
                <input type="radio" />
                서비스 이용약관 동의(필수)
              </div>
              <div>
                <input type="radio" />
                개인정보 수집 및 이용 동의(필수)
              </div>
              <div>
                <input type="radio" />만 14세 이상입니다 (필수)
              </div>
              <div>
                <input type="radio" />
                마케팅 수신 동의 (선택)
              </div>
            </AgreeContainer>

            <button
              type="submit"
              className={
                "input-btn " +
                (password &&
                  userid &&
                  nickname &&
                  phone &&
                  ispassword &&
                  "white")
              }
            >
              회원가입하기
            </button>
          </form>
        </div>
      </RegisterContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20.83%;
  height: 74.07%;

  display: flex;

  justify-content: center;
  align-items: center;

  flex-direction: column;

  border-radius: 20px;

  background-color: rgba(20, 23, 31, 0.7);

  @media screen and (max-width: 500px) {
    width: 82%;
    justify-content: flex-start;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 5.3%;

  display: flex;

  justify-content: center;
  align-items: center;

  margin-top: 3.7%;

  & > div {
    margin-left: 1%;
  }

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const LogoImg = styled.img`
  width: 10.6%;
  height: 100%;

  border-radius: 8.5px;

  object-fit: contain;
`;

const LogoText = styled.div`
  width: 46.6%;
  height: 100%;

  font-size: 1.8rem;

  display: flex;

  justify-content: center;
  align-items: center;

  color: #8a8a8a;
  font-weight: bold;

  & > strong {
    color: #fff;
  }
`;

const RegisterContainer = styled.div`
  width: 85%;
  height: 85%;

  display: flex;

  justify-content: flex-start;
  align-items: center;

  flex-direction: column;

  border-radius: 20px;
  background-color: rgba(30, 40, 52, 0.9);

  margin-top: 2.6%;
  padding-top: 5%;

  & > div {
    width: 100%;
    height: 95%;

    display: flex;

    justify-content: center;
    align-items: center;
  }

  & > div > form {
    width: 88.2%;
    height: 100%;

    display: flex;

    justify-content: space-around;
    align-items: center;

    flex-direction: column;
  }

  & > div > form > div {
    width: 100%;
    height: 8%;

    display: flex;

    justify-content: space-between;
    align-items: center;

    & button {
      width: 34%;
      height: 50%;

      border: none;
      border-radius: 7.5px;

      background-color: white;

      font-size: 0.6rem;

      box-sizing: border-box;

      margin-left: 1%;
    }

    & input.input-txt {
      width: 65%;
      height: 100%;

      background-color: inherit;

      border: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.7);

      color: white;

      margin-bottom: 8.1%;
      &:focus {
        outline: none;
      }

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.7rem;
      }

      &.white {
        border-bottom: 1px solid rgba(255, 255, 255, 1);
      }
    }
  }

  & input.input-txt {
    width: 100%;
    height: 8%;

    background-color: inherit;

    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);

    color: white;

    margin-bottom: 8.1%;
    &:focus {
      outline: none;
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.7rem;
    }

    &.white {
      border-bottom: 1px solid rgba(255, 255, 255, 1);
    }
  }

  & *.input-btn {
    width: 100%;
    height: 8%;

    display: flex;

    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 7.35px;

    background-color: #161922;

    font-size: 0.7rem;
    font-weight: bold;

    color: rgba(255, 255, 255, 0.7);

    margin-bottom: 6.7%;

    &:hover {
      cursor: pointer;
    }

    &.white {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

const AgreeContainer = styled.div`
  width: 100%;
  height: auto;

  padding-bottom: 10.5%;

  display: flex;

  justify-content : space-around;

  flex-direction: column;

  color: rgba(255,255,255,0.7);
  font-weight: bold;
  font-size: 0.7rem;

  &:has(input[type="radio"]:checked) {
    color: white;
  }

  & div {
    width : 100%;
    height: 20%;
  }

  & > div:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
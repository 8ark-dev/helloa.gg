import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import DDLogin from "../util/Dropdown/DDLogin";

import awsconfig from "../../service/awsconfig";

import { Amplify, Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

import styled from "styled-components";

Amplify.configure(awsconfig);

export default function Header() {
  const navigate = useNavigate();
  const [view, setView] = useState();

  const nickname = window.sessionStorage.getItem('nickname');

  useEffect(() => {
    console.log(nickname);
  }, [nickname]);

  const handleView = () => {
    setView(!view);
  };

  return (
    <Container>
      <div>
        <LogoContainer
          onClick={() => {
            navigate("/");
          }}
        >
          <LogoImg
            alt="Helloa logo"
            src="/img/logo_lostark.jpeg"
            className="header__logo"
          />

          <div>
            <strong>Helloa</strong>.gg
          </div>
        </LogoContainer>

        {nickname ? (
          <LoginContainer onClick={handleView}>
            <LoggedImg
              alt="User logged"
              src="/img/arkana.png" //캐릭터 사진 가져오기}
            />

            <NickNameContainer>
              <strong>{nickname}</strong> 님
            </NickNameContainer>
            {view ? (
              <DropDownArrow/>
            ) : (
              <DropDownArrow className="reversed"/>
            )}
            {view && <DDLogin />}
          </LoginContainer>
        ) : (
          <BfLoginContainer
            onClick={() => {
              navigate("/login");
            }}
          >
            <strong>로그인</strong>
          </BfLoginContainer>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 4.6%;

  display: flex;

  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  background-color: #2e3341;

  box-shadow: 0 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  & > div {
    width: 89.2%;
    height: 100%;

    display: flex;

    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const BfLoginContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;

  justify-content: flex-end;
  align-items: center;

  color: white;

  font-size: 0.5rem;

  &:hover {
    opacity: 80;
    cursor: pointer;
  }
`;
const LogoContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;

  justify-content: flex-start;
  align-items: center;

  color: white;

  & > div {
    margin-left: 1%;
  }

  &:hover {
    cursor: pointer;

    & > div {
      opacity: 80%;
    }
  }
`;

const LogoImg = styled.img`
  width: 6.1%;
  height: 50%;

  object-fit: contain;
`;

const LoginContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  position: relative;

  justify-content: flex-end;
  align-items: center;

  color: white;

  & > div {
    font-size: 0.5rem;
  }
`;

const LoggedImg = styled.img`
  width: 6.1%;
  height: 50%;

  border-radius: 50%;

  object-fit: contain;

  margin: 0 1%;
`;

const NickNameContainer = styled.div`
  width: 14.6%;
  height: 100%;

  display: flex;

  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  & strong {
    margin-right: 5%;
  }
`;

const DropDownArrow = styled.div`
  width: 2.4%;
  height: 20%;

  opacity: 70%;

  background-image: url("/icon/dropdown.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  box-sizing: border-box;

  transform: rotate(180deg);
  &.reversed {
    transform: rotate(0deg);
  }

  &:hover {
    cursor:pointer;
  }
`;

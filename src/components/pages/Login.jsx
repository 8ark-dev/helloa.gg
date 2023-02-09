import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

export default function Login() {
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const  handleSubmit = () => {
    // auth.login(userId, password).then((res) => {
    //   console.log(res);
    //   if (res.resultcode === 1) {
    //     history.push("/");
    //   }
    // });
    {
      userid && window.sessionStorage.setItem("id", userid);
    }
    {
      password && window.sessionStorage.setItem("password", password);
    }
  }

  const handleRegister = () => {
    navigate('/register');
  }

  return (
    <Container>
      <input value={userid} onChange={(e) => setUserId(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>로그인</button>
      <button onClick={handleRegister}>회원가입</button>
    </Container>
  );
}

const Container = styled.div`
  width: 60%;
  height: 80vh;

  display: flex;

  justify-content: flex-start;
  align-items: center;

  flex-direction: column;

  border-right: 1px solid gray;
  border-left: 1px solid gray;
`;

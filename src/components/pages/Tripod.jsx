import React, { useState, useEffect } from "react";
import * as authAPI from "../../service/auth";

import styled from "styled-components";
import JobTripod from "../util/Tripod/JobTripod";
import TripodForm from "../util/Tripod/TripodForm";
import SkillForm from "../util/Tripod/SkillForm";

export default function Tripod() {
  const [curjob, setCurJob] = useState();
  const [curjobid, setCurJobId] = useState();
  const [curskill, setCurSkill] = useState([0, 0]);

  useEffect(() => {
    console.log("eff:",curskill)
  }, [curskill])

  const handleJobSelect = (value, id) => {
    setCurJob(value);
    setCurJobId(id);
  }

  const handleSkillSelect = (sk,lv)  => {
    setCurSkill([sk,lv]);
  }

  const handleTpSelect = () => {

  }

  // useEffect(() => {
  //   console.log(curjob);//상태값 변경 시 제대로 state가 변경되는지 확인
  // }, [curjob]);

  return (
    <Container>
      <InnerContainer>
        <JobTripod onJobSelected={handleJobSelect}/>
      </InnerContainer>
      
      <InnerContainer>
        <SkillForm onSkillSelected = {handleSkillSelect} curId = {curjobid}/>
      </InnerContainer>

      <InnerContainer>
        <TripodForm onTripodSelected ={handleTpSelect} curSkill = {curskill} />
      </InnerContainer>

      <ShareBtn onClick={() => {
        alert(curjob+"\n"+curskill)
      }}>공유</ShareBtn>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  height: 80vh;

  display: flex;

  justify-content: flex-start;
  align-items: center;

  color: white;

  border-right: 1px solid gray;
  border-left: 1px solid gray;
`;

const InnerContainer = styled.div`
`;


const ShareBtn = styled.button`
`

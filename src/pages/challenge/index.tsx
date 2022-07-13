// @ts-nocheck
import React, {useState} from "react"
import styled from "styled-components";
import { color } from "../../styles/const"
import { ContentDisplayer } from "../components/contentDisplayer";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

export const ChallengePage = () => {
const [data, setData] = useState({
    name: '',
    ip: ''
})

const nextStep = () => {
    return
}

const [step, setStep] = useState(0)
  const steps = ['challenge1', 'challenge2', "challenge3"]

    return (
        <ChallengeWrapper>
            <TimeLineWrapper>
            <div style={{width: '80%'}}>
            <Stepper activeStep={step}>
                {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: {
                    optional?: React.ReactNode;
                } = {};
                return (
                    <Step key={label} {...stepProps}>
                    <StepLabel StepIconProps={{style: {color: color.pinkLight}}} {...labelProps}>{label}</StepLabel>
                    </Step>
                );
                })}
            </Stepper>
            </div>
            </TimeLineWrapper>
            <ChallengeContent>
                <ContentDisplayerWrapper>
                    <ContentDisplayer setStep={setStep} step={step} nextStep={nextStep}>
                    </ContentDisplayer>
                </ContentDisplayerWrapper>
            </ChallengeContent>
        </ChallengeWrapper>
    );
}


  

const ContentDisplayerWrapper = styled.div`
    width: 700px;
`

const TimeLineWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 76px;
    width: 1264px;
    background-color: ${color.violetDark};
    border-radius: 5px;
`

const ChallengeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;   
    background-color: ${color.violetLight};
    gap: 20px;
`

const ChallengeContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1264px;
    height: 690px;
    background-color: ${color.violetDark};
    border-radius: 5px;
`;

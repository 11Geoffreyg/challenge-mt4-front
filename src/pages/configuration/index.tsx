// @ts-nocheck
import React, {useState} from "react"
import styled from "styled-components";
import { color, fontSize } from "../../styles/const"
import { TextField, Button } from '@mui/material';
import ArrowForward from "@mui/icons-material/ArrowForward";
import {CreateInstance} from '../../services/api'
import { ContentDisplayer } from "../components/contentDisplayer";
import { CoordonateStep } from '../configuration/steps/coordonates'
import { InstructionStep } from '../configuration/steps/instructions'
import { LetsplayStep } from '../configuration/steps/letsplay'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { styled as MUIStyled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

export const ConfigurationPage = () => {
const [data, setData] = useState({
    name: '',
    ip: ''
})
let navigate = useNavigate();
const [step, setStep] = useState(0)

const nextStep = (stepIndex) => {
    switch (step) {
      case 0:
        setStep(stepIndex || step + 1)
        break;
      case 1:
        CreateInstance(data)
        setStep(stepIndex || step + 1)
        break;
      case 2:
        navigate("../challenge")
        break;
      default:
        setStep(stepIndex || step + 1)
    }
  }

  const steps = ['Instructions', 'Coordonées personnelles', "Let's go !"]

    return (
        <ConfigurationWrapper>
            <TimeLineWrapper>
            <div style={{width: '80%'}}>
            <Stepper activeStep={step}>
                {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: {
                    optional?: React.ReactNode;
                } = {};
                return (
                    <Step key={label}  {...stepProps}>
                    <StepLabel StepIconProps={{style: {color: color.pinkLight}}} {...labelProps}>{label}</StepLabel>
                    </Step>
                );
                })}
            </Stepper>
            </div>
            </TimeLineWrapper>
            <ConfigurationContent>
                <ContentDisplayerWrapper>
                    <ContentDisplayer setStep={setStep} step={step} nextStep={nextStep}>
                        <InstructionStep />
                        <CoordonateStep setData={setData}/> 
                        <LetsplayStep />
                    </ContentDisplayer>
                </ContentDisplayerWrapper>
            </ConfigurationContent>
        </ConfigurationWrapper>
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

const ConfigurationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;   
    background-color: ${color.violetLight};
    gap: 20px;
`

const ConfigurationContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1264px;
    height: 690px;
    background-color: ${color.violetDark};
    border-radius: 5px;
`;

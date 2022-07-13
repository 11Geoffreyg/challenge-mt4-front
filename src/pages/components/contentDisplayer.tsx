// @ts-nocheck
import React, { useState } from 'react'
import styled from 'styled-components'
import { color } from '../../styles/const'
import { styled as MUIStyled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const ContentDisplayer = ({children, step, nextStep}) => {


    return (
      <Content>
        <Steps getStepPosition={-step * 100}>
          {children}
        </Steps>
      <BootstrapButton onClick={() => {nextStep()}} variant="contained" disableRipple>
        Next
      </BootstrapButton>
      </Content>
    )
}


const BootstrapButton = MUIStyled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  lineHeight: 1.5,
  marginTop: 20,
  backgroundColor: color.pinkLight,
  '&:hover': {
    backgroundColor: color.pinkLightHovered,
    boxShadow: 'none',
  },
});


const Steps = styled.div<{getStepPosition: number}>`
  display: flex;
  transition: all 0.3s ease-in-out 0s;
  transform: ${(props) => `translateX(${props.getStepPosition}%)`};
`

const Content = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 70%;
  width: 100%;
  background-color: ${color.violetDark};
  gap: 20px
`


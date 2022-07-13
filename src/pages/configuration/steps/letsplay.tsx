// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import { fontSize } from '../../../styles/const'

export const LetsplayStep = ({ setData }: any) => {
    return (
        <InstructionWrapper>
            <Title>Let's play !</Title>
            <Text>Bon courage ! 😜</Text>
        </InstructionWrapper>
    )
}

const Text = styled.p`
    color: white;
    font-size: ${fontSize.big};
`
  
const Title = styled.h1`
    margin: 0;
    color: white;
`

const InstructionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    flex-shrink: 0;
`
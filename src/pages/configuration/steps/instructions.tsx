// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import { fontSize } from '../../../styles/const'

export const InstructionStep = ({ setData }: any) => {
    return (
        <InstructionWrapper>
            <Title>Instructions</Title>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release o</Text>
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
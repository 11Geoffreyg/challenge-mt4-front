// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import { TextField, Button } from '@mui/material';
import { styled as MUIStyled } from '@mui/material/styles';
import { color } from '../../../styles/const'

export const CoordonateStep = ({ setData }: any) => {
    return (
        <CoordonateWrapper>
                <Title>Coordonées personnelles</Title>
                <BootstrapTextField 
                    color="primary" 
                    label="Ip"
                    variant='outlined'
                    name="ip"
                    onChange={(e) => {
                        setData(prev => ({
                            ...prev,
                            ip: e.target.value
                        }))
                    }}
                    />
                    <BootstrapTextField 
                    color="primary" 
                    label="Name"
                    variant='outlined'
                    name="name"
                    onChange={(e) => {
                        setData(prev => ({
                            ...prev,
                            name: e.target.value
                        }))
                    }}
                    />
        </CoordonateWrapper>
    )
}


const BootstrapTextField = MUIStyled(TextField)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    lineHeight: 1.5,
    marginTop: 20,
    backgroundColor: color.light.background1,
    borderRadius: 5,
    borderColor: color.pinkLight,
    "& label.Mui-focused": {
        color:  color.pinkLight
      },
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: color.pinkLight
        }
      },
    '&:hover': {
      borderColor: color.pinkLight,
      backgroundColor: '#FBD5DF',
      boxShadow: 'none',
    },
    '&:focus-within label': {
      top: -5,
    },
  });
  
const Title = styled.h1`
    margin: 0;
    color: white;
`

const CoordonateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    flex-shrink: 0;
`
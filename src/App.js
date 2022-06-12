import React from 'react'
import { GlobalStyles } from './GlobalStyles'
import styled from 'styled-components'

const Button = styled.button`
  border: none;
  outline: none;
  background-color: palevioletred;
  color: white;
  padding: 1rem 3rem;
  font-size: 2rem;
  border-radius: 10px;
  transition: transform 500ms ease;
  &:hover {
    transform: scale(1.2);
  }
  &::first-letter {
    font-size: 3rem;
  }
`

const Box = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 10px;
  margin: 1rem 0;
  background-color: ${({warna}) => warna};
`
export default function App() {
  return (
    <>
      <GlobalStyles/>
      <Button>Click Me!</Button>

      <Box warna='red' />
      <Box warna='green' />
      <Box warna='blue' />

    </>
  )
}

import React from 'react'
import { Container } from '@mui/material'
import BasicGrid from './components/layouts/BasicGrid'
import Result from './components/layouts/Result'

const App = () => {
  return (
    <Container maxWidth="sm" fixed>
      <BasicGrid/>
      <Result gold="500"/>
    </Container>
  )
}

export default App
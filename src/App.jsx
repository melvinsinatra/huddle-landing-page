import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Container } from './components/styles/Container.styled'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  }
}

function App() {

  return (
      <ThemeProvider theme = {theme}>
        <Header/>
            <Container>
        <h1>Hello world</h1>
            </Container>
      </ThemeProvider>
  )
}

export default App

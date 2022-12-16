import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import './styles/index.css'
import { BrowserRouter as Router } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Router>
    <ChakraProvider>
      <App />
    </ChakraProvider>

  </Router>

)

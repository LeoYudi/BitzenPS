import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { ConfigProvider } from 'antd'

import { Routes } from './routes.tsx'

import './global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00bbc4',
          colorLink: '#00bbc4',
          fontSize: 16,
          fontFamily: 'Poppins'
        }
      }}
    >
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
)

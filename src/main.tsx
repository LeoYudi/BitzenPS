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
          colorPrimary: '#13c2c2',
          colorLink: '#13c2c2',
          fontSize: 16
        }
      }}
    >
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
)

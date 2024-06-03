import { Typography } from 'antd';

import LogoIcon from 'assets/logo.svg?react';

import './styles.scss'

function Logo() {
  return <>
    <div className='logo-container'>
      <div className='logo'>
        <LogoIcon />
      </div>

      <Typography.Title level={2} className='logo-title'>Bitzen Pet</Typography.Title>
    </div >
  </>
}

export { Logo }
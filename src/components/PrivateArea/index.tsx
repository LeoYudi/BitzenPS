import { Outlet } from 'react-router-dom'

import useViewModel from './viewModel';
import { Logo } from 'components/Logo';
import { Col, Row } from 'antd';

function PrivateArea() {
  useViewModel();

  return <>
    <div className='header-container'>
      <Row>
        <Col span={18} offset={3}>
          <Logo />
        </Col>
      </Row>
    </div>
    <Outlet />
  </>;
}

export { PrivateArea }
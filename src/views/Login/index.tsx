import { Button, Card, Checkbox, Col, Form, Input, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';

import useViewModel from './viewModel';

import './styles.scss';
import { Logo } from 'components/Logo';

function Login() {
  const {
    messageContext,
    onSubmit
  } = useViewModel();

  return <>
    {messageContext}
    <Row className='login-page'>
      <Col span={12} offset={6}>
        <Card bordered={false} className='login-card'>
          <Logo />

          <Typography.Title level={2} className='title'>Entrar na plataforma</Typography.Title>

          <div className='signup-text'>
            <Typography.Text>Não tem uma conta? <Link to='/signup'>Cadastre-se gratuitamente</Link></Typography.Text>
          </div>

          <Form
            name='login'
            layout='vertical'
            onFinish={onSubmit}
          >
            <Form.Item
              label='Email'
              name='email'
              rules={[{ required: true, message: 'Obrigatório' }]}
            >
              <Input placeholder='Seu email' />
            </Form.Item>

            <Form.Item
              label='Senha'
              name='password'
              rules={[{ required: true, message: 'Obrigatório' }]}
            >
              <Input.Password placeholder='Sua senha' />
            </Form.Item>

            <Row gutter={[24, 0]}>
              <Col span={12}>
                <Form.Item
                  name='stay_logged'
                  valuePropName='checked'
                >
                  <Checkbox>
                    Manter conectado
                  </Checkbox>
                </Form.Item>
              </Col>

              <Col span={12} className='forgot-password'>
                <Link to=''>Esqueceu sua senha?</Link>
              </Col>
            </Row>

            <Button type='primary' className='submit-button' htmlType='submit'>
              Entrar na plataforma
            </Button>

          </Form>
        </Card>
      </Col>
    </Row>
  </>
}

export { Login };
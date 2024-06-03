import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

import useViewModel from './viewModel'

import './styles.scss'

function SignUp() {
  const navigate = useNavigate();
  const {
    messageContext,
    warningMessage,
    onSubmit
  } = useViewModel();

  return <>
    {messageContext}
    <Row className='signup-page'>
      <Col span={12} offset={6}>
        <Button
          type='text'
          className='back-button'
          icon={<ArrowLeftOutlined />}
          onClick={() => { navigate('/login') }}
        >
          Voltar
        </Button>

        <Typography.Title level={1} className='title'>Cadastre-se</Typography.Title>

        <div className='has-account'>
          <Typography.Text>Já possui uma conta? <Link to='/login'>Entrar na plataforma</Link></Typography.Text>
        </div>

        <Form
          name='signup'
          layout='vertical'
          onFinish={onSubmit}
          onFinishFailed={() => warningMessage('Parece que existem campos que precisam da sua atenção')}
        >
          <Form.Item
            label='Nome'
            name='name'
            rules={[{ required: true, message: 'Obrigatório' }]}
          >
            <Input placeholder='Seu nome' />
          </Form.Item>

          <Form.Item
            label='E-mail'
            name='email'
            rules={[{ required: true, message: 'Obrigatório' }]}
          >
            <Input placeholder='Insira seu e-mail' />
          </Form.Item>

          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item
                label='CPF'
                name='document'
                rules={[{ required: true, message: 'Obrigatório' }]}
              >
                <Input placeholder='Insira seu CPF' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='Telefone'
                name='phone_number'
                rules={[{ required: true, message: 'Obrigatório' }]}
              >
                <Input placeholder='Insira seu telefone' />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item
                label='Senha'
                name='password'
                rules={[{ required: true, message: 'Obrigatório' }]}
              >
                <Input.Password placeholder='Crie uma senha' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='Confirmar senha'
                name='password_confirmation'
                rules={[
                  { required: true, message: 'Obrigatório' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Este campo precisa ser igual a senha'));
                    },
                  }),
                ]}
              >
                <Input.Password placeholder='Repita a senha' />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name='terms_of_use'
            valuePropName='checked'
            rules={[{
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Obrigatório'))
            }]}
          >
            <Checkbox>
              Li e concordo com os <Typography.Link>Termos de uso</Typography.Link> e a <Typography.Link>Política de privacidade</Typography.Link> do sistema
            </Checkbox>
          </Form.Item>

          <Button type='primary' className='submit-button' htmlType='submit'>
            Criar conta
          </Button>

        </Form>

      </Col>
    </Row>
  </>
}

export { SignUp }
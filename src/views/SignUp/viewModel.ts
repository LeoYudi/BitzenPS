import { message } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signup, SignupPayloadType } from 'services/auth/signup';
import { CustomError } from 'utils/CustomError';
import { setAuthOnStorage } from 'utils/auth';

export default function useViewModel() {
  const [signupError, setSignupError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [messageApi, messageContext] = message.useMessage();
  const navigate = useNavigate();

  const errorMessage = () => {
    messageApi.open({
      type: 'error',
      content: 'Ops! Algo deu errado, tente novamente mais tarde',
    });
  };

  const warningMessage = (message: string) => {
    messageApi.open({
      type: 'warning',
      content: message,
    });
  };

  const onError = (error: CustomError) => {
    if (error.type === 'ERR_API') {
      warningMessage(error.apiErrors.message);
    }
    else {
      setSignupError(true);
      errorMessage()
    }
  }

  const onSubmit = async (payload: Record<string, any>) => {
    setLoading(true);

    const response = await signup(payload as SignupPayloadType);

    if (response.error) {
      onError(response.error);
    }
    else {
      setAuthOnStorage({ token: response.data.token, user: response.data.user })
      navigate('/home')
    }
    setLoading(false);
  }

  return {
    loading,
    messageContext,
    signupError,
    warningMessage,
    onSubmit
  }
}
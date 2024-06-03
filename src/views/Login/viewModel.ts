import { message } from 'antd';
import { useState } from 'react';

import { LoginPayloadType, login } from 'services/auth/login';

import { setAuthOnStorage } from 'utils/auth';
import { CustomError } from 'utils/CustomError';

export default function useViewModel() {
  const [loading, setLoading] = useState(false);

  const [messageApi, messageContext] = message.useMessage();

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
      errorMessage()
    }
  }

  const onSubmit = async (payload: Record<string, any>) => {
    setLoading(true);

    const response = await login(payload as LoginPayloadType);

    if (response.error) {
      onError(response.error);
    }
    else {
      setAuthOnStorage({ token: response.data.token, user: response.data.user })
    }
    setLoading(false);
  }

  return {
    loading,
    messageContext,
    onSubmit
  }
}
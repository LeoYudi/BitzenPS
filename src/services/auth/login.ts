import { CustomError } from '../../utils/CustomError';
import { api } from '../../utils/api';

type LoginPayloadType = {
  email: string,
  password: string,
}

const login = async (payload: LoginPayloadType): Promise<any> => {
  try {
    const response = await api.post('/login', payload);

    return response.data;
  } catch (error) {
    const err = (error as CustomError)
    if (err.type)
      return { error: err };

    return {
      error: { type: 'ERR_UNKNOWN' }
    };
  }
}

export { login }

export type { LoginPayloadType }
import { CustomError } from '../../utils/CustomError';
import { api } from '../../utils/api';

type SignupPayloadType = {
  name: string,
  email: string,
  document: string,
  phone_number: string,
  password: string,
  password_confirmation: string
}

const signup = async (payload: SignupPayloadType): Promise<any> => {
  try {
    const response = await api.post('/register', payload);

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

export { signup }

export type { SignupPayloadType }
import { CustomError } from '../../utils/CustomError';
import { api } from '../../utils/api';

const refreshToken = async (signal: AbortSignal): Promise<any> => {
  try {
    const response = await api.post('/refresh-token', {}, { signal });

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

export { refreshToken }
import { useEffect } from 'react';

import { auth, notAuthenticatedRedirect, setAuthOnStorage } from 'utils/auth';
import { CustomError } from 'utils/CustomError';

import { refreshToken } from 'services/auth/refreshToken';

export default function PrivateMenuViewModel() {

  const onPingMeHandleError = (error: CustomError) => {
    if (error.status === 401 && error.type === 'ERR_API')
      notAuthenticatedRedirect();
  }

  useEffect(() => {
    const { token } = auth;

    if (!token)
      notAuthenticatedRedirect();

    const abortController = new AbortController();

    (async () => {
      const response = await refreshToken(abortController.signal)

      if (response.error) {
        onPingMeHandleError(response.error)
      }

      else {
        setAuthOnStorage({ token: response.data.token, user: response.data.user })
      }
    })()

    return () => {
      abortController.abort()
    }
  }, []);
}
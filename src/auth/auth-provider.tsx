import React, { useState, useEffect } from 'react';

import { useRouter } from 'src/routes/hooks';

import { getSessionStorageValue } from 'src/utils';

interface AuthProviderProps {
  children: React.ReactElement;
}
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [checkState, setCheckState] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setCheckState(true);
    const getTokenFromLocal = getSessionStorageValue('accessToken');
    if (!getTokenFromLocal) {
      router.push('/sign-in');
    }
    setCheckState(false);
  }, []);

  return checkState ? <div>Loading</div> : children;
};

export default AuthProvider;

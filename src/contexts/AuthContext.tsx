import React, {
  useCallback,
  useEffect,
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';

import {getItem, removeItem, storeItem} from '../utilities/asyncStorage';

type Props = {
  children: ReactNode;
};

export interface AuthContextInterface {
  setCredentials: (usernameValue?: string) => void;
  logOut: () => void;
  username: string | null;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextInterface>({
  setCredentials() {
    return;
  },
  logOut() {
    return;
  },
  username: null,
  isLoading: true,
});

export const AuthContextProvider = ({children}: Props) => {
  const [username, setUsername] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const asyncEffect = async () => {
      const name = await getItem('username');
      if (name) {
        setUsername(name);
      }
      setIsLoading(false);
    };
    asyncEffect();
  }, []);

  const setCredentials = useCallback((usernameValue?: string) => {
    if (usernameValue) {
      setUsername(usernameValue);
      storeItem('username', usernameValue);
    }
  }, []);

  const logOut = useCallback(() => {
    if (username) {
      setUsername(null);
      removeItem('username');
    }
  }, [username]);

  return (
    <AuthContext.Provider value={{username, isLoading, setCredentials, logOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

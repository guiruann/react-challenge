import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

interface IAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  userId: string | undefined;
  setUserId: Dispatch<SetStateAction<any>>;
}

export const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  userId: '',
  setUserId: () => {},
});

export function AuthProvider({ children }: any) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState();

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, userId, setUserId }}
    >
      {children}
    </AuthContext.Provider>
  );
}

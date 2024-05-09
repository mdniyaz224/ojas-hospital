import { createContext } from 'react';
import { IUser } from 'src/types/user';

export interface State {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: IUser | null;
}

export const initialState: State = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

export interface AuthContextType extends State {
  signIn: (email: string, password: string, deviceId: string) => Promise<void>;
  signUp: (email: string, name: string, password: string) => Promise<void>;
  signOut: (deviceId: string) => Promise<void>;
  initialize: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  ...initialState,
  signIn: () => Promise.resolve(),
  signUp: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
  initialize: () => Promise.resolve(),
});

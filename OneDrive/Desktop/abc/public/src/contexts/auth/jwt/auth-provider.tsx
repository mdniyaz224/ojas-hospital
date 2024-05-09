/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import type { FC, ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useReducer } from 'react';
import type { State } from './auth-context';
import { AuthContext, initialState } from './auth-context';
import { IUser } from 'src/types/user';

export const STORAGE_KEY = 'accessToken';

export enum ActionType {
  INITIALIZE = 'INITIALIZE',
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
  SIGN_OUT = 'SIGN_OUT',
}

type InitializeAction = {
  type: ActionType.INITIALIZE;
  payload: {
    isAuthenticated: boolean;
    user: IUser | null;
  };
};

type SignInAction = {
  type: ActionType.SIGN_IN;
  payload: {
    user: IUser;
  };
};

type SignUpAction = {
  type: ActionType.SIGN_UP;
  payload: {
    user: IUser;
  };
};

type SignOutAction = {
  type: ActionType.SIGN_OUT;
};

type Action = InitializeAction | SignInAction | SignUpAction | SignOutAction;

type Handler = (state: State, action: any) => State;

const handlers: Record<ActionType, Handler> = {
  INITIALIZE: (state: State, action: InitializeAction): State => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  SIGN_IN: (state: State, action: SignInAction): State => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  SIGN_UP: (state: State, action: SignUpAction): State => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  SIGN_OUT: (state: State): State => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
};

const reducer = (state: State, action: Action): State =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

interface AuthProviderProps {
  children: ReactNode;
}

export type TStoreToken = {
  accessToken: string;
  deviceId: string;
  id: number;
};

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);


  const initialize = useCallback(async (): Promise<void> => {
    try {
      const accessToken = 'dev';

      if (accessToken) {
        const user: any = { name: 'dev@yopmail.com' };



        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: true,
            user,
          },
        });
      } else {
        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    } catch (err) {
      dispatch({
        type: ActionType.INITIALIZE,
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  }, [dispatch]);

  useEffect(
    () => {
      initialize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const signIn = useCallback(
    async (email: string, password: string, device: string): Promise<void> => {


      const user: any = { name: 'dev@yopmail.com' };

      dispatch({
        type: ActionType.SIGN_IN,
        payload: {
          user,
        },
      });
    },
    [dispatch]
  );

  const signUp = useCallback(
    async (email: string, name: string, password: string): Promise<void> => {

      const user: any = { name: 'dev@yopmail.com' };

      dispatch({
        type: ActionType.SIGN_UP,
        payload: {
          user,
        },
      });
    },
    [dispatch]
  );

  const signOut = useCallback(
    async (deviceId: string): Promise<void> => {
      try {
        dispatch({ type: ActionType.SIGN_OUT });
      } catch (error) {
        dispatch({ type: ActionType.SIGN_OUT });
      }
    },
    [dispatch]
  );
  const authProperties = useMemo(() => ({
    ...state,
    signIn,
    signUp,
    signOut,
    initialize,
  }), []); // value is cached by useMemo
  return (
    <AuthContext.Provider
      value={authProperties}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

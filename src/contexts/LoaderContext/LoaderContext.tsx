/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, PropsWithChildren, useReducer } from 'react';

import {
  LoaderAction,
  LoaderActionTypes,
  LoaderContent,
  LoaderState,
} from './LoaderContextTypes';

export const loaderInitialState = {
  isLoading: false,
};

export const loaderReducer = (state: LoaderState, action: LoaderAction) => {
  switch (action.type) {
    case LoaderActionTypes.SHOW_LOADER:
      return {
        isLoading: true,
      };
    case LoaderActionTypes.HIDE_LOADER:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};

export const LoaderContext = createContext<LoaderContent>({
  state: loaderInitialState,
  dispatch: () => {},
});

export const LoaderProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(loaderReducer, loaderInitialState);

  return (
    <LoaderContext.Provider value={{ state, dispatch }}>
      {children}
    </LoaderContext.Provider>
  );
};

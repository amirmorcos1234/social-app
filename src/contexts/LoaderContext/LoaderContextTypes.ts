import { Dispatch } from 'react';

export type LoaderState = {
  isLoading: boolean;
};

export enum LoaderActionTypes {
  SHOW_LOADER = 'SHOW_LOADER',
  HIDE_LOADER = 'HIDE_LOADER',
}

export type LoaderAction = {
  type: LoaderActionTypes;
  payload?: undefined;
};

export type LoaderContent = {
  state: LoaderState;
  dispatch: Dispatch<LoaderAction>;
};

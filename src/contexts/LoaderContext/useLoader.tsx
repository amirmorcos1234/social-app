import { useContext } from 'react';

import { LoaderContext } from './LoaderContext';
import { LoaderActionTypes } from './LoaderContextTypes';

export const useLoader = () => {
  const { dispatch } = useContext(LoaderContext);
  const showLoader = () => {
    dispatch({ type: LoaderActionTypes.SHOW_LOADER });
  };
  const hideLoader = () => {
    dispatch({ type: LoaderActionTypes.HIDE_LOADER });
  };
  return { showLoader, hideLoader };
};

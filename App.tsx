import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import MainNavigation from '@navigation/MainNavigation'
import {LoaderProvider} from '@contexts/LoaderContext/LoaderContext'
import { CustomLoader } from '@components/atoms';


const App = () => {
  return (
 <NavigationContainer>
  <LoaderProvider>
  <CustomLoader />
  <MainNavigation/>
  </LoaderProvider>
 </NavigationContainer>
  );
};

export default App;

import SplashNavigation from '@navigation/SplashNavigation';
import { useEffect, useState } from 'react';

import AppNavigation from './AppNavigation';

const MainNavigation = () => {
  const [hideSplash, setHideSplash] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHideSplash(true);
    }, 2000);
  }, []);
  return hideSplash ? <AppNavigation /> : <SplashNavigation />;
};

export default MainNavigation;

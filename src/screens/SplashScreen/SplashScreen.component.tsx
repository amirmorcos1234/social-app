import { MainWrapper } from '@components/organisms';
import { Images } from '@theme/index';
import { ActivityIndicator, Image, View } from 'react-native';

import styles from './SplashScreen.style.ts';

const SplashScreen = () => {
  return (
    <MainWrapper>
      <View style={styles.container}>
        <Image source={Images.splash} style={styles.logo} />
        <ActivityIndicator style={styles.indicator} />
      </View>
    </MainWrapper>
  );
};

export default SplashScreen;

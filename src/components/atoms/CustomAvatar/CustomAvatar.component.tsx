import { Images } from '@theme/index';
import { Image } from 'react-native';

import styles from './CustomAvatar.style';

const CustomAvatar = () => {
  return <Image source={Images.user} style={styles.avatar} />;
};

export default CustomAvatar;

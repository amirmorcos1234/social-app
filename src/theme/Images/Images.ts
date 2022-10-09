/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Image } from 'react-native';

const Images = {
  logo: Image.resolveAssetSource(require('../../assets/images/social.png')),
  user: Image.resolveAssetSource(require('../../assets/images/user.png')),
  splash: Image.resolveAssetSource(require('../../assets/images/splash.png')),
};

export default Images;

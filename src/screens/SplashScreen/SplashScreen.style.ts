import { horizontalScale, verticalScale } from '@utils/Scaling/scaling';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: horizontalScale(150),
    height: horizontalScale(150),
  },
  indicator: {
    marginTop: verticalScale(20),
  },
});

import { horizontalScale, verticalScale } from '@utils/Scaling/scaling';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: horizontalScale(300),
    marginTop: verticalScale(15),
  },
  content: {
    marginStart: horizontalScale(10),
    marginTop: verticalScale(20),
  },
});

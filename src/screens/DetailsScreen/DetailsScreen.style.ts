import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '@utils/Scaling/scaling';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  comments: {
    marginStart: horizontalScale(10),
    marginTop: verticalScale(20),
    fontSize: fontScale(25),
    fontWeight: 'bold',
    marginBottom: verticalScale(5),
  },
});

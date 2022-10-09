import { Colors } from '@theme/index';
import { horizontalScale, verticalScale } from '@utils/Scaling/scaling';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(16),
    flex: 1,
  },
});

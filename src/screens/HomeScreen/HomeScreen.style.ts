import { horizontalScale, verticalScale } from '@utils/Scaling/scaling';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  logoStyle: {
    height: horizontalScale(100),
    width: horizontalScale(100),
  },
  listContent: {
    paddingBottom: verticalScale(120),
  },
  itemContainer: {
    marginTop: verticalScale(20),
  },
});

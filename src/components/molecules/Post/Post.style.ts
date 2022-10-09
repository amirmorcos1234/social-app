import { Colors } from '@theme/index';
import { shadowing } from '@utils/Constants/Constants';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '@utils/Scaling/scaling';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginHorizontal: horizontalScale(10),
    borderRadius: 20,
    padding: horizontalScale(20),
    ...shadowing,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: horizontalScale(40),
    width: horizontalScale(40),
    backgroundColor: Colors.black,
    borderRadius: 20,
  },
  username: {
    marginStart: horizontalScale(10),
  },
  content: {
    marginTop: verticalScale(15),
  },
  title: {
    marginStart: horizontalScale(10),
    width: horizontalScale(200),
    marginTop: verticalScale(5),
    fontSize: fontScale(15),
    fontWeight: 'bold',
    marginBottom: verticalScale(10),
  },
  moreText: {
    marginTop: verticalScale(5),
    color: Colors.tintColor,
  },
});

import { CustomAvatar, CustomText } from '@components/atoms';
import { View, ViewStyle } from 'react-native';

import styles from './CommentsCard.style';

type Props = {
  name: string;
  content: string;
  overrideContainerStyle?: ViewStyle;
};
const CommentCard = ({ content, name, overrideContainerStyle }: Props) => {
  return (
    <View style={[styles.container, overrideContainerStyle]}>
      <CustomAvatar />
      <CustomText text={`${name} ${content}`} overrideStyle={styles.content} />
    </View>
  );
};

export default CommentCard;

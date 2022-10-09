/* eslint-disable @typescript-eslint/no-empty-function */
import { CustomAvatar, CustomText } from '@components/atoms';
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import ReadMore from 'react-native-read-more-text';

import styles from './Post.style';

type Props = {
  name: string;
  content: string;
  title: string;
  overrideContainerStyle?: ViewStyle;
  onPress?: () => void;
};

const Post = ({
  onPress = () => {},
  overrideContainerStyle,
  name,
  content,
  title,
}: Props) => {
  const _renderTruncatedFooter = (handlePress: () => void) => {
    return (
      <Text style={styles.moreText} onPress={handlePress}>
        Read more
      </Text>
    );
  };

  const _renderRevealedFooter = (handlePress: () => void) => {
    return (
      <Text style={styles.moreText} onPress={handlePress}>
        Show less
      </Text>
    );
  };
  return (
    <TouchableOpacity
      style={[styles.container, overrideContainerStyle]}
      onPress={onPress}
    >
      <View style={styles.userContainer}>
        <CustomAvatar />
        <View>
          <CustomText text={name} overrideStyle={styles.username} />
          <CustomText
            ellipsizeMode="tail"
            numberOfLines={2}
            text={title}
            overrideStyle={styles.title}
          />
        </View>
      </View>
      <ReadMore
        renderTruncatedFooter={_renderTruncatedFooter}
        renderRevealedFooter={_renderRevealedFooter}
        numberOfLines={2}
      >
        <Text style={styles.content}>{content}</Text>
      </ReadMore>
    </TouchableOpacity>
  );
};

export default Post;

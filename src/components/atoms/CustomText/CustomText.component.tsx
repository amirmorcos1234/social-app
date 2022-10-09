import { Text, TextProps, TextStyle } from 'react-native';

import styles from './CustomText.style';

type Props = {
  text: string;
  overrideStyle?: TextStyle;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
};

const CustomText = ({
  text,
  overrideStyle,
  numberOfLines,
  ellipsizeMode,
}: Props) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={[styles.textStyle, overrideStyle]}
    >
      {text}
    </Text>
  );
};

export default CustomText;

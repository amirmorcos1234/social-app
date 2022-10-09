import { SafeAreaView, View } from 'react-native';

import styles from './MainWrapper.style';

type Props = {
  children: React.ReactNode;
};
const MainWrapper = ({ children }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

export default MainWrapper;

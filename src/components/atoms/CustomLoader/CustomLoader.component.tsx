import { LoaderContext } from '@contexts/LoaderContext/LoaderContext';
import { LoaderContent } from '@contexts/LoaderContext/LoaderContextTypes';
import { useContext } from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';

import styles from './CustomLoader.style';

const CustomLoader = () => {
  const { state } = useContext<LoaderContent>(LoaderContext);
  return (
    <Modal
      animationType="none"
      transparent
      visible={state.isLoading}
      statusBarTranslucent
    >
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
};
export default CustomLoader;

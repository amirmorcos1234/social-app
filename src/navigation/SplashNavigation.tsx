import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from '@screens/index';

import { RouteParamsList } from './router';

const Stack = createStackNavigator<RouteParamsList>();

const SplashNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default SplashNavigation;

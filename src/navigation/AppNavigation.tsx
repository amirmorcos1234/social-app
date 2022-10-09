import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen, HomeScreen } from '@screens/index';

import { RouteParamsList } from './router';

const Stack = createStackNavigator<RouteParamsList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Details"
        options={{
          headerTitle: 'Comments',
        }}
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;

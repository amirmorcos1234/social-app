import Post from '@models/Post';
import User from '@models/User';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RouteParamsList = {
  Home: undefined;
  Details: { users: User[]; item: Post };
  Splash: undefined;
};

export type RouteKeys = keyof RouteParamsList;

export type RoutesProps = {
  [key in RouteKeys]: RouteProp<RouteParamsList, key>;
};

export type StackNavigation = StackNavigationProp<RouteParamsList>;
export type BottomTabNavigation = BottomTabNavigationProp<RouteParamsList>;

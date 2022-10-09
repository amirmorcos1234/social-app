/* eslint-disable no-restricted-imports */
import { RouteKeys, RoutesProps } from '@navigation/router';
import { useRoute as useOriginalRoute } from '@react-navigation/core';

export const useRoute = <T extends RouteKeys>() =>
  useOriginalRoute<RoutesProps[T]>();

// RootNavigation.js

import { createNavigationContainerRef } from '@react-navigation/native';
import { ScreenName } from './screenNames';

export const navigationRef = createNavigationContainerRef()

export function navigate(name: ScreenName, params: any=null) {
  if (navigationRef.isReady()) {
    //@ts-ignore
    navigationRef.navigate(name, params);
  }
}

// add other navigation functions that you need and export them
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings156478Navigator from '../features/Settings156478/navigator';
import Settings156461Navigator from '../features/Settings156461/navigator';
import Settings156394Navigator from '../features/Settings156394/navigator';
import SignIn214156384Navigator from '../features/SignIn214156384/navigator';
import SignUp215156383Navigator from '../features/SignUp215156383/navigator';
import Messaging2156381Navigator from '../features/Messaging2156381/navigator';
import NotificationList3156380Navigator from '../features/NotificationList3156380/navigator';
import Settings4156379Navigator from '../features/Settings4156379/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings156478: { screen: Settings156478Navigator },
Settings156461: { screen: Settings156461Navigator },
Settings156394: { screen: Settings156394Navigator },
SignIn214156384: { screen: SignIn214156384Navigator },
SignUp215156383: { screen: SignUp215156383Navigator },
Messaging2156381: { screen: Messaging2156381Navigator },
NotificationList3156380: { screen: NotificationList3156380Navigator },
Settings4156379: { screen: Settings4156379Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

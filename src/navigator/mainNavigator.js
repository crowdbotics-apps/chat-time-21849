import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignUp215156383Navigator from '../features/SignUp215156383/navigator';
import Messaging2156381Navigator from '../features/Messaging2156381/navigator';
import NotificationList3156380Navigator from '../features/NotificationList3156380/navigator';
import Settings4156379Navigator from '../features/Settings4156379/navigator';
import SignIn46156377Navigator from '../features/SignIn46156377/navigator';
import UserProfile8156375Navigator from '../features/UserProfile8156375/navigator';
import Camera9156374Navigator from '../features/Camera9156374/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignUp215156383: { screen: SignUp215156383Navigator },
Messaging2156381: { screen: Messaging2156381Navigator },
NotificationList3156380: { screen: NotificationList3156380Navigator },
Settings4156379: { screen: Settings4156379Navigator },
SignIn46156377: { screen: SignIn46156377Navigator },
UserProfile8156375: { screen: UserProfile8156375Navigator },
Camera9156374: { screen: Camera9156374Navigator },

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

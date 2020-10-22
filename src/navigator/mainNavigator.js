import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen15156389Navigator from '../features/BlankScreen15156389/navigator';
import NotificationList10156388Navigator from '../features/NotificationList10156388/navigator';
import Messaging11156387Navigator from '../features/Messaging11156387/navigator';
import Settings12156386Navigator from '../features/Settings12156386/navigator';
import SignIn214156384Navigator from '../features/SignIn214156384/navigator';
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
BlankScreen15156389: { screen: BlankScreen15156389Navigator },
NotificationList10156388: { screen: NotificationList10156388Navigator },
Messaging11156387: { screen: Messaging11156387Navigator },
Settings12156386: { screen: Settings12156386Navigator },
SignIn214156384: { screen: SignIn214156384Navigator },
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

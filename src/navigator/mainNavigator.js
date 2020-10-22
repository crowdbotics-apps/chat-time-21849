import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings4156379Navigator from '../features/Settings4156379/navigator';
import SignIn46156377Navigator from '../features/SignIn46156377/navigator';
import UserProfile8156375Navigator from '../features/UserProfile8156375/navigator';
import Camera9156374Navigator from '../features/Camera9156374/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen013090Navigator from '../features/BlankScreen013090/navigator';
import CopyOfBlankScreen013089Navigator from '../features/CopyOfBlankScreen013089/navigator';
import BlankScreen013088Navigator from '../features/BlankScreen013088/navigator';
import CopyOfBlankScreen013087Navigator from '../features/CopyOfBlankScreen013087/navigator';
import CopyOfBlankScreen013084Navigator from '../features/CopyOfBlankScreen013084/navigator';
import BlankScreen013083Navigator from '../features/BlankScreen013083/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen013090: { screen: BlankScreen013090Navigator },
CopyOfBlankScreen013089: { screen: CopyOfBlankScreen013089Navigator },
BlankScreen013088: { screen: BlankScreen013088Navigator },
CopyOfBlankScreen013087: { screen: CopyOfBlankScreen013087Navigator },
CopyOfBlankScreen013084: { screen: CopyOfBlankScreen013084Navigator },
BlankScreen013083: { screen: BlankScreen013083Navigator },

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

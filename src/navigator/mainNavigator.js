import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen013094Navigator from '../features/BlankScreen013094/navigator';
import CopyOfBlankScreen013093Navigator from '../features/CopyOfBlankScreen013093/navigator';
import BlankScreen013092Navigator from '../features/BlankScreen013092/navigator';
import CopyOfBlankScreen013091Navigator from '../features/CopyOfBlankScreen013091/navigator';
import BlankScreen013090Navigator from '../features/BlankScreen013090/navigator';
import CopyOfBlankScreen013089Navigator from '../features/CopyOfBlankScreen013089/navigator';
import BlankScreen013088Navigator from '../features/BlankScreen013088/navigator';
import CopyOfBlankScreen013087Navigator from '../features/CopyOfBlankScreen013087/navigator';
import BlankScreen013083Navigator from '../features/BlankScreen013083/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen013094: { screen: BlankScreen013094Navigator },
CopyOfBlankScreen013093: { screen: CopyOfBlankScreen013093Navigator },
BlankScreen013092: { screen: BlankScreen013092Navigator },
CopyOfBlankScreen013091: { screen: CopyOfBlankScreen013091Navigator },
BlankScreen013090: { screen: BlankScreen013090Navigator },
CopyOfBlankScreen013089: { screen: CopyOfBlankScreen013089Navigator },
BlankScreen013088: { screen: BlankScreen013088Navigator },
CopyOfBlankScreen013087: { screen: CopyOfBlankScreen013087Navigator },
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

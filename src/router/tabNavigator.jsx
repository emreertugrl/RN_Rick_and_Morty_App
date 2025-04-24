import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Characters from '../screens/characters';
import Locations from '../screens/locations';
import Episodes from '../screens/episodes';
import Settings from '../screens/settings';
import R from '../utils/Routes';
import TabIcon from '../components/router/tabIcon';
import {tabBarStyle} from '../styles/tabBarStyle';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            screenName={route.name}
            size={size}
            color={color}
            focused={focused}
          />
        ),
        headerStyle: tabBarStyle.headerStyle,
        tabBarStyle: tabBarStyle.tabBarStyle,
      })}>
      <Tab.Screen name={R.CHARACTERS} component={Characters} />
      <Tab.Screen name={R.EPISODES} component={Episodes} />
      <Tab.Screen name={R.LOCATIONS} component={Locations} />
      <Tab.Screen name={R.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
}

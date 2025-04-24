import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchCharacters from '../screens/characters/SearchCharacters';
import FilterCharacters from '../screens/characters/FilterCharacters';
import CharacterDetail from '../screens/characters/CharacterDetail';
import TabNavigator from './tabNavigator';
import R from './../utils/Routes';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={R.TABNAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen name={R.CHARACTERDETAIL} component={CharacterDetail} />
      <Stack.Screen name={R.FILTERCHARACTERS} component={FilterCharacters} />
      <Stack.Screen name={R.SEARCHCHARACTERS} component={SearchCharacters} />
    </Stack.Navigator>
  );
}

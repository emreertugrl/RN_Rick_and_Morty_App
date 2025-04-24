import {
  PresentionChart,
  Setting2,
  Book1,
  LocationTick,
} from 'iconsax-react-nativejs';
import R from './../../utils/Routes';

const TabIcon = ({screenName, color, focused, size}) => {
  if (screenName == R.CHARACTERS) {
    return (
      <Book1 size={size} color={color} variant={focused ? 'Bold' : 'Outline'} />
    );
  }
  if (screenName == R.EPISODES) {
    return (
      <PresentionChart
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
  if (screenName == R.LOCATIONS) {
    return (
      <LocationTick
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
  if (screenName == R.SETTINGS) {
    return (
      <Setting2
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
};

export default TabIcon;

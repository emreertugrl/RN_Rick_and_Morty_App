import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../pages/CartScreen';
import ProductScreen from '../pages/ProductScreen';
import ProductDetailScreen from '../pages/ProductDetailScreen';
import {SCREENS} from './screens';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  const {Carts, ProductDetail, Products} = SCREENS;
  return (
    <Stack.Navigator>
      <Stack.Screen name={Products} component={ProductScreen} />
      <Stack.Screen name={Carts} component={CartScreen} />
      <Stack.Screen name={ProductDetail} component={ProductDetailScreen} />
    </Stack.Navigator>
  );
}

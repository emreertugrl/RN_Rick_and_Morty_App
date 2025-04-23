import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FETCH_TO_CART} from '../redux/actions/actionTypes';
import {useRoute} from '@react-navigation/native';

export default function CartScreen() {
  const {product} = useRoute().params;
  const dispatch = useDispatch();

  const {carts} = useSelector(state => state.cart);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/carts/${product.id}`)
      .then(response => response.json())
      .then(payload =>
        dispatch({
          type: FETCH_TO_CART,
          payload,
        }),
      )
      .catch(err => console.log(err));
  }, [dispatch]);

  return (
    <View>
      <FlatList
        data={carts}
        keyExtractor={item => item?.id.toString()}
        renderItem={({item}) => (
          <View>
            <Text>Veri {item?.id}</Text>
          </View>
        )}
      />
    </View>
  );
}

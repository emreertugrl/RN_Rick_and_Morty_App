import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrementCount,
  incrementCount,
  resetCount,
} from '../redux/actions/counterActions';

const Counter = () => {
  const dispatch = useDispatch();
  const {count} = useSelector(state => state.counter);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 50, fontWeight: '600'}}>{count}</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            width: '100%',
            padding: 30,
          }}>
          <CustomButton
            onPress={() => dispatch(incrementCount())}
            title="INCREMENT"
            color="blue"
          />
          <CustomButton
            onPress={() => dispatch(decrementCount())}
            title="DECREMENT"
            color="orange"
          />
          <CustomButton
            onPress={() => dispatch(resetCount(0))}
            title="RESET"
            color="red"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

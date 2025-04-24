import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {deleteItem, removeItem} from '../redux/actions/todoActions';
import CustomButton from './CustomButton';
import {useDispatch} from 'react-redux';

const TodoItem = ({item}) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    Alert.alert(
      'Sil?',
      'Bu veriyi silmek istiyor musun?',
      [
        {
          text: 'Hayır',
          style: 'cancel',
        },
        {
          text: 'Evet',
          onPress: () => {
            dispatch(removeItem(item));
          },
          style: 'destructive', // Android'de fark yaratmaz ama iOS'ta kırmızı görünür
        },
      ],
      {cancelable: true},
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#eee',
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        borderRadius: 10,
      }}>
      <View>
        <Text style={{fontSize: 20, fontWeight: '600'}}>{item.title}</Text>
      </View>
      <CustomButton title="DELETE" color="red" onPress={deleteItem} />
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({});

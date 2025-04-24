import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from './CustomButton';
import {addItem} from '../redux/actions/todoActions';
import TodoItem from './TodoList';

export default Todo = () => {
  const [text, setText] = useState('');
  const {todoList} = useSelector(state => state.todo);
  console.log(todoList);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.todoContainer}>
        <TextInput style={styles.input} onChangeText={setText} />
        <CustomButton
          onPress={() =>
            dispatch(
              addItem({
                id: todoList.length + 1,
                title: `${text} ${todoList.length + 1}`,
              }),
            )
          }
          title="Add Todo"
          color="blue"
        />
      </View>

      <FlatList
        data={todoList}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <TodoItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    fontSize: 18,
    flex: 1,
    borderRadius: 10,
  },
});

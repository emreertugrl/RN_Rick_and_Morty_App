import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/actions/todoActions';

export default Todo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.todoContainer}>
        <TextInput style={styles.input} onChangeText={setText} />
        <Button onPress={handleAddTodo} title="Add Todo" />
      </View>
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

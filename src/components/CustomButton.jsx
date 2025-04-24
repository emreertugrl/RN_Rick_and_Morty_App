import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomButton = props => {
  const {title, color} = props;
  return (
    <TouchableOpacity
      {...props}
      style={{
        backgroundColor: color,
        padding: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
      }}>
      <Text style={{color: 'white', fontSize: 18}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});

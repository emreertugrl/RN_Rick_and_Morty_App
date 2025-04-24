import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCharacterList} from '../../store/actions/characterActions';

const Characters = () => {
  const dispatch = useDispatch();
  const {params, characterList, pending} = useSelector(
    state => state.characters,
  );
  useEffect(() => {
    dispatch(getCharacterList(params));
  }, [params]);
  return (
    <View>
      <Text>Characters</Text>
    </View>
  );
};

export default Characters;

const styles = StyleSheet.create({});

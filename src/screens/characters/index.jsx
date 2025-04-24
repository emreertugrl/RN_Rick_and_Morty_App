import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCharacterList} from '../../store/actions/characterActions';
import Spinner from '../../components/ui/spinner';
import screenStyle from '../../styles/screenStyle';

const Characters = () => {
  const dispatch = useDispatch();
  const {params, characterList, pending} = useSelector(
    state => state.characters,
  );
  useEffect(() => {
    dispatch(getCharacterList(params));
  }, [params]);
  return (
    <View style={screenStyle.container}>
      {true ? (
        <Spinner />
      ) : (
        <FlatList
          data={characterList}
          renderItem={({item}) => (
            <View>
              <Text>selam</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Characters;

const styles = StyleSheet.create({});

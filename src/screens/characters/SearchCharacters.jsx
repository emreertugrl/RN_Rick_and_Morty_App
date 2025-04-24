import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeParams,
  getCharacterList,
} from '../../store/actions/characterActions';
import Colors from '../../theme/colors';
import SearchItem from '../../components/characters/searchItem';
import screenStyle from '../../styles/screenStyle';
import CustomButton from '../../components/ui/customButton';

const SearchCharacters = () => {
  const dispatch = useDispatch();
  const {characterList, pending, params} = useSelector(
    state => state.characters,
  );
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    dispatch(getCharacterList(params));
  }, [dispatch]);

  const handleSubmit = () => {
    dispatch(changeParams({name: searchText}));
  };

  const ListHeaderComponent = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          value={searchText}
          placeholder="Search Character"
          onSubmitEditing={handleSubmit}
          style={{
            width: '95%',
            borderWidth: 0.5,
            backgroundColor: Colors.BACKTITLECOLOR,
            borderColor: Colors.BROWN,
            padding: 10,
            height: 40,
            borderRadius: 100,
          }}
          onChangeText={setSearchText}
        />
        <CustomButton
          onPress={() => handleSubmit()}
          title="Search"
          backColor={Colors.GREEN}
          titleColor={Colors.WHITE}
        />
      </View>
    );
  };
  return (
    <View style={screenStyle.container}>
      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        data={characterList}
        renderItem={({item}) => <SearchItem item={item} />}
      />
    </View>
  );
};

export default SearchCharacters;

const styles = StyleSheet.create({});

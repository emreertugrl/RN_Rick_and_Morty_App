import {View, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {FilterSearch, SearchNormal} from 'iconsax-react-native';
import Colors from '../../theme/colors';
import R from '../../utils/Routes';
import {useNavigation} from '@react-navigation/native';

export default function HeaderRight() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate(R.SEARCHCHARACTERS)}>
        <SearchNormal size={27} color={Colors.BLACK} />
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate(R.FILTERCHARACTERS)}>
        <FilterSearch size={27} color={Colors.BLACK} />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  button: {
    marginHorizontal: 5,
  },
});

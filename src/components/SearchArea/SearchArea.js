import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchArea.styles';

const SearchArea = () => {
  return (
    <View>
      <TextInput style={styles.input} placeholder="Ara..." />
    </View>
  );
};
export default SearchArea;

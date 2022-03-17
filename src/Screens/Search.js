import {Text, View} from 'react-native';
import React from 'react';
import styles from '../Styles/CustomStyles';

const Search = ({navigation, route}) => {
  console.log(route.params);
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  );
};

export default Search;

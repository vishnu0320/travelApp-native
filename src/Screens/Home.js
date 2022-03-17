import {Text, View} from 'react-native';
import React from 'react';
import styles from '../Styles/CustomStyles';
import {useState} from 'react';
const Home = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
    </View>
  );
};

export default Home;

import {View, Button} from 'react-native';
import React from 'react';

const NavBar = ({navigation, history}) => {
  return (
    <View>
      <Button
        onPress={() => {
          navigation.navigate('home', {
            history: ['home'],
          });
        }}
        title="Navigate to Home Page"
      />
      <Button
        onPress={() => {
          console.log(history);
          navigation.navigate('search', {
            history: [...history, 'search'],
          });
        }}
        title="Navigate to Search Page"
      />
      <Button
        onPress={() => {
          navigation.navigate('trip', {
            history: [...history, 'trip'],
          });
        }}
        title="Navigate to Trip Page"
      />
      <Button
        onPress={() => {
          navigation.navigate('guide', {
            history: [...history, 'guide'],
          });
        }}
        title="Navigate to Guide Page"
      />
      <Button
        onPress={() => {
          navigation.popToTop({
            history: ['home'],
          });
        }}
        title="Pop To Top Page"
      />
    </View>
  );
};

export default NavBar;

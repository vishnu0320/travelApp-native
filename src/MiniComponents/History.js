import {Text, View} from 'react-native';
import React from 'react';

const History = ({history}) => {
  return (
    <View>
      {console.log(history)}
      <Text>{history?.join(' -> ')}</Text>
    </View>
  );
};

export default History;

import React from 'react';
import {Text, View} from 'react-native';


import moment from 'moment';
import 'moment/locale/pt-br';

export default props => {
  return (
    <View>
      <Text> {props.descricao} </Text>
      <Text> {props.dataEstimada} </Text>
      <Text> {props.dataConclusao} </Text>
    </View>
  );
};

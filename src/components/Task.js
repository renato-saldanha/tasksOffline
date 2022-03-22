import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import commonStyles from '../commonStyles';

import moment from 'moment';
import 'moment/locale/pt-br';

export default props => {
  const estiloConcluidoOuNao =
    props.dataConclusao != null ? {textDecorationLine: 'line-through'} : {};

  const data = props.dataConclusao ? props.dataConclusao : props.dataEstimada;
  const dataFormatada = moment(data)
    .locale('pt-br')
    .format('ddd, D [de] MMMM [de] YYYY');

  return (
    <View style={styles.container}>
      <View style={styles.checkContainer}>
        {getCheckView(props.dataConclusao)}
      </View>
      <View>
        <Text style={[styles.descricao, estiloConcluidoOuNao]}>
          {props.descricao}
        </Text>
        <Text style={styles.data}>{dataFormatada}</Text>
      </View>
    </View>
  );
};

function getCheckView(dataConclusao) {
  if (dataConclusao != null) {
    return (
      <View style={styles.concluido}>
        <Icon name="check" size={20} color="#FFF" />
      </View>
    );
  } else {
    return <View style={styles.pendente} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#AAA',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  checkContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pendente: {
    height: 25,
    width: 25,
    borderWidth: 1,
    borderRadius: 13,
    borderColor: '#555',
  },
  concluido: {
    height: 25,
    width: 25,
    borderRadius: 13,
    backgroundColor: '#4D7F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  descricao: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.mainText,
    fontSize: 15,
  },
  data: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.subText,
    fontSize: 12,
  },
});

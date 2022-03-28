import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Swipeable} from 'react-native-gesture-handler';

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

  const confirmDelete = () => {
    Alert.alert(
      'Confirmação de exclusão.',
      'Deseja realmente deletar este registro?',
      [{text: 'Sim', onPress: () => props.deleteTask(props.id)}, {text: 'Não'}],
    );
  };

  const renderRight = (progress, dragX) => {
    return (
      <TouchableOpacity
        style={styles.buttonDelete}
        onPress={() => confirmDelete()}>
        <Icon name="remove" size={20} color="#FFF" />
        <Text style={styles.textDelete}>Deletar</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={renderRight}>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => props.verificarMarcacaoTask(props.id)}>
          <View style={styles.checkContainer}>
            {getCheckView(props.dataConclusao)}
          </View>
        </TouchableWithoutFeedback>
        <View>
          <Text style={[styles.descricao, estiloConcluidoOuNao]}>
            {props.descricao}
          </Text>
          <Text style={styles.data}>{dataFormatada}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

function getCheckView(dataConclusao) {
  let view;
  if (dataConclusao != null) {
    view = (
      <View style={styles.concluido}>
        <Icon name="check" size={20} color="#FFF" />
      </View>
    );
  } else {
    view = <View style={styles.pendente} />;
  }
  return view;
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
  buttonDelete: {
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 2,
  },
  textDelete: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    padding: 5,
  },
});

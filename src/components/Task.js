import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import commonStyles from '../commonStyles';

import moment from 'moment';
import 'moment/locale/pt-br';
import Swipeable from 'react-native-swipeable';

export default class Task extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const estiloConcluidoOuNao =
      this.props.dataConclusao != null
        ? {textDecorationLine: 'line-through'}
        : {};

    const data = this.props.dataConclusao
      ? this.props.dataConclusao
      : this.props.dataEstimada;
    const dataFormatada = moment(data)
      .locale('pt-br')
      .format('ddd, D [de] MMMM [de] YYYY');

    const renderRight = (progress, dragX) => {
      <TouchableOpacity style={styles.checkContainer}>
        <Text>Ola</Text>
      </TouchableOpacity>;
    };

    return (
      <Swipeable renderRightActions={renderRight}>
        <View style={styles.container}>
          <TouchableWithoutFeedback
            onPress={() => this.props.verificarMarcacaoTask(this.props.id)}>
            <View style={styles.checkContainer}>
              {getCheckView(this.props.dataConclusao)}
            </View>
          </TouchableWithoutFeedback>
          <View>
            <Text style={[styles.descricao, estiloConcluidoOuNao]}>
              {this.props.descricao}
            </Text>
            <Text style={styles.data}>{dataFormatada}</Text>
          </View>
        </View>
      </Swipeable>
    );
  }
}

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
});

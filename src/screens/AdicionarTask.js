import React, {Component} from 'react';
import {
  Modal,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native';
import commonStyles from '../commonStyles';

const initialState = {descricao: '', dataEstimada: null};

export default class AdicionarTask extends Component {
  state = {...initialState};

  render() {
    return (
      <Modal
        transparent={true}
        visible={this.props.isVisible}
        onRequestClose={this.props.onCancel}
        animationType="slide">
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.background} />
        </TouchableWithoutFeedback>

        <View style={styles.container}>
          <Text style={styles.header}>Nova Tarefa</Text>
          <TextInput
            style={styles.input}
            placeholder="Informe a descrição da tarefa"
            value={this.state.descricao}
            onChangeText={descricao => this.setState({descricao})}
          />
          <TextInput
            style={styles.input}
            placeholder="Informe a data estimada para conclusão"
            keyboardType="numeric"
            maxLength={10}
            value={this.state.dataEstimada}
            onChangeText={dataEstimada => this.setState({dataEstimada})}
          />
          <View style={styles.botoes}>
            <TouchableOpacity onPress={this.props.onCancel}>
              <Text style={styles.botao}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.onSave}>
              <Text style={styles.botao}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.background} />
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  container: {
    backgroundColor: '#FFF',
  },
  header: {
    fontFamily: commonStyles.fontFamily,
    backgroundColor: commonStyles.colors.today,
    color: commonStyles.colors.secondary,
    textAlign: 'center',
    fontSize: 15,
    padding: 15,
  },
  input: {
    fontFamily: commonStyles.fontFamily,
    height: 40,
    margin: 15,
    marginBottom: 5,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 6,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  botao: {
    margin: 20,
    marginRight: 30,
    color: commonStyles.colors.today,
  },
});

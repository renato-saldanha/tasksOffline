import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import moment from 'moment';
import 'moment/locale/pt-br';

import TodayImage from '../../assets/imgs/today.jpg';
import commonStyles from '../commonStyles.js';
import Task from '../components/Task';
import Tasks from '../classes/Tasks';

export default class TaskList extends Component {
  state = Tasks;

  render() {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM');

    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={TodayImage} style={styles.background}>
          <TouchableWithoutFeedback
            onPress={() => this.marcarDesmarcarVisibilidade()}>
            <View style={styles.seeUnsee} size={30}>
              {this.getIconeMostrarOcultar()}
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.titlebar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subTitle}>{today}</Text>
          </View>
        </ImageBackground>

        <View style={styles.taskList}>
          <FlatList
            data={this.state.tasksVisiveis}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => (
              <Task
                {...item}
                {...this.state}
                verificarMarcacaoTask={this.verificarMarcacaoTask}
                /* Comunicação indireta */
              />
            )}
          />
        </View>
      </SafeAreaView>
    );
  }

  componentDidMount = () => {
    this.mostrarOcultarTasksConcluidas();
  };

  /* Comunicação indireta */
  verificarMarcacaoTask = id => {
    const tasks = [...this.state.tasks];
    tasks.forEach(t => {
      if (t.id === id && t.dataConclusao === null) {
        t.dataConclusao = new Date();
      } else if (t.id === id && t.dataConclusao !== null) {
        t.dataConclusao = null;
      }
    });
    this.setState({tasks});
  };

  marcarDesmarcarVisibilidade = () => {
    this.setState(
      {mostrarTasksConcluidas: !this.state.mostrarTasksConcluidas},
      this.mostrarOcultarTasksConcluidas,
    );
  };

  mostrarOcultarTasksConcluidas = () => {
    let tasksVisiveis = null;

    if (this.state.mostrarTasksConcluidas) {
      tasksVisiveis = this.state.tasks;
    } else {
      tasksVisiveis = this.state.tasks.filter(t => t.dataConclusao === null);
    }

    this.setState({tasksVisiveis});
  };

  getIconeMostrarOcultar = () => {
    let iconName;
    this.state.mostrarTasksConcluidas
      ? (iconName = 'eye-slash')
      : (iconName = 'eye');
    return <Icon name={iconName} size={30} color="#FFD9" />;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 3,
  },
  taskList: {
    flex: 7,
  },
  titlebar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 50,
    color: commonStyles.colors.secondary,
    marginLeft: 20,
    marginBottom: 20,
  },
  subTitle: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
    color: commonStyles.colors.secondary,
    marginLeft: 20,
    marginBottom: 30,
  },
  seeUnsee: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: 15,
  },
});

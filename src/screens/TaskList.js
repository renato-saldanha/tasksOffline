import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';

import moment from 'moment';
import 'moment/locale/pt-br';

import TodayImage from '../../assets/imgs/today.jpg';
import commonStyles from '../commonStyles.js';
import Task from '../components/Task';

export default class TaskList extends Component {
  state = {
    tasks: [
      {
        id: 1,
        descricao: 'Comprar Livro',
        dataEstimada: new Date(),
        dataConclusao: new Date(),
      },
      {
        id: 2,
        descricao: 'Ler Livro',
        dataEstimada: new Date(),
        dataConclusao: new Date('2022-04-15'),
      },
      {
        id: 3,
        descricao: 'Arrumar a Casa',
        dataEstimada: new Date(),
        dataConclusao: new Date('2022-10-15'),
      },
      {
        id: 4,
        descricao: 'Fazer Compras',
        dataEstimada: new Date('2022-04-15'),
        dataConclusao: new Date('2022-04-17'),
      },
      {
        id: 5,
        descricao: 'Levar Cachorro Passear',
        dataEstimada: new Date('2022-04-15'),
        dataConclusao: new Date('2022-10-15'),
      },
      {
        id: 6,
        descricao: 'Comprar Presente',
        dataEstimada: new Date('2022-05-25'),
        dataConclusao: new Date('2022-16-05'),
      },
    ],
  };

  render() {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM');
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={TodayImage} style={styles.background}>
          <View style={styles.titlebar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subTitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <FlatList
            data={this.state.tasks}
            keyExtractor={i => i.id}
            renderItem={({i}) => <Task {...i} />}
          />
        </View>
      </SafeAreaView>
    );
  }
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
});

import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';

import moment from 'moment';
import 'moment/locale/pt-br';

import TodayImage from '../../assets/imgs/today.jpg';
import commonStyles from '../commonStyles.js';
import Task from '../components/Task';

export default class TaskList extends Component {
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
          <Task
            descricao="Tarefa Tal"
            dataEstimada={new Date().toDateString()}
            dataConclusao={new Date().toDateString()}
          />
          <Task
            descricao="Limpar"
            dataEstimada={new Date().toDateString()}
            dataConclusao={null}
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

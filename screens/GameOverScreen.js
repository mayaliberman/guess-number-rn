import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import DefaultStyles from '../constants/default-styles';
const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>The game is over</Text>
      <Image source={require('../assets/success.png')} style={styles.image} />
      <Text style={DefaultStyles.bodyText}>
        Number of rounds: {props.roundsNumber}
      </Text>
      <Text style={DefaultStyles.bodyText}>Number was {props.userNumber}</Text>
      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '70%',
    width: '70%',
  },
});
export default GameOverScreen;

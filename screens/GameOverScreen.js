import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import DefaultStyles from '../constants/default-styles';
import MainButton from '../components/MainButton';
const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>The game is over</Text>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={500}
          source={require('../assets/success.png')}
          // source={{
          //   uri:
          //     'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Nepal_Mount_Everest_And_Ama_dablam.jpg/1200px-Nepal_Mount_Everest_And_Ama_dablam.jpg',
          // }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <Text style={{ ...DefaultStyles.bodyText, ...styles.resultText }}>
          Your phone needed guess{' '}
          <Text style={styles.highlight}>{props.roundNumber}</Text> times to get
          the right number to guess the number{' '}
          <Text style={{ ...DefaultStyles.bodyText, ...styles.highlight }}>
            {props.userNumber}
          </Text>
        </Text>
      </View>

      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },

  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },
});
export default GameOverScreen;

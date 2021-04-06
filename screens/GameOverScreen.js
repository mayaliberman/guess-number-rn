import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import DefaultStyles from '../constants/default-styles';
import MainButton from '../components/MainButton';
const GameOverScreen = (props) => {
  return (
    <ScrollView>
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
            <Text style={styles.highlight}>{props.roundNumber}</Text> times to
            get the right number to guess the number{' '}
            <Text style={{ ...DefaultStyles.bodyText, ...styles.highlight }}>
              {props.userNumber}
            </Text>
          </Text>
        </View>

        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 60,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },

  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 400 ? 16 : 18,
  },
});
export default GameOverScreen;

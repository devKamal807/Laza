import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  PixelRatio,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const fontSize = size => PixelRatio.getFontScale() * size;

export default function ScreenOne() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState('Women');

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#7661C5', '#B0A3E5']} style={styles.gradient}>
        <Image
          source={require('../assets/images/person.png')}
          style={styles.image}
        />

        <View style={styles.card}>
          <Text style={styles.heading}>Look Good, Feel Good</Text>
          <Text style={styles.description}>
            Create your individual & unique style and look amazing every day.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, selected === 'Men' && styles.activeButton]}
              onPress={() => setSelected('Men')}>
              <Text
                style={[
                  styles.buttonText,
                  selected === 'Men' && styles.activeButtonText,
                ]}>
                Men
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                selected === 'Women' && styles.activeButton,
              ]}
              onPress={() => setSelected('Women')}>
              <Text
                style={[
                  styles.buttonText,
                  selected === 'Women' && styles.activeButtonText,
                ]}>
                Women
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('ScreenTwo')}>
            <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    position: 'absolute',
    bottom: height * 0.04,
    backgroundColor: 'white',
    width: '90%',
    height: height * 0.28,
    borderRadius: 20,
    padding: width * 0.05,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  heading: {
    fontSize: fontSize(24),
    fontWeight: '600',
    marginBottom: height * 0.005,
    fontFamily: 'InterBold',
  },
  description: {
    textAlign: 'center',
    opacity: 0.6,
    marginBottom: height * 0.02,
    fontFamily: 'Inter',
    fontSize: fontSize(15),
    fontWeight: '400',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: height * 0.015,
  },
  button: {
    flex: 1,
    paddingVertical: height * 0.025,
    backgroundColor: '#eee',
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: width * 0.015,
  },
  activeButton: {
    backgroundColor: '#9775FA',
  },
  buttonText: {
    fontSize: fontSize(17),
    fontWeight: '500',
  },
  activeButtonText: {
    color: 'white',
  },
  skip: {
    marginTop: height * 0.01,
    opacity: 0.5,
    fontSize: fontSize(17),
    fontWeight: '500',
  },
  image: {
    marginVertical: height * 0.1,
    width: width * 2,
    height: height * 0.85,
    resizeMode: 'contain',
  },
});

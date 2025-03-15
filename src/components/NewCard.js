import {
  Dimensions,
  Image,
  PixelRatio,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const fontSize = size => PixelRatio.getFontScale() * size;

export default function NewCard() {
  const navigation = useNavigation();

  const [owner, setOwner] = useState('Mrh Raju');
  const [cardnumber, setCardNumber] = useState('');
  const [exp, setExp] = useState('');
  const [cvv, setCvv] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          accessibilityLabel="Go back">
          <Image
            source={require('../assets/images/Back.png')}
            style={styles.backImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.headContainer}>
        <Text style={styles.headTxt}>Add New Card</Text>
      </View>

      <View style={styles.imagecontainer}>
        <TouchableOpacity
          style={[
            styles.imgbg,
            selectedCard === 'master' && styles.selectedImgBg,
          ]}
          onPress={() => setSelectedCard('master')}>
          <Image source={require('../assets/cards/master.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.imgbg,
            selectedCard === 'paypal' && styles.selectedImgBg,
          ]}
          onPress={() => setSelectedCard('paypal')}>
          <Image source={require('../assets/cards/paypal.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.imgbg,
            selectedCard === 'bank' && styles.selectedImgBg,
          ]}
          onPress={() => setSelectedCard('bank')}>
          <Image source={require('../assets/cards/bank.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.carddtcontainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.label}>Card Owner</Text>
          <TextInput
            placeholder="Type your name"
            value={owner}
            onChangeText={setOwner}
            placeholderTextColor="#8F959E"
            style={styles.input}
          />
        </View>

        <View style={styles.phonecontainer}>
          <Text style={styles.label}>Card Number</Text>
          <TextInput
            placeholder="Enter card number"
            value={cardnumber}
            onChangeText={setCardNumber}
            placeholderTextColor="#8F959E"
            style={styles.input}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.dualInputContainer}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>EXP</Text>
            <TextInput
              value={exp}
              onChangeText={setExp}
              placeholder="MM/YY"
              placeholderTextColor="#8F959E"
              style={styles.input}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              value={cvv}
              onChangeText={setCvv}
              placeholder="CVV"
              placeholderTextColor="#8F959E"
              style={styles.input}
              keyboardType="numeric"
              secureTextEntry
            />
          </View>
        </View>
      </View>
      <View style={styles.crtBtncontainer}>
        <TouchableOpacity style={styles.crtbtn}>
          <Text style={styles.crtbtntxt}>Save Card</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backContainer: {
    marginTop: height * 0.05,
    marginLeft: width * 0.05,
  },
  backImage: {
    width: width * 0.08,
    height: width * 0.08,
    resizeMode: 'contain',
  },
  headContainer: {
    alignItems: 'center',
    marginBottom: height * 0.05,
  },
  headTxt: {
    fontSize: fontSize(17),
    fontWeight: '600',
    fontFamily: 'InterBold',
  },
  imagecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.03,
  },
  carddtcontainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  nameContainer: {
    marginBottom: height * 0.02,
  },
  dualInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.02,
  },
  inputWrapper: {
    width: '48%',
  },
  phonecontainer: {
    marginBottom: height * 0.02,
  },
  input: {
    backgroundColor: '#F7F7FE',
    borderRadius: 10,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.015,
    fontSize: fontSize(15),
    opacity: 0.7,
  },
  label: {
    fontSize: fontSize(17),
    fontWeight: '500',
    fontFamily: 'Inter',
    marginBottom: height * 0.008,
  },
  crtBtncontainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  crtbtn: {
    width: width * 1,
    height: height * 0.07,
    backgroundColor: '#9775FA',
    alignItems: 'center',
  },
  crtbtntxt: {
    fontSize: fontSize(17),
    fontWeight: '500',
    color: '#FFFFFF',
    marginVertical: height * 0.01,
  },
  imgbg: {
    paddingHorizontal: width * 0.11,
    paddingVertical: height * 0.020,
    backgroundColor: '#F7F7FE',
    borderRadius: 10,
  },
  selectedImgBg: {
    backgroundColor: '#FFEEE3',
    borderColor:'#FF5F00',
    borderWidth:1,
  },
});

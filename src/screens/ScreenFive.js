import {
  Dimensions,
  Image,
  PixelRatio,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const fontSize = size => PixelRatio.getFontScale() * size;

export default function ScreenFive() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!email.trim()) {
        setError('Email is required.');
        setIsValid(false);
      } else {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email.trim())) {
          setError('Invalid email format.');
          setIsValid(false);
        } else {
          setError('');
          setIsValid(true);
        }
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [email]);

  const handleConfirmEmail = () => {
    if (isValid) {
      navigation.navigate('ScreenSix');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ScreenFour')}>
          <Image
            source={require('../assets/images/Back.png')}
            style={styles.backImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.headContainer}>
        <Text style={styles.headTxt}>Forgot Password</Text>
      </View>
      <View style={styles.imgcontainer}>
        <Image
          style={styles.img}
          source={require('../assets/images/Forgot.png')}
        />
      </View>
    <ScrollView>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>

        <View style={styles.inputBox}>
          <TextInput
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            style={styles.input}
          />
        </View>
        

        <View style={styles.txtcontainer}>
          <Text style={styles.txt}>Please write your email to receive a</Text>
          <Text style={styles.txt}>
            {' '}
            confirmation code to set a new password.
          </Text>
        </View>
      </View>
      </ScrollView>
      <View style={styles.crtBtncontainer}>
        <TouchableOpacity style={styles.crtbtn} onPress={handleConfirmEmail}>
          <Text style={styles.crtbtntxt}>Confirm Email</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF',
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
    marginTop: height * 0.02,
  },
  headTxt: {
    fontSize: fontSize(28),
    fontFamily: 'InterBold',
    fontWeight: '600',
  },
  imgcontainer: {
    alignItems: 'center',
    marginVertical: height * 0.02,
  },
  inputContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.04,
  },
  label: {
    color: '#8F959E',
    marginTop: height * 0.02,
    fontSize: fontSize(13),
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  input: {
    flex: 1,
    fontSize: fontSize(15),
    color: '#1D1E20',
  },
  txtcontainer: {
    marginTop: height * 0.25,
  },
  txt: {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: fontSize(13),
    fontWeight: '400',
    opacity: 0.6,
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
});

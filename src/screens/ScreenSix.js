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
import React, { useEffect, useRef, useState } from 'react';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const fontSize = size => PixelRatio.getFontScale() * size;

export default function ScreenSix() {
  const navigation = useNavigation();
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(20);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prevTime => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleInputChange = (text, index) => {
    let newCode = [...verificationCode];
    newCode[index] = text;
    setVerificationCode(newCode);

    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace' && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ScreenFive')}>
          <Image
            source={require('../assets/images/Back.png')}
            style={styles.backImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.headContainer}>
        <Text style={styles.headTxt}>Verification Code</Text>
      </View>
      <View style={styles.imgcontainer}>
        <Image
          style={styles.img}
          source={require('../assets/images/Forgot.png')}
        />
      </View>

      <View style={styles.inputcontainer}>
        {verificationCode.map((code, index) => (
          <TextInput
            key={index}
            ref={el => (inputRefs.current[index] = el)}
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            value={code}
            onChangeText={text => handleInputChange(text, index)}
            onKeyPress={event => handleKeyPress(event,index)}
          />
        ))}
      </View>

      <View style={styles.timercontainer}>
      <Text style={styles.timertxt}>
        <Text style={{ fontWeight: '700' }}>00:{timer < 10 ? `0${timer}` : timer}</Text> resend confirmation code.
      </Text>
      </View>
      <View style={styles.crtBtncontainer}>
              <TouchableOpacity style={styles.crtbtn} onPress={()=>{navigation.navigate('ScreenSeven')}}>
                <Text style={styles.crtbtntxt}>Confirm Code</Text>
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
  inputcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: width * 0.04,
    marginBottom: height * 0.03,
  },
  input: {
    width: width * 0.15,
    height: width * 0.19,
    borderWidth: 2,
    borderColor: '#DADADA',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: fontSize(22),
    fontWeight: '500',
    color: '#1D1E20',
  },
  timercontainer:{
    alignItems:'center',
    marginTop: height * 0.28,
  },
  timertxt:{
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: fontSize(13),
    fontWeight: '400',
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

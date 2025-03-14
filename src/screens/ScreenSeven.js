import {
    Alert,
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
export default function ScreenSeven() {
  const navigation = useNavigation();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validatePasswords = () => {
    let newErrors = {};
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleResetPassword = () => {
    if (validatePasswords()) {
      Alert.alert('Success', 'Password has been reset successfully!');
      navigation.navigate('ScreenFour');
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
        <Text style={styles.headTxt}>New Password</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputBox}>
          <TextInput
            onChangeText={setPassword}
            value={password}
            secureTextEntry
            style={styles.input}
          />
        </View>
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.inputBox}>
          <TextInput
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            secureTextEntry
            style={styles.input}
          />
        </View>
        {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
         <View style={styles.txtcontainer}>
                  <Text style={styles.txt}>Please write your new password.</Text>
                </View>
      </View>
      <View style={styles.crtBtncontainer}>
                    <TouchableOpacity style={styles.crtbtn} onPress={handleResetPassword}>
                      <Text style={styles.crtbtntxt}>Reset Password</Text>
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
  inputContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.20,
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
  txtcontainer: {
    marginTop: height * 0.33,
  },
  txt: {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: fontSize(13),
    fontWeight: '400',
    opacity: 0.6,
  },
});

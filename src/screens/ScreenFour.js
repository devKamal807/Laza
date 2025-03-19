import {
  Dimensions,
  Image,
  PixelRatio,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const fontSize = size => PixelRatio.getFontScale() * size;

export default function ScreenFour() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const [errors, setErrors] = useState({username: '', password: ''});

  useEffect(() => {
    const timeout = setTimeout(() => {
      let newErrors = {username: '', password: ''};

      if (username.trim().length > 0 && username.trim().length < 3) {
        newErrors.username = 'Username must be at least 3 characters.';
      }

      if (password.length > 0 && password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters.';
      }

      setErrors(newErrors);
    }, 500);

    return () => clearTimeout(timeout);
  }, [username, password]);

  const handleUsernameChange = text => setUsername(text);
  const handlePasswordChange = text => setPassword(text);

  const isFormValid =
    !errors.username && !errors.password && username && password;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ScreenThree')}>
          <Image
            source={require('../assets/images/Back.png')}
            style={styles.backImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.headContainer}>
        <Text style={styles.headTxt}>Welcome</Text>
        <Text style={styles.subhead}>Please enter your data to continue</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <View style={styles.inputBox}>
          <TextInput
            onChangeText={handleUsernameChange}
            value={username}
            style={styles.input}
          />
          {username.length >= 3 && (
            <Image
              source={require('../assets/images/CheckIcon.png')}
              style={styles.checkIcon}
            />
          )}
        </View>
        {errors.username ? (
          <Text style={styles.errorText}>{errors.username}</Text>
        ) : null}

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputBox}>
          <TextInput
            onChangeText={handlePasswordChange}
            value={password}
            secureTextEntry
            style={styles.input}
          />
          {password.length >= 6 && (
            <Text style={styles.passwordStrength}>Strong</Text>
          )}
        </View>
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}

        <View style={styles.forgotcontainer}>
          <TouchableOpacity
            style={styles.forgotbutton}
            onPress={() => {
              navigation.navigate('ScreenFive');
            }}>
            <Text style={styles.forgottxt}>Forgot password</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rememberContainer}>
          <Text style={styles.rememberText}>Remember me</Text>
          <Switch
            value={remember}
            onValueChange={() => setRemember(!remember)}
            trackColor={{false: '#ccc', true: '#34C759'}}
            thumbColor={'#fff'}
          />
        </View>
        <View style={styles.termcontainer}>
          <Text style={styles.termnormal}>
            By connecting your account confirm that you agree with our{' '}
            <Text style={styles.termBold}>Term and Condition</Text>
          </Text>
        </View>
      </View>

      <View style={styles.crtBtncontainer}>
        <TouchableOpacity style={styles.crtbtn} onPress={()=>{navigation.navigate('NavigationTab')}}>
          <Text style={styles.crtbtntxt}>Login</Text>
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
    marginTop: height * 0.045,
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
  subhead: {
    fontFamily: 'Inter',
    fontSize: fontSize(15),
    fontWeight: '400',
    opacity: 0.5,
  },
  inputContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.13,
  },
  label: {
    marginTop: height * 0.02,
    fontSize: fontSize(13),
    fontWeight: '400',
    fontFamily: 'Inter',
    opacity: 0.7,
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
    fontFamily: 'Inter',
  },
  checkIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#34C358',
  },
  passwordStrength: {
    color: '#34C358',
    fontWeight: '500',
    fontSize: fontSize(11),
  },
  rememberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  rememberText: {
    fontSize: fontSize(13),
    color: '#333',
    fontWeight: '500',
  },
  forgotcontainer: {
    alignItems: 'flex-end',
    marginTop: height * 0.03,
  },
  forgottxt: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: fontSize(15),
    color: '#EA4335',
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
    // justifyContent: 'center',
    alignItems: 'center',
  },
  crtbtntxt: {
    fontSize: fontSize(17),
    fontWeight: '500',
    color: '#FFFFFF',
    marginVertical: height * 0.01,
  },
  termcontainer: {
    marginTop: height * 0.25,
    alignItems: 'center',
  },
  termnormal: {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: fontSize(13),
    fontWeight: '400',
    opacity: 0.6,
    color: '#1D1E20',
  },
  termBold: {
    fontWeight: 'bold',
    opacity: 1,
    color: '#1D1E20',
  },
});

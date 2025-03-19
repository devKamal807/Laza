import {
  Image,
  PixelRatio,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const fontSize = size => PixelRatio.getFontScale() * size;

export default function ScreenThree() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({ username: '', email: '', password: '' });

  useEffect(() => {
    const timeout = setTimeout(() => {
      let newErrors = { username: '', email: '', password: '' };

      if (username.trim().length > 0 && username.trim().length < 3) {
        newErrors.username = 'Username must be at least 3 characters.';
      }

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (email.trim().length > 0 && !emailRegex.test(email.trim())) {
        newErrors.email = 'Invalid email format.';
      }

      if (password.length > 0 && password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters.';
      }

      setErrors(newErrors);
    }, 500);

    return () => clearTimeout(timeout);
  }, [username, email, password]);

  const handleSignUp = () => {
    let newErrors = { username: '', email: '', password: '' };

    if (!username.trim()) {
      newErrors.username = 'Username is required.';
    } else if (username.trim().length < 3) {
      newErrors.username = 'Username must be at least 3 characters.';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email.trim())) {
        newErrors.email = 'Invalid email format.';
      }
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    setErrors(newErrors);

    if (!Object.values(newErrors).some(error => error !== '')) {
      navigation.navigate('ScreenFour');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ScreenTwo')}>
          <Image source={require('../assets/images/Back.png')} style={styles.backImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.headContainer}>
        <Text style={styles.headTxt}>Sign Up</Text>
      </View>

      
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <View style={styles.inputBox}>
            <TextInput
              onChangeText={setUsername}
              value={username}
              style={styles.input}
            />
            {username.length >= 3 && (
              <Image source={require('../assets/images/CheckIcon.png')} style={styles.checkIcon} />
            )}
          </View>
          {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}

          <Text style={styles.label}>Password</Text>
          <View style={styles.inputBox}>
            <TextInput
              onChangeText={setPassword}
              value={password}
              secureTextEntry
              style={styles.input}
            />
            {password.length >= 6 && <Text style={styles.passwordStrength}>Strong</Text>}
          </View>
          {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

          <Text style={styles.label}>Email Address</Text>
          <View style={styles.inputBox}>
            <TextInput
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
              style={styles.input}
            />
            {email.match(/^\S+@\S+\.\S+$/) && (
              <Image source={require('../assets/images/CheckIcon.png')} style={styles.checkIcon} />
            )}
          </View>
          {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

          <View style={styles.rememberContainer}>
            <Text style={styles.rememberText}>Remember me</Text>
            <Switch
              value={remember}
              onValueChange={() => setRemember(!remember)}
              trackColor={{ false: '#ccc', true: '#34C759' }}
              thumbColor={'#fff'}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.crtBtncontainer}>
        <TouchableOpacity style={styles.crtbtn} onPress={handleSignUp}>
          <Text style={styles.crtbtntxt}>Sign Up</Text>
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
  inputContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.13,
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
    marginTop: height * 0.04,
  },
  rememberText: {
    fontSize: fontSize(13),
    color: '#333',
    fontWeight: '500',
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
  errorText: {
    color: 'red',
    fontSize: fontSize(12),
  },
});

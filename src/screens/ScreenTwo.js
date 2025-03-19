import {
  Dimensions,
  Image,
  PixelRatio,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const fontSize = size => PixelRatio.getFontScale() * size;

export default function ScreenTwo() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ScreenOne')}>
          <Image
            source={require('../assets/images/Back.png')}
            style={styles.backImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.headContainer}>
        <Text style={styles.headTxt}>Let’s Get Started</Text>
      </View>

      <View style={styles.logbtncontainer}>
        <TouchableOpacity style={styles.facebook}>
          <Image
            source={require('../assets/images/Facebook.png')}
            style={styles.icon}
          />
          <Text style={styles.lgnTxtWhite}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.twitter}>
          <Image
            source={require('../assets/images/Twitter.png')}
            style={styles.icon}
          />
          <Text style={styles.lgnTxtWhite}>Twitter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.google}>
          <Image
            source={require('../assets/images/Google.png')}
            style={styles.icon}
          />
          <Text style={[styles.lgnTxtDark, {color: '#FFFFFF'}]}>Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signContainer}>
        <Text style={styles.qsTxt}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ScreenFour');
          }}>
          <Text style={styles.signTxt}>Signin</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.crtBtncontainer}>
        <TouchableOpacity
          style={styles.crtbtn}
          onPress={() => {
            navigation.navigate('ScreenThree');
          }}>
          <Text style={styles.crtbtntxt}>Create an Account</Text>
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
    zIndex:1,
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
  logbtncontainer: {
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.18,
  },
  facebook: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.85,
    height: height * 0.06,
    backgroundColor: '#4267B2',
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: height * 0.01,
  },
  twitter: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.85,
    height: height * 0.06,
    backgroundColor: '#1DA1F2',
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: height * 0.01,
  },
  google: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.85,
    height: height * 0.06,
    backgroundColor: '#EA4335',
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: height * 0.01,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  icon: {
    width: width * 0.08,
    height: width * 0.08,
    resizeMode: 'contain',
    marginRight: width * 0.03,
  },
  lgnTxtWhite: {
    fontSize: fontSize(17),
    fontWeight: '600',
    color: '#FFFFFF',
  },
  lgnTxtDark: {
    fontSize: fontSize(18),
    fontWeight: '500',
    color: '#333',
  },
  signContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: height * 0.3,
  },
  qsTxt: {
    fontSize: fontSize(15),
    opacity: 0.5,
    fontFamily: 'Inter',
  },
  signTxt: {
    fontSize: fontSize(15),
    fontWeight: '400',
    fontFamily: 'Inter',
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
});

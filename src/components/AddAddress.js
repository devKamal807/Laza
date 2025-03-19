import {
  Dimensions,
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
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const fontSize = size => PixelRatio.getFontScale() * size;

export default function AddAddress() {
  const navigation = useNavigation();

  const [name, setName] = useState('Mrh Raju');
  const [country, setCountry] = useState('Bangladesh');
  const [city, setCity] = useState('Sylhet');
  const [phone, setPhone] = useState('+880 1453-987533');
  
  const [remember, setRemember] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.backcontainer}>
              <View style={styles.backimgcontainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={require('../assets/images/Back.png')}
                    style={styles.backImage}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.headContainer}>
                <Text style={styles.headTxt}>Address</Text>
              </View>
            </View>

      <View style={styles.nameContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          placeholder="Type your name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#8F959E"
          style={styles.input}
        />
      </View>

      <View style={styles.dualInputContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Country</Text>
          <TextInput
            value={country}
            onChangeText={setCountry}
            placeholder="Enter country"
            placeholderTextColor="#8F959E"
            style={styles.input}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>City</Text>
          <TextInput
            value={city}
            onChangeText={setCity}
            placeholder="Enter city"
            placeholderTextColor="#8F959E"
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.phonecontainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          placeholder="Type your name"
          value={phone}
          onChangeText={setPhone}
          placeholderTextColor="#8F959E"
          style={styles.input}
        />
      </View>

      <View style={styles.Addresscontainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          placeholder="Type your name"
          value={phone}
          onChangeText={setPhone}
          placeholderTextColor="#8F959E"
          style={styles.input}
        />
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
      </ScrollView>

      <View style={styles.crtBtncontainer}>
        <TouchableOpacity style={styles.crtbtn}>
          <Text style={styles.crtbtntxt}>Save Address</Text>
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
  backcontainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop: height * 0.045,
    marginLeft: width * 0.05,
    marginBottom:height * 0.05,
  },
  backImage: {
    width: width * 0.08,
    height: width * 0.08,
    resizeMode: 'contain',
  },
  headContainer:{
    marginRight:height * 0.18,
    marginTop: height * 0.002,

  },
  headTxt:{
    fontSize: fontSize(17),
    fontWeight: '600',
    fontFamily: 'InterBold',
  },
  label: {
    fontSize: fontSize(17),
    fontWeight: '500',
    fontFamily: 'Inter',
    marginBottom: height * 0.008,
  },
  input: {
    backgroundColor: '#F5F6FA',
    borderRadius: 10,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.015,
    fontSize: fontSize(15),
    opacity: 0.7,
  },
  nameContainer: {
    marginBottom: height * 0.02,
    width:'90%',
    alignSelf:'center',
  },
  dualInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.02,
    width:'90%',
    alignSelf:'center',
  },
  inputWrapper: {
    width: '48%',
  },
  phonecontainer: {
    marginBottom: height * 0.02,
    width:'90%',
    alignSelf:'center',
  },
  Addresscontainer: {
    marginBottom: height * 0.02,
    width:'90%',
    alignSelf:'center',
  },
  rememberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'90%',
    alignSelf:'center',
  },
  rememberText: {
    fontSize: fontSize(15),
    fontWeight: '500',
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
    alignItems: 'center',
  },
  crtbtntxt: {
    fontSize: fontSize(17),
    fontWeight: '500',
    color: '#FFFFFF',
    marginVertical: height * 0.01,
  },
});

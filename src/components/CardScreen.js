import {
  Dimensions,
  Image,
  PixelRatio,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Switch,
  ScrollView,
  FlatList,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const fontSize = (size) => PixelRatio.getFontScale() * size;

const cards = [
  { id: '1', image: require('../assets/cards/cardone.png') },
  { id: '2', image: require('../assets/cards/cardone.png') },
  { id: '3', image: require('../assets/cards/cardone.png') },
  { id: '4', image: require('../assets/cards/cardone.png') },
];

export default function CardScreen() {
  const navigation = useNavigation();

  const [owner, setOwner] = useState('Mrh Raju');
  const [cardnumber, setCardNumber] = useState('');
  const [exp, setExp] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveinfo, setSaveInfo] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <ScrollView 
            contentContainerStyle={{ flexGrow: 1 }} 
            keyboardShouldPersistTaps="handled"
          >
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
                      <Text style={styles.headTxt}>Payment</Text>
                    </View>
                  </View>


            <View style={styles.cardcontainer}>
              <FlatList
                horizontal
                data={cards}
                keyExtractor={(item) => item.id}
                keyboardShouldPersistTaps="handled"
                renderItem={({ item }) => (
                  <Pressable>
                    <View style={styles.cardline}>
                      <Image source={item.image} style={styles.cardimg} />
                    </View>
                  </Pressable>
                )}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 10 }} />} // Space between cards
              />
            </View>

            <TouchableOpacity 
              style={styles.button} 
              activeOpacity={0.7} 
              onPress={() => navigation.navigate('NewCard')}
            >
              <Image source={require('../assets/cards/pluss.png')} style={styles.icon} />
              <Text style={styles.text}>Add new card</Text>
            </TouchableOpacity>

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

            <View style={styles.savecontainer}>
              <Text style={styles.savetxt}>Save card info</Text>
              <Switch
                value={saveinfo}
                onValueChange={() => setSaveInfo(!saveinfo)}
                trackColor={{ false: '#ccc', true: '#34C759' }}
                thumbColor={'#fff'}
              />
            </View>

            <View style={styles.crtBtncontainer}>
              <TouchableOpacity style={styles.crtbtn}>
                <Text style={styles.crtbtntxt}>Save Card</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
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
    marginTop: height * 0.05,
    marginLeft: width * 0.05,
    marginBottom:height * 0.05,
  },
  backImage: {
    width: width * 0.08,
    height: width * 0.08,
    resizeMode: 'contain',
  },
  headContainer:{
    marginRight:height * 0.19,
    marginTop: height * 0.002,

  },
  headTxt:{
    fontSize: fontSize(17),
    fontWeight: '600',
    fontFamily: 'InterBold',
  },
  cardcontainer: {
    width: '90%',
    alignSelf: 'center',

    justifyContent: 'space-between',
    marginTop: height * 0.03,
  },
  cardline: {
    gap: 5,
  },
  cardimg: {
    height: height * 0.25,
    width: width * 0.8,
    borderRadius:5,
  },

  addcontainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.04,
    alignItems: 'center',
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#9C89FF',
    backgroundColor: '#F5F0FF',
    paddingVertical: 12,
    // paddingHorizontal: 20,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.03,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 8,
    tintColor: '#9C89FF',
  },
  text: {
    fontSize: 16,
    color: '#9C89FF',
    fontWeight: '600',
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
  carddtcontainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  savecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    // marginTop: height * 0.04,
  },
  savetxt: {
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

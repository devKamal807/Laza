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
import Slider from '@react-native-community/slider';

const {width, height} = Dimensions.get('window');

const fontSize = size => PixelRatio.getFontScale() * size;

export default function AddReview() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [value, setValue] = useState(2.5);
  return (
    <SafeAreaView style={styles.container}>
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
                <Text style={styles.headTxt}>Add Reviews</Text>
              </View>
            </View>

      <View style={styles.namecontainer}>
        <Text style={styles.nametxt}>Name</Text>
        <TextInput
          placeholder="Type your name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#8F959E"
          style={styles.nameinput}
        />
      </View>

      <View style={styles.reviewcontainer}>
        <Text style={styles.reviewqstn}>How was your experience?</Text>
        <TextInput
          placeholder="Describe youe experience?"
          value={review}
          onChangeText={setReview}
          style={[styles.nameinput, styles.reviewInput]}
          multiline
          placeholderTextColor="#8F959E"
        />
      </View>

      <View style={styles.starcontainer}>
        <Text style={styles.starttxt}>Star</Text>
      </View>

      <View style={styles.sliderContainer}>
        <Text style={styles.label}>0.0</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={5}
          step={0.1}
          value={value}
          onValueChange={setValue}
          minimumTrackTintColor="#D1D5DB"
          maximumTrackTintColor="#F3F4F6"
          thumbTintColor="#9775FA"
        />
        <Text style={styles.label}>{value.toFixed(1)}</Text>
      </View>
      <View style={styles.crtBtncontainer}>
        <TouchableOpacity
          style={styles.crtbtn}
          onPress={() => navigation.goBack()}>
          <Text style={styles.crtbtntxt}>Submit Review</Text>
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
    marginRight:height * 0.17,
    marginTop: height * 0.002,

  },
  headTxt:{
    fontSize: fontSize(17),
    fontWeight: '600',
    fontFamily: 'InterBold',
  },
  namecontainer: {
    width: '90%',
    alignSelf: 'center',
  },
  nametxt: {
    fontSize: fontSize(17),
    fontFamily: 'InterBold',
    fontWeight: '500',
    marginBottom: height * 0.01,
  },
  nameinput: {
    backgroundColor: '#F5F6FA',
    borderRadius: 10,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.015,
    fontSize: fontSize(15),
    fontFamily: 'Inter',
  },
  reviewcontainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  reviewqstn: {
    fontSize: fontSize(17),
    fontFamily: 'InterBold',
    fontWeight: '500',
    marginBottom: height * 0.01,
  },
  reviewInput: {
    height: height * 0.25,
    textAlignVertical: 'top',
  },
  starcontainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  starttxt: {
    fontSize: fontSize(17),
    fontFamily: 'InterBold',
    fontWeight: '500',
    marginBottom: height * 0.01,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
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

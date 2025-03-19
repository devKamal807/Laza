import {
  Dimensions,
  Image,
  PixelRatio,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const fontSize = size => PixelRatio.getFontScale() * size;

const reviews = [
  {
    id: '1',
    uname: 'Jenny Wilson',
    rating: '4.8',
    date: '13 Sep,2020',
    avatar: require('../assets/avatar/avatarone.png'),
    clc: require('../assets/images/clock.png'),
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...',
    star: require('../assets/images/Star.png'),
  },
  {
    id: '2',
    uname: 'Ronald Richards',
    rating: '4.8',
    date: '13 Sep,2020',
    avatar: require('../assets/avatar/avatartwo.png'),
    clc: require('../assets/images/clock.png'),
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...',
    star: require('../assets/images/Star.png'),
  },
  {
    id: '3',
    uname: 'Guy Hawkins',
    rating: '4.8',
    date: '13 Sep,2020',
    avatar: require('../assets/avatar/avatarthree.png'),
    clc: require('../assets/images/clock.png'),
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...',
    star: require('../assets/images/Star.png'),
  },
  {
    id: '4',
    uname: 'Savannah Nguyen',
    rating: '4.8',
    date: '13 Sep,2020',
    avatar: require('../assets/avatar/avatarfour.png'),
    clc: require('../assets/images/clock.png'),
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...',
    star: require('../assets/images/Star.png'),
  },
];

export default function ReviewScreen() {
  const navigation = useNavigation();
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
          <Text style={styles.headTxt}>Reviews</Text>
        </View>
      </View>

      <View style={styles.topcontainer}>
        <View style={styles.containertwo}>
          <Text style={styles.norvs}>245 Reviews</Text>
          <View style={styles.containerthree}>
            <Text style={styles.rttxt}>4.8</Text>
            <Image
              source={require('../assets/images/Star.png')}
              style={styles.rtimg}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate('AddReview');
          }}>
          <Image
            source={require('../assets/images/edit.png')}
            style={styles.icon}
          />
          <Text style={styles.btntxt}>Add Review</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.reviewContainer}>
          {reviews.map(item => (
            <View key={item.id} style={styles.reviewItemWrapper}>
              <View style={styles.reviewItem}>
                <Image source={item.avatar} style={styles.avatar} />
                <View style={styles.reviewDetails}>
                  <View style={styles.reviewHeader}>
                    <Text style={styles.userName}>{item.uname}</Text>
                    <View style={styles.ratingContainer}>
                      <View style={styles.ratingContainerin}>
                        <Text style={styles.rating}>{item.rating}</Text>
                        <Text style={styles.ratingLabel}> rating</Text>
                      </View>
                      <View style={styles.ratingContainerout}>
                        <Image source={item.star} style={styles.starIcon} />
                      </View>
                    </View>
                  </View>
                  <View style={styles.dateContainer}>
                    <Image source={item.clc} style={styles.clockIcon} />
                    <Text style={styles.dateText}>{item.date}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.reviewTextContainer}>
                <Text style={styles.reviewText} numberOfLines={3}>
                  {item.review}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
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
  topcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginBottom: height * 0.02,
  },
  containerthree: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.01,
    backgroundColor: '#FF7043',
    borderRadius: 5,
    gap: 5,
  },
  norvs: {
    fontSize: fontSize(15),
    fontWeight: '500',
  },
  rttxt: {
    fontSize: fontSize(13),
    marginRight: width * 0.02,
  },
  rtimg: {
    width: width * 0.14,
    height: width * 0.05,
    resizeMode: 'contain',
  },
  btntxt: {
    fontSize: fontSize(13),
    color: '#FEFEFE',
    fontFamily: 'Inter',
  },
  reviewContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  reviewItemWrapper: {
    marginBottom: height * 0.015,
  },
  reviewItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 50,
    marginRight: width * 0.04,
  },
  reviewDetails: {
    flex: 1,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    fontSize: fontSize(15),
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  ratingContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  ratingContainerin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: fontSize(15),
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  ratingLabel: {
    fontSize: fontSize(11),
    marginLeft: 3,
    opacity: 0.6,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  starIcon: {
    width: width * 0.14,
    height: width * 0.05,
    resizeMode: 'contain',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
  },
  clockIcon: {
    width: width * 0.03,
    height: height * 0.015,
    marginRight: width * 0.008,
  },
  dateText: {
    fontSize: fontSize(11),
    opacity: 0.6,
  },
  reviewTextContainer: {
    marginTop: height * 0.01,
  },
  reviewText: {
    fontSize: fontSize(15),
    opacity: 0.5,
    lineHeight: 20,
    fontFamily: 'Inter',
    textAlign: 'left',
  },
});

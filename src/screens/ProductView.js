import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  PixelRatio,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const fontSize = size => PixelRatio.getFontScale() * size;

const angles = [
  {id: '1', image: require('../assets/angles/angleone.png')},
  {id: '2', image: require('../assets/angles/angletwo.png')},
  {id: '3', image: require('../assets/angles/anglethree.png')},
  {id: '4', image: require('../assets/angles/anglefour.png')},
];

const sizes = ['S', 'M', 'L', 'XL', '2XL'];

const reviews = [
  {
    id: '1',
    uname: 'Ronald Richards',
    rating: '4.8',
    date: '13 Sep,2020',
    avatar: require('../assets/avatar/avatarone.png'),
    clc: require('../assets/images/clock.png'),
    star: require('../assets/images/Star.png'),
  },
];

export default function ProductView() {
  const navigation = useNavigation();

  const [expanded, setExpanded] = useState(false);

  const expandable =
    'The Nike Throwback Pullover Hoodie is made from premium French terry fabric that blends a performance feel with style and comfort.';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require('../assets/images/ViewImage.png')}
          style={styles.bgimage}>
          <View style={styles.backwraper}>
            <TouchableOpacity
              onPress={() => navigation.navigate('NavigationTab')}>
              <Image
                source={require('../assets/images/Back.png')}
                style={styles.imgbtn}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/Cart.png')}
                style={styles.imgbtn}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.aftImg}>
          <View style={styles.ctlabel}>
            <Text style={styles.cttxt}>Men's Printed Pullover Hoodie</Text>
            <Text style={styles.cttxt}>Price</Text>
          </View>
          <View style={styles.dtlabel}>
            <Text style={styles.dttxt}>Nike Club Fleece</Text>
            <Text style={styles.dttxt}>$120</Text>
          </View>

          <FlatList
            horizontal
            data={angles}
            keyExtractor={item => item.id}
            windowSize={3}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.anglecontainer}>
                <Image source={item.image} style={styles.angleimage} />
              </TouchableOpacity>
            )}
          />

          <View style={styles.sizeContainer}>
            <Text style={styles.sizeText}>Size</Text>
            <TouchableOpacity>
              <Text style={styles.sizeGuideText}>Size Guide</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sizesListContainer}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item}
              data={sizes}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.sizeOption}>
                  <Text style={styles.sizeText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={styles.Descriptioncontainer}>
            <Text style={styles.deshead}>Description</Text>
          </View>
          <View style={styles.expcontainer}>
            <Text style={styles.exptext}>
              {expanded ? expandable : expandable.slice(0, 80)}
              {!expanded && (
                <TouchableOpacity onPress={() => setExpanded(true)}>
                  <Text style={styles.readMore}> Read More..</Text>
                </TouchableOpacity>
              )}
            </Text>
          </View>
          <View style={styles.rvcontainer}>
            <Text style={styles.rvtxt}>Reviews</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ReviewScreen');
              }}>
              <Text style={styles.vall}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.reviewContainer}>
            {reviews.map(item => (
              <View key={item.id} style={styles.reviewItem}>
                <Image source={item.avatar} style={styles.avatar} />

                <View style={styles.reviewDetails}>
                  <View style={styles.reviewHeader}>
                    <Text style={styles.userName}>{item.uname}</Text>

                    <View style={styles.ratingContainer}>
                      <Text style={styles.rating}>{item.rating}</Text>
                      <Text style={styles.ratingLabel}> rating</Text>
                    </View>
                  </View>

                  <View style={styles.dateContainer}>
                    <Image source={item.clc} style={styles.clockIcon} />
                    <Text style={styles.dateText}>{item.date}</Text>
                  </View>
                </View>

                <View style={styles.starContainer}>
                  <Image source={item.star} style={styles.starIcon} />
                </View>
              </View>
            ))}
          </View>
          <View style={styles.userrv}>
            <Text style={styles.userrvtxt}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque malesuada eget vitae amet...
            </Text>
          </View>

          <View style={styles.totalcontainer}>
            <View style={styles.lftcontainer}>
              <Text style={styles.totalhead}>Total Price</Text>
              <Text style={styles.subhead}>with VAT,SD</Text>
            </View>
            <View style={styles.pricecontainer}>
              <Text style={styles.totalprce}>$125</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.crtBtncontainer}>
        <TouchableOpacity
          style={styles.crtbtn}
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <Text style={styles.crtbtntxt}>Add to Cart</Text>
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
  bgimage: {
    height: height * 0.45,
  },
  backwraper: {
    flexDirection: 'row',
    marginTop: height * 0.05,
    marginHorizontal: width * 0.04,
    justifyContent: 'space-between',
  },
  imgbtn: {
    width: width * 0.12,
    height: width * 0.12,
    resizeMode: 'contain',
  },
  nikelogo: {
    width: width * 0.3,
    resizeMode: 'contain',
  },
  aftImg: {
    width: '95%',
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  ctlabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: width * 0.05,
  },
  cttxt: {
    fontSize: fontSize(13),
    fontFamily: 'Inter',
    opacity: 0.5,
  },
  dtlabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: width * 0.05,
    marginTop: height * 0.01,
  },
  dttxt: {
    fontSize: fontSize(22),
    fontFamily: 'InterBold',
    fontWeight: '600',
  },
  anglecontainer: {
    marginHorizontal: width * 0.02,
    marginTop: height * 0.01,
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: width * 0.05,
    marginTop: height * 0.02,
  },
  sizeText: {
    fontSize: fontSize(17),
    fontFamily: 'InterBold',
  },
  sizeGuideText: {
    fontSize: fontSize(15),
    fontFamily: 'Inter',
    opacity: 0.6,
  },
  angleimage: {
    width: width * 0.2,
    height: width * 0.15,
    resizeMode: 'contain',
  },
  sizesListContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: height * 0.02,
    marginHorizontal: width * 0.03,
  },
  sizeOption: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: 5,
    backgroundColor: '#F5F6FA',
    marginHorizontal: 5,
  },
  Descriptioncontainer: {
    marginHorizontal: width * 0.05,
    marginTop: height * 0.01,
  },
  deshead: {
    fontSize: fontSize(17),
    fontFamily: 'InterBold',
  },
  expcontainer: {
    marginHorizontal: width * 0.05,
    marginTop: height * 0.01,
  },
  exptext: {
    fontSize: fontSize(15),
    fontFamily: 'Inter',
    opacity: 0.6,
  },
  readMore: {
    fontWeight: '400',
    opacity: 2,
  },
  rvcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: width * 0.04,
    marginTop: height * 0.02,
  },
  rvtxt: {
    fontSize: fontSize(17),
    fontFamily: 'InterBold',
  },
  vall: {
    fontSize: fontSize(15),
    fontFamily: 'Inter',
    opacity: 0.6,
  },
  reviewContainer: {
    marginHorizontal: width * 0.066,
    marginTop: height * 0.01,
  },

  reviewItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width * 0.01,
  },
  avatar: {
    width: width * 0.06,
    height: height * 0.06,
    borderRadius: 20,
    marginRight: width * 0.03,
  },
  reviewDetails: {
    flex: 1,
    // marginHorizontal: width * 0.03,
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
    flexDirection: 'row',
    marginLeft: width * 0.3,
  },
  rating: {
    fontSize: fontSize(15),
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  ratingLabel: {
    fontSize: fontSize(11),
    fontWeight: '400',
    fontFamily: 'Inter',
    marginTop: height * 0.004,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.001,
  },
  clockIcon: {
    width: width * 0.04,
    height: height * 0.02,
    marginRight: width * 0.01,
  },
  dateText: {
    fontSize: fontSize(11),
    fontWeight: '500',
    fontFamily: 'Inter',
    opacity: 0.5,
  },
  starContainer: {
    marginTop: height * 0.02,
    marginLeft: width * 0.23,
  },
  starIcon: {
    width: width * 0.13,
    height: height * 0.04,
    resizeMode: 'contain',
  },

  userrv: {
    marginHorizontal: width * 0.05,
    marginTop: height * 0.01,
  },
  userrvtxt: {
    fontSize: fontSize(15),
    fontWeight: '400',
    fontFamily: 'Inter',
    opacity: 0.6,
  },
  totalcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: width * 0.05,
    marginTop: height * 0.02,
  },
  totalhead: {
    fontSize: fontSize(15),
    fontFamily: 'InterBold',
    fontWeight: '600',
  },
  subhead: {
    fontSize: fontSize(11),
    fontFamily: 'Inter',
    fontWeight: '400',
    opacity: 0.7,
  },
  pricecontainer: {
    marginVertical: height * 0.001,
    marginBottom: height * 0.03,
  },
  totalprce: {
    fontSize: fontSize(17),
    fontFamily: 'InterBold',
    fontWeight: '600',
  },
  crtBtncontainer: {
    position: 'static',
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

import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  PixelRatio,
  Pressable,
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

const product = [
  {
    id: '1',
    des: 'Nike Sportswear Club Fleece',
    price: '$99',
    image: require('../assets/model/modalfour.png'),
  },
  {
    id: '2',
    des: 'Trail Running Jacket Nike Windrunner',
    price: '$99',
    image: require('../assets/model/modalthree.png'),
  },
  {
    id: '3',
    des: 'Nike Sportswear Club Fleece',
    price: '$99',
    image: require('../assets/model/modaltwo.png'),
  },
  {
    id: '4',
    des: 'Trail Running Jacket Nike Windrunner',
    price: '$99',
    image: require('../assets/model/modalone.png'),
  },
  {
    id: '5',
    des: 'Nike Sportswear Club Fleece',
    price: '$99',
    image: require('../assets/model/modalfour.png'),
  },
  {
    id: '6',
    des: 'Trail Running Jacket Nike Windrunner',
    price: '$99',
    image: require('../assets/model/modalthree.png'),
  },
  {
    id: '7',
    des: 'Nike Sportswear Club Fleece',
    price: '$99',
    image: require('../assets/model/modaltwo.png'),
  },
  {
    id: '8',
    des: 'Trail Running Jacket Nike Windrunner',
    price: '$99',
    image: require('../assets/model/modalone.png'),
  },
];

export default function WishList() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topcontainer}>
        <View style={styles.backContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            accessible={true}
            accessibilityLabel="Go back">
            <Image
              source={require('../assets/images/Back.png')}
              style={styles.backImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.headContainer}>
          <Text style={styles.headtxt}>Wishlist</Text>
        </View>
        <View style={styles.cartcontainer}>
          <Pressable
            onPress={() => {
              navigation.navigate('Cart');
            }}>
            <Image
              source={require('../assets/images/Cart.png')}
              style={styles.backImage}
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.available}>
        <View>
          <Text style={styles.itmtxt}>365 Items</Text>
          <Text style={styles.avltxt}>Available in stock</Text>
        </View>
        <View style={styles.sortcontainer}>
          <Image
            source={require('../assets/images/pencil.png')}
            style={styles.sortimage}
          />
          <Text>Edit</Text>
        </View>
      </View>
      <View style={styles.fltcontainer}>
        <FlatList
          data={product}
          keyExtractor={item => item.id}
          numColumns={2}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProductView');
              }}>
              <View style={styles.productCard}>
                <ImageBackground
                  source={item.image}
                  style={styles.productImage}>
                  <TouchableOpacity>
                    <Image
                      source={require('../assets/images/Heart.png')}
                      style={[styles.heart]}
                    />
                  </TouchableOpacity>
                </ImageBackground>
                <Text style={styles.productDes}>{item.des}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
              </View>
              <View style={styles.des}>
                
              </View>
            </TouchableOpacity>
          )}
          ListFooterComponent={<View style={{height: 50}} />}
          contentContainerStyle={{ paddingBottom: height * 0.2 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topcontainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.045,
    alignSelf: 'center',
  },
  backImage: {
    width: width * 0.08,
    height: width * 0.08,
    resizeMode: 'contain',
  },
  headtxt: {
    fontSize: fontSize(17),
    fontWeight: '600',
    fontFamily: 'InterBold',
  },
  available: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: height * 0.04,
  },
  sortcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5F6FA',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.015,
    borderRadius: 10,
  },
  sortimage: {
    marginRight: width * 0.01,
    marginTop: height * 0.003,
  },
  itmtxt: {
    fontSize: fontSize(17),
    fontFamily: 'Inter',
    fontWeight: '500',
  },
  avltxt: {
    fontSize: fontSize(15),
    fontFamily: 'Inter',
    fontWeight: '400',
    opacity: 0.5,
  },
  heart: {
    width: width * 0.07,
    height: height * 0.04,
    resizeMode: 'contain',
    position: 'absolute',
    top: height * 0.01,
    right: width * 0.03,
  },
  fltcontainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
  productCard: {
    borderRadius: 20,
    width:'90%',
    alignSelf:'center',
    justifyContent:'space-between'

  },
  productImage: {
    width: width * 0.42,
    height: height * 0.24,
    borderRadius: 20,
    resizeMode: 'contain',
    alignSelf:'center',
  },
  productDes: {
    fontSize: fontSize(11),
    fontWeight: '500',
    fontFamily: 'Inter',
    textAlign: 'left',
  },
  productPrice: {
    fontSize: fontSize(13),
    fontWeight: '600',
  },
  des: {
    width: '65%',
    marginLeft: width * 0.05,
  },
});

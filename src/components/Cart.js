import React, {useState, useCallback} from 'react';
import {
  Dimensions,
  Image,
  PixelRatio,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
const fontSize = size => PixelRatio.getFontScale() * size;

const images = {
  increase: require('../assets/cart/up.png'),
  decrease: require('../assets/cart/down.png'),
  delete: require('../assets/cart/Delete.png'),
  back: require('../assets/images/Back.png'),
  rightArrow: require('../assets/cart/right.png'),
};

const initialCartItems = [
  {
    id: '1',
    image: require('../assets/cart/imageone.png'),
    proname: "Men's Tie-Dye T-Shirt\nNike Sportswear",
    price: '$45 (-$4.00 Tax)',
    quantity: 1,
  },
  {
    id: '2',
    image: require('../assets/cart/imagetwo.png'),
    proname: "Men's Tie-Dye T-Shirt\nNike Sportswear",
    price: '$45 (-$4.00 Tax)',
    quantity: 1,
  },
];

export default function Cart() {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = useCallback((id, type) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === 'increase'
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item,
      ),
    );
  }, []);

  const removeItem = useCallback(id => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.productImage} />

      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.proname}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => updateQuantity(item.id, 'decrease')}
            style={styles.iconContainer}
            accessible={true}
            accessibilityLabel="Decrease quantity">
            <Image source={images.decrease} style={styles.icon} />
          </TouchableOpacity>

          <Text style={styles.quantity}>{item.quantity}</Text>

          <TouchableOpacity
            onPress={() => updateQuantity(item.id, 'increase')}
            style={styles.iconContainer}
            accessible={true}
            accessibilityLabel="Increase quantity">
            <Image source={images.increase} style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => removeItem(item.id)}
            style={styles.deleteButton}
            accessible={true}
            accessibilityLabel="Remove item">
            <Image source={images.delete} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

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
                <Text style={styles.headTxt}>Cart</Text>
              </View>
            </View>
      <View>
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <ScrollView>
        <View style={styles.addressContainer}>
          <TouchableOpacity
            style={styles.addressContainerBtn}
            onPress={() => {
              navigation.navigate('AddAddress');
            }}>
            <Text style={styles.addresstxt}>Delivery Address</Text>
            <Image source={images.rightArrow} style={styles.rghtarrow} />
          </TouchableOpacity>
        </View>

        <View style={styles.dvradrscontainer}>
          <View>
            <ImageBackground
              source={require('../assets/cart/rectmap.png')}
              style={styles.mapBackground}>
              <ImageBackground
                source={require('../assets/cart/locationround.png')}
                style={styles.locationRound}>
                <Image
                  source={require('../assets/cart/Location.png')}
                  style={styles.locationIcon}
                />
              </ImageBackground>
            </ImageBackground>
          </View>
          <View style={styles.adrstxtcontainer}>
            <Text style={styles.adrstxt}>Chhatak, Sunamgonj 12/8AB</Text>
            <Text style={styles.city}>Sylhet</Text>
          </View>
          <View>
            <Image source={require('../assets/cart/Check.png')} />
          </View>
        </View>
        <View style={styles.payhead}>
          <TouchableOpacity
            style={styles.payheadbtn}
            onPress={() => {
              navigation.navigate('CardScreen');
            }}>
            <Text style={styles.payheadtxt}>Payment Method</Text>
            <Image source={images.rightArrow} style={styles.payrghtarrow} />
          </TouchableOpacity>
        </View>

        <View style={styles.paymentcontainer}>
          <View>
            <ImageBackground
              source={require('../assets/cart/visarectangle.png')}
              style={styles.visabg}>
              <Image
                source={require('../assets/cart/visa.png')}
                style={styles.visaimg}
              />
            </ImageBackground>
          </View>
          <View style={styles.visatxtcontainer}>
            <Text style={styles.visatxt}>Visa Classic</Text>
            <Text style={styles.visanum}>**** 7690</Text>
          </View>
          <View style={styles.visacheckcontainer}>
            <Image source={require('../assets/cart/Check.png')} />
          </View>
        </View>

        <View style={styles.payhead}>
          <Text style={styles.payheadtxt}>Order Info</Text>
        </View>

        <View style={styles.bottomcontainer}>
          <View style={styles.subtotalcontainer}>
            <Text style={styles.btmtxt}>Subtotal</Text>
            <Text style={styles.btmprice}>$110</Text>
          </View>
          <View style={styles.ShippingContainer}>
            <Text style={styles.btmtxt}>Shipping cost</Text>
            <Text style={styles.btmprice}>$10</Text>
          </View>
          <View style={styles.totalcontainer}>
            <Text style={styles.btmtxt}>Total</Text>
            <Text style={styles.btmprice}>$120</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.crtBtncontainer}>
        <TouchableOpacity
          style={styles.crtbtn}
          onPress={() => {
            navigation.navigate('OrderConfirm');
          }}>
          <Text style={styles.crtbtntxt}>Checkout</Text>
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
    marginRight:height * 0.21,
    marginTop: height * 0.002,

  },
  headTxt:{
    fontSize: fontSize(17),
    fontWeight: '600',
    fontFamily: 'InterBold',
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#FEFEFE',
    borderRadius: 15,
    padding: height * 0.01,
    marginVertical: height * 0.015,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '90%',
    alignSelf: 'center',
  },
  productImage: {
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
  },
  productDetails: {
    flex: 1,
    marginHorizontal: width * 0.05,
  },
  productName: {
    fontSize: fontSize(13),
    fontWeight: '500',
    fontFamily: 'InterBold',
  },
  productPrice: {
    fontSize: fontSize(11),
    fontFamily: 'Inter',
    opacity: 0.6,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  quantity: {
    fontSize: fontSize(13),
    fontWeight: 'bold',
    marginHorizontal: width * 0.03,
    fontFamily: 'Inter',
  },
  deleteButton: {
    width: width * 0.09,
    height: width * 0.09,
    borderRadius: width * 0.045,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: width * 0.2,
  },
  iconContainer: {
    width: width * 0.09,
    height: width * 0.09,
    borderRadius: width * 0.045,
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width * 0.01,
  },
  icon: {
    width: width * 0.05,
    height: height * 0.03,
    resizeMode: 'contain',
  },
  addressContainer: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: height * 0.01,
  },
  addressContainerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addresstxt: {
    fontSize: fontSize(17),
    fontWeight: '500',
    fontFamily: 'InterBold',
  },
  rghtarrow: {
    marginTop: height * 0.005,
  },
  dvradrscontainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: height * 0.01,
  },
  mapBackground: {
    width: width * 0.15,
    height: width * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationRound: {
    width: width * 0.04,
    height: width * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationIcon: {
    resizeMode: 'contain',
  },
  adrstxtcontainer: {
    marginTop: height * 0.005,
  },
  adrstxt: {
    fontSize: fontSize(15),
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  city: {
    marginTop: height * 0.003,
    fontSize: fontSize(13),
    opacity: 0.6,
  },
  payhead: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: height * 0.01,
  },
  payheadbtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  payheadtxt: {
    fontSize: fontSize(17),
    fontWeight: '500',
    fontFamily: 'InterBold',
  },
  payrghtarrow: {
    marginTop: height * 0.005,
  },
  paymentcontainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: height * 0.01,
  },
  visabg: {
    width: width * 0.15,
    height: width * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  visaimg: {
    resizeMode: 'contain',
  },
  visatxtcontainer: {
    marginRight: width * 0.35,
    marginTop: height * 0.005,
  },
  visatxt: {
    fontSize: fontSize(15),
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  visanum: {
    marginTop: height * 0.003,
    fontSize: fontSize(13),
    opacity: 0.6,
  },
  visacheckcontainer: {
    marginTop: height * 0.015,
  },
  bottomcontainer: {
    width: '90%',
    alignSelf: 'center',
  },
  subtotalcontainer: {
    // flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.01,
  },
  ShippingContainer: {
    // flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.01,
  },
  totalcontainer: {
    // flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.01,
  },
  btmtxt: {
    fontSize: fontSize(15),
    fontFamily: 'Inter',
    fontWeight: '500',
    opacity: 0.6,
  },
  btmprice: {
    fontSize: fontSize(15),
    fontFamily: 'InterBold',
    fontWeight: '400',
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

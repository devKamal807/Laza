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
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const brand = [
  {
    id: '01',
    image: require('../assets/brandImages/Adidas.png'),
    name: 'Adidas',
  },
  {
    id: '02',
    image: require('../assets/brandImages/Vector.png'),
    name: 'Nike',
  },
  {
    id: '03',
    image: require('../assets/brandImages/fila.png'),
    name: 'Fila',
  },
  {
    id: '04',
    image: require('../assets/brandImages/Adidas.png'),
    name: 'Adidas',
  },
  {
    id: '05',
    image: require('../assets/brandImages/Vector.png'),
    name: 'Nike',
  },
  {
    id: '06',
    image: require('../assets/brandImages/fila.png'),
    name: 'Fila',
  },
];

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

const {width, height} = Dimensions.get('window');

const fontSize = size => PixelRatio.getFontScale() * size;
export default function ScreenEight() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = id => {
    setLikedProducts(prevLiked =>
      prevLiked.includes(id)
        ? prevLiked.filter(item => item !== id)
        : [...prevLiked, id],
    );
  };

  const filteredProducts = product.filter(item =>
    item.des.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btncontainer}>
        <View style={styles.menucontainer}>
          <Pressable onPress={() => navigation.openDrawer()}>
            <Image
              source={require('../assets/images/Menu.png')}
              style={styles.imgbtn}
            />
          </Pressable>
        </View>
        <View style={styles.cartcontainer}>
          <Pressable
            onPress={() => {
              navigation.navigate('Cart');
            }}>
            <Image
              source={require('../assets/images/Cart.png')}
              style={styles.imgbtn}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.greetingContainer}>
        <Text style={styles.helloText}>Hello</Text>
        <Text style={styles.welcomeText}>Welcome to Laza.</Text>
      </View>

      <View style={styles.searchWrapper}>
        <View style={styles.searchContainer}>
          <Image
            source={require('../assets/images/Search.png')}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
            placeholder="Search..."
            placeholderTextColor="#8F959E"
          />
        </View>

        <Pressable style={styles.micButton}>
          <Image
            source={require('../assets/images/Voice.png')}
            style={styles.micIcon}
          />
        </Pressable>
      </View>

      <View style={styles.brandWrapper}>
        <View>
          <Text style={styles.sectionTitle}>Choose Brand</Text>
        </View>
        <View style={styles.viewContainer}>
          <Pressable>
            <Text style={styles.viewtitle}>View All</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.bnd}>
        <FlatList
          horizontal
          data={brand}
          keyExtractor={item => item.id}
          keyboardShouldPersistTaps="handled"
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('BrandScreen', {name: item.name});
              }}>
              <View style={styles.brandcontainer}>
                <Image source={item.image} style={styles.brandimage} />
                <Text style={styles.brandname}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={<View style={{height: 50}} />}
        />
      </View>

      <View style={styles.newwrapper}>
        <View style={styles.newcontainer}>
          <Text style={styles.newtitle}>New Arrival</Text>
        </View>
        <View style={styles.newviewcontainer}>
          <Pressable>
            <Text style={styles.newviewtitle}>View All</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.fltcontainer}>
        <FlatList
          data={filteredProducts}
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
                  <TouchableOpacity onPress={() => toggleLike(item.id)}>
                    <Image
                      source={require('../assets/images/Heart.png')}
                      style={[
                        styles.heart,
                        {
                          tintColor: likedProducts.includes(item.id)
                            ? 'red'
                            : 'gray',
                        },
                      ]}
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
          contentContainerStyle={{paddingBottom: height * 0.4}}
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
  btncontainer: {
    flexDirection: 'row',
    marginTop: height * 0.045,
    marginLeft: width * 0.05,
    justifyContent: 'space-between',
  },
  cartcontainer: {
    marginRight: width * 0.05,
  },
  imgbtn: {
    width: width * 0.08,
    height: width * 0.08,
    resizeMode: 'contain',
  },
  greetingContainer: {
    paddingHorizontal: width * 0.05,
    marginTop: height * 0.02,
  },
  helloText: {
    fontSize: fontSize(28),
    fontWeight: '600',
    color: '#1D1E20',
  },
  welcomeText: {
    fontSize: fontSize(15),
    color: '#8F959E',
    fontWeight: '400',
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width * 0.05,
    marginTop: height * 0.02,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F6FA',
    borderRadius: 10,
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.02,
    flex: 1,
  },
  searchIcon: {
    width: width * 0.05,
    height: height * 0.05,
    resizeMode: 'contain',
    marginRight: width * 0.03,
  },
  searchInput: {
    flex: 1,
    fontSize: fontSize(14),
    color: '#000',
  },
  micButton: {
    width: width * 0.1,
    height: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width * 0.05,
  },
  micIcon: {
    width: width * 0.2,
    height: height * 0.06,
    resizeMode: 'contain',
  },
  brandWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.02,
    width: '90%',
    alignSelf: 'center',
  },

  sectionTitle: {
    fontSize: fontSize(17),
    fontWeight: '500',
    marginBottom: height * 0.01,
  },
  viewContainer: {
    alignItems: 'flex-end',
  },
  viewtitle: {
    fontSize: fontSize(13),
    fontWeight: '400',
    opacity: 0.6,
  },

  newwrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  newtitle: {
    fontSize: fontSize(17),
    fontWeight: '500',
  },
  newviewcontainer: {
    alignItems: 'flex-end',
  },
  newviewtitle: {
    fontSize: fontSize(13),
    fontWeight: '400',
    opacity: 0.6,
  },
  fltcontainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.02,
    
  },
  productCard: {
    // width: width * 0.2,
    // height: height * 0.2,
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
    fontFamily: 'InterBold',
    textAlign: 'left',
  },
  productPrice: {
    fontSize: fontSize(13),
    fontWeight: '600',
  },
  des: {
    width: '50%',
    // marginLeft: width * 0.05,
    // marginTop: height * 0.05,

  },
  brandcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width * 0.02,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.04,
    borderRadius: 10,
    backgroundColor: '#F5F6FA',
    gap: 10,
    width: '90%',
    alignSelf: 'center',
    marginBottom: height * 0.02,
  },
  brandimage: {
    height: height * 0.027,
    width: width * 0.05,
    resizeMode: 'contain',
    marginVertical: height * 0.01,
  },
  brandname: {
    fontSize: fontSize(15),
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  heart: {
    width: width * 0.07,
    height: height * 0.04,
    resizeMode: 'contain',
    position: 'absolute',
    top: height * 0.01,
    right: width * 0.03,
  },
  bnd:{
  width:'90%',
  alignSelf:'center',
  },
});

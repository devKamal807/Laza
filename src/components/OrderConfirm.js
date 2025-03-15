import { Dimensions, Image, PixelRatio, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const fontSize = size => PixelRatio.getFontScale() * size;

export default function OrderConfirm() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>

         <View style={styles.backContainer}>
           <TouchableOpacity
             onPress={() => navigation.goBack()}
             accessibilityLabel="Go back">
             <Image
               source={require('../assets/images/Back.png')}
               style={styles.backImage}
             />
           </TouchableOpacity>
         </View>
         
         <View style={styles.mblimagecontainer}>
            <Image source={require('../assets/images/confirmorder.png')}/>
         </View>
        <View style={styles.confirmtxtcontainer}>
          <Text style={styles.confirmtxt}>Order Confirmed!</Text>
        </View>
        <View style={styles.subtxtcontainer}>
          <Text style={styles.subtxt}>Your order has been confirmed, we will send you confirmation email shortly.</Text>
        </View>

        <View style={styles.gobtncontainer}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntxt}>Go to Orders</Text>
          </TouchableOpacity>
        </View>
         <View style={styles.crtBtncontainer}>
                <TouchableOpacity style={styles.crtbtn}>
                  <Text style={styles.crtbtntxt}>Continue Shopping</Text>
                </TouchableOpacity>
              </View>
         </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: width * 0.05,
      },
      backContainer: {
        marginTop: height * 0.05,
      },
      backImage: {
        width: width * 0.08,
        height: width * 0.08,
        resizeMode: 'contain',
      },
      mblimagecontainer:{
        width:'90%',
        alignSelf:'center',
        alignItems:'center',
        marginTop: height * 0.1,
      },
      confirmtxtcontainer:{
        width:'90%',
        alignSelf:'center',
        alignItems:'center',
        marginTop: height * 0.04,
      },
      confirmtxt:{
        fontFamily:'InterBold',
        fontSize: fontSize(28),
        fontWeight:'600',
      },
      subtxtcontainer:{
        width:'90%',
        alignSelf:'center',
        alignItems:'center',
        marginTop: height * 0.01,
      },
      subtxt:{
        fontSize: fontSize(15),
        textAlign:'center',
        fontFamily:'Inter',
        fontWeight: '400',
        opacity:0.6,
      },
      gobtncontainer:{
        width:'90%',
        alignSelf:'center',
        alignItems:'center',
        marginTop: height * 0.15,
      },
      btn:{
        width:'100%',
        backgroundColor:'#F5F5F5',
        borderRadius: 10,
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.015,
        alignItems:'center',
      },
      btntxt:{
        fontSize: fontSize(17),
        fontFamily:'Inter',
        fontWeight: '500',
        opacity:0.6,
        
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

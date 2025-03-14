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
         <Text>
            hello
         </Text>
         </SafeAreaView>
  )
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
});

import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Splash() {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
          navigation.replace('ScreenOne');
        }, 2000);

      }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.image}>
        <Image source={require('../assets/images/Logo.png')}/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#9775FA',
    },
    image:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});

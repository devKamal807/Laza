import 'react-native';
import React from 'react';
import Splash from './src/screens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenOne from './src/screens/ScreenOne';
import ScreenTwo from './src/screens/ScreenTwo';
import ScreenThree from './src/screens/ScreenThree';
import ScreenFour from './src/screens/ScreenFour';
import ScreenFive from './src/screens/ScreenFive';
import ScreenSix from './src/screens/ScreenSix';
import ScreenSeven from './src/screens/ScreenSeven';

import NavigationTab from './src/components/NavigationTab';
import ProductView from './src/screens/ProductView';
import Cart from './src/components/Cart';
import Payment from './src/components/Payment';
import WishList from './src/components/WishList';
import ReviewScreen from './src/components/ReviewScreen';
import AddReview from './src/screens/AddReview';
import AddAddress from './src/components/AddAddress';
import CardScreen from './src/components/CardScreen';
import NewCard from './src/components/NewCard';
import OrderConfirm from './src/components/OrderConfirm';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="ScreenOne" component={ScreenOne}/>
        <Stack.Screen name="ScreenTwo" component={ScreenTwo}/>
        <Stack.Screen name="ScreenThree" component={ScreenThree}/>
        <Stack.Screen name="ScreenFour" component={ScreenFour}/>
        <Stack.Screen name="ScreenFive" component={ScreenFive}/>
        <Stack.Screen name="ScreenSix" component={ScreenSix}/>
        <Stack.Screen name="ScreenSeven" component={ScreenSeven}/>
        <Stack.Screen name="NavigationTab" component={NavigationTab}/>
        <Stack.Screen name="Cart" component={Cart}/>
        <Stack.Screen name="Payment" component={Payment}/>
        <Stack.Screen name="WishList" component={WishList}/>
        <Stack.Screen name="ProductView" component={ProductView}/>
        <Stack.Screen name="ReviewScreen" component={ReviewScreen}/>
        <Stack.Screen name="AddReview" component={AddReview}/>
        <Stack.Screen name="AddAddress" component={AddAddress}/>
        <Stack.Screen name="CardScreen" component={CardScreen}/>
        <Stack.Screen name="NewCard" component={NewCard}/>
        <Stack.Screen name="OrderConfirm" component={OrderConfirm}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


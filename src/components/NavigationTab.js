import { View, Image, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenEight from '../screens/ScreenEight';
import WishList from './WishList';
import Cart from './Cart';
import Payment from './Payment';
import wishIcon from '../assets/images/Heart.png';
import cartIcon from '../assets/images/bag.png';
import payIcon from '../assets/images/purse.png';
import home from '../assets/images/home.png';

const Tab = createBottomTabNavigator();

const ICONS = {
  ScreenEight: { icon: home, label: 'Home' },
  WishList: { icon: wishIcon, label: 'Wishlist' },
  Cart: { icon: cartIcon, label: 'Cart' },
  Payment: { icon: payIcon, label: 'Payment' },
};

export default function NavigationTab() {
  return (
    <Tab.Navigator
      initialRouteName="ScreenEight"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              minWidth: 60, // Ensures enough space for text
            }}>
            {!focused ? (
              <Image
                source={ICONS[route.name].icon}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: '#666',
                }}
              />
            ) : (
              <Text
                style={{
                  color: '#9775FA',
                  fontSize: 12,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  minWidth: 50, // Prevents breaking
                }}>
                {ICONS[route.name].label}
              </Text>
            )}
          </View>
        ),
        tabBarActiveTintColor: '#9775FA',
        tabBarInactiveTintColor: '#666',
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="ScreenEight" component={ScreenEight} />
      <Tab.Screen name="WishList" component={WishList} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Payment" component={Payment} />
    </Tab.Navigator>
  );
}

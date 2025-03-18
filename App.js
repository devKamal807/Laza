import React, {useState} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {NavigationContainer, useNavigation} from '@react-navigation/native';

import 'react-native';

import Splash from './src/screens/Splash';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenOne from './src/screens/ScreenOne';
import ScreenTwo from './src/screens/ScreenTwo';
import ScreenThree from './src/screens/ScreenThree';
import ScreenFour from './src/screens/ScreenFour';

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
import BrandScreen from './src/components/BrandScreen';
import {
  Alert,
  Dimensions,
  Image,
  PixelRatio,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ScreenFive from './src/screens/ScreenFive';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Settings from './src/components/Settings';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const {width, height} = Dimensions.get('window');

const fontSize = size => PixelRatio.getFontScale() * size;

function MainStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="NavigationTab" component={NavigationTab} />
      <Stack.Screen name="ScreenOne" component={ScreenOne} />
      <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
      <Stack.Screen name="ScreenThree" component={ScreenThree} />
      <Stack.Screen name="ScreenFour" component={ScreenFour} />
      <Stack.Screen name="ScreenFive" component={ScreenFive} />
      <Stack.Screen name="ScreenSix" component={ScreenSix} />
      <Stack.Screen name="ScreenSeven" component={ScreenSeven} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="WishList" component={WishList} />
      <Stack.Screen name="ProductView" component={ProductView} />
      <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
      <Stack.Screen name="AddReview" component={AddReview} />
      <Stack.Screen name="AddAddress" component={AddAddress} />
      <Stack.Screen name="CardScreen" component={CardScreen} />
      <Stack.Screen name="NewCard" component={NewCard} />
      <Stack.Screen name="OrderConfirm" component={OrderConfirm} />
      <Stack.Screen name="BrandScreen" component={BrandScreen} />
    </Stack.Navigator>
  );
}

function CustomDrawerContent(props) {
  const [dark, setDark] = useState(false);
  const navigation = useNavigation()
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Image
            source={require('./src/assets/avatar/user.png')}
            style={{
              width: width * 0.16,
              height: height * 0.07,
              borderRadius: 50,
              marginBottom: height * 0.02,
            }}
          />
        </View>
        <View style={{marginRight: width * 0.1}}>
          <Text
            style={{
              fontSize: fontSize(17),
              fontWeight: '500',
              fontFamily: 'Inter',
            }}>
            Mrh Raju
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: fontSize(13), color: 'gray'}}>
              Verified Profile
            </Text>
            <Image
              source={require('./src/assets/avatar/Badge.png')}
              style={{marginTop: height * 0.002}}
            />
          </View>
        </View>
        <View style={{marginTop: height * 0.01}}>
          <Text
            style={{
              paddingHorizontal: width * 0.03,
              paddingVertical: height * 0.01,
              backgroundColor: '#F7F7FE',
              alignSelf: 'center',
              borderRadius: 10,
              opacity:0.6,
            }}>
            3 Orders
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: height * 0.02,
          marginLeft: width * 0.03,
        }}>
        <Text style={{marginTop: height * 0.01, fontSize: fontSize(15)}}>
          Dark Mode
        </Text>
        <Switch
          value={dark}
          onValueChange={() => setDark(!dark)}
          trackColor={{false: '#ccc', true: '#34C759'}}
          thumbColor={'#fff'}
        />
      </View>

      <DrawerItemList {...props} />

      <TouchableOpacity
        style={{
          marginTop: height * 0.3,
        }}
        onPress={() =>
          Alert.alert('Logout', 'Are you sure you want to log out?', [
            {text: 'Cancel', style: 'cancel'},
            {text: 'Logout', onPress: () =>navigation.navigate('ScreenFour')},
          ])
        }>
        <View style={{flexDirection: 'row', marginLeft: width * 0.03}}>
          <Image source={require('./src/assets/images/Logout.png')} />
          <Text
            style={{
              color: 'red',
              fontWeight: '600',
              fontFamily: 'Inter',
              marginLeft: width * 0.03,
            }}>
            Logout
          </Text>
        </View>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

function MyDrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}
      fontSize={fontSize(20)}>
      <Drawer.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Password"
        component={ScreenSeven}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="lock-outline" size={24} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="cart-outline" size={24} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="My Cards"
        component={CardScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="card-outline" size={24} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="WishList"
        component={WishList}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="heart-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="cog-outline" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawerNavigator />
    </NavigationContainer>
  );
}

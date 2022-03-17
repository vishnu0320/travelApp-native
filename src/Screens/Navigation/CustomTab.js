import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Search from '../Search';
import Trip from '../Trip';
import Guide from '../Guide';
import SudhSVG from '../../assests/icon/HomeScreeen/Vector-1.svg';
const screens = [
  {
    name: 'home',
    icon: 'home',
    iconSrc: {
      active: require('../../assests/icon/Footer/active/home.svg'),
      inactive: require('../../assests/icon/Footer/inctive/home_in.svg'),
    },
    screenComponent: Home,
  },
  {
    name: 'search',
    icon: 'search',
    iconSrc: {
      active: require('../../assests/icon/Footer/active/search.svg'),
      inactive: require('../../assests/icon/Footer/inctive/search_in.svg'),
    },
    screenComponent: Search,
  },
  {
    name: 'trip',
    icon: 'calendar-today',
    iconSrc: {
      active: require('../../assests/icon/Footer/active/Vector-5.svg'),
      inactive: require('../../assests/icon/Footer/inctive/calendar.svg'),
    },
    screenComponent: Trip,
  },
  {
    name: 'guide',
    icon: 'map',
    iconSrc: {
      active: require('../../assests/icon/Footer/active/maps_in.svg'),
      inactive: require('../../assests/icon/Footer/inctive/maps.svg'),
    },
    screenComponent: Guide,
  },
];

const iconColor = {
  active: {
    color: '#fff',
    backgroundColor: '#FF4760',
  },
  inactive: {
    color: '#181A25',
    backgroundColor: '#fff',
  },
};
const resolveIcon = (Target, style) => {
  return <Target.default {...style} color={'green'} fill="red" />;
};
const MyTabBar = ({descriptors, navigation, state}) => {
  console.log({descriptors, navigation, state});

  return (
    <View style={tabBarStyle.container}>
      {state.routes.map((route, index) => {
        const {name, key, params} = route;
        const {option} = descriptors[key];
        /* const labelName = option?.tabBarLabel || option?.title || 'name'; */
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: key,
            canDefaultPrevented: '',
          });

          if (!isFocused && !event.canDefaultPrevented) {
            navigation.navigate(name);
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: key,
          });
        };
        return (
          <TouchableOpacity
            key={key}
            accessibilityRole={'button'}
            accessibilityState={{selected: isFocused}}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              ...tabBarStyle.tabBtn,
              backgroundColor:
                iconColor[isFocused ? 'active' : 'inactive'].backgroundColor,
            }}>
            {/* <Text>{name}</Text> */}
            {resolveIcon(params.iconSrc[isFocused ? 'active' : 'inactive'], {
              color: 'red',
              width: 24,
              height: 24,
            })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const {Screen, Navigator} = createBottomTabNavigator();

const CustomTabNavigator = () => {
  return (
    <Navigator tabBar={props => <MyTabBar {...props} />}>
      {screens.map(({name, icon, iconSrc, screenComponent}) => {
        console.log(name, icon, screenComponent);
        return (
          <Screen
            key={name}
            name={name}
            component={screenComponent}
            initialParams={{icon, iconSrc}}
          />
        );
      })}
    </Navigator>
  );
};

export default CustomTabNavigator;

const styles = StyleSheet.create({});
const tabBarStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    margin: 10,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 100,
    backgroundColor: '#fff',
    elevation: 2,
  },
  tabBtn: {
    margin: 6,
    padding: 12,
    borderRadius: 100,
    paddingHorizontal: 22,
  },
  tab: {},
});

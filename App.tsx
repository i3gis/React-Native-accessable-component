import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';

import PageA from './screen/PageA';
import PageB from './screen/PageB';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: 'beside-icon',
          tabBarActiveBackgroundColor: '#000000',
          tabBarActiveTintColor: '#ffffff',
          tabBarLabelStyle: {
            fontWeight: '700',
            fontSize: 15,
          },
          tabBarIconStyle: {display: 'none'},
        }}>
        <Tab.Screen name="Page A" component={PageA} />
        <Tab.Screen name="Page B" component={PageB} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

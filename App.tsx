import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';

import PageA from './screen/PageA';
import PageC from './screen/PageC';
import WebViewComponent from './screen/Webview';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: '#000000',
          tabBarActiveTintColor: '#ffffff',
          tabBarLabelStyle: {
            fontWeight: '700',
            fontSize: 15,
            marginBottom: 15,
          },
          tabBarIconStyle: {display: 'none', padding: 0, margin: 0},
        }}>
        <Tab.Screen name="List" component={PageA} />
        <Tab.Screen name="Modal" component={PageC} />
        <Tab.Screen name="Web View" component={WebViewComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

import React from 'react';
import Home from './screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { View, Text } from 'react-native';

function ExploreScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Explore!</Text>
      </View>
    );
  }

  function AddScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add!</Text>
      </View>
    );
  }
  

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={{ backgroundColor: 'black' }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === '   ') {
              return (
                <AntDesign name="stepbackward" size={24} color="black" />
              );
            } 
            switch (route.name) {
            case '  ':
              return (
                <AntDesign name="caretright" size={24} color="black" />
              );
            case ' ':
              return (
                <AntDesign name="stepforward" size={24} color="black" />
              )
            case 'Subscription':
              return (
              <MaterialIcons name="subscriptions" size={24} color="black" />
              );
            case 'Library':
              return (
                <MaterialCommunityIcons name="library-video" size={24} color="black" />
              )
          }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="   " component={ExploreScreen} />
        <Tab.Screen name="  " component={Home} />
        <Tab.Screen name=" " component={AddScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

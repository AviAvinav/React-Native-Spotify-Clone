import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

// function HomeScreen() {
//   return (
//     <Container>
//       <Header/>
//       <Video />
//       <Video />
//       <Video />
//       <Video />
//       <Video />
//       <Video />
//     </Container>
//   );
// }

// function ExploreScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Explore!</Text>
//     </View>
//   );
// }

// function AddScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Add!</Text>
//     </View>
//   );
// }

// function SubscriptionScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Subscription!</Text>
//     </View>
//   );
// }

// function LibraryScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Library!</Text>
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

export default function Footer() {
  return (
    <NavigationContainer style={{ backgroundColor: 'black' }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <FontAwesome5 name="home" size={24} color="black" />
              );
            } 
            switch (route.name) {
            case 'Explore':
              return (
                <MaterialIcons name="explore" size={24} color="black" />
              );
            case 'Add':
              return (
                <AntDesign name="pluscircleo" size={40} color="black" />
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
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

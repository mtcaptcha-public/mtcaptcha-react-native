/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
 
 import Visible from './src/screens/Visible';
 import Custom from './src/screens/Custom';
 import { View, ImageBackground, StyleSheet } from 'react-native';
 
 const Tab = createBottomTabNavigator();
 
 const App = () => {
   return (
     <NavigationContainer>
       <Tab.Navigator 
         screenOptions={({ route }) => ({
           tabBarLabel: route.name, // Use the route name as the tab label
         })}
       >
       <Tab.Screen name="Visible">
          {() => (
            <ImageBackground
              source={require('./assets/bgimage.jpg')} // Replace with the path to your background image
              style={styles.backgroundImage}
            >
              <Visible />
            </ImageBackground>
          )}
        </Tab.Screen>
        <Tab.Screen name="Custom">
          {() => (
            <ImageBackground
              source={require('./assets/two.jpeg')} // Replace with the path to your background image
              style={styles.backgroundImage}
            >
              <Custom />
            </ImageBackground>
          )}
        </Tab.Screen>
       </Tab.Navigator>
     </NavigationContainer>
   );
 };
 const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
});
 
 export default App;
 
 
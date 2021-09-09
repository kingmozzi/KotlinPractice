/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Hook from './components/Hook'

const Stack = createNativeStackNavigator();

import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { staticBlock } from '@babel/types';



const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>HomeScreen</Text>
      <Button title="프로필 페이지로 이동" onPress={() => navigation.navigate('Profile',{
        //itemId: 1557,
      })}/>

      <Button title="Hook을 이용 하는방법" onPress={() => navigation.navigate('Hook')}/>
    </View>
    
  );
};

const ProfileScreen = ({ navigation, route }) => {

  const {itemId} = route.params;
  //JSON.stringify.itemId
  
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>ProfileScreen</Text>
      {/*<Button title="프로필 페이지로 이동" onPress={() => navigation.navigate('Profile')}/>*/}
      <Button title="프로필 페이지로 이동" onPress={() => navigation.push('Profile')}/>
      <Text>itemId: {itemId}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()}/>
      <Button title="popToTop" onPress={() => navigation.popToTop()}/>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}  />
          <Stack.Screen name="Profile" component={ProfileScreen} initialParams={{itemId: 1601}}/>
          <Stack.Screen name="Hook" component={Hook}/>
        </Stack.Navigator>

      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;

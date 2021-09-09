/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment, Component} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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

class App extends Component{
  
  

  render(){
    /*
    isDarkMode = useColorScheme() === 'dark';

    backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    */

    return (
      
      <SafeAreaView style={styles.container}>
        
        {/*<View style={{backgroundColor:'red', flex :1}}></View>

        <View style={{backgroundColor:'blue', flex :2}}></View>

        <View style={{backgroundColor:'steelblue', flex :3}}></View>
        */}

        <View style={{backgroundColor:'red', width:50, height:50}}></View>

        <View style={{backgroundColor:'blue', width:50, height:50}}></View>

        <View style={{backgroundColor:'steelblue', width:50, height:50}}></View>

      </SafeAreaView>
    );

  }
  
};

const styles = StyleSheet.create({
  container:{
    //column, row, row-reverse, column-reverse
    //flexDirection:'column-reverse',
    
    //center, flexstart, flexend, space-around, space-between
    justifyContent: 'center',

    //alingItems는 가로영역에 대한 align
    //center, flexstart, flexend, stretch(지정된 width가 없으면 가로를 모두 차지)
    alignItems:'center',
    flex:1,
  },
});

export default App;

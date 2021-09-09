/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment, Component } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
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

class App extends Component {
  

  render(){
    /*
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    */
    return (

      <View>
        <View style = {styles.container}>
          <Image source={require('./assets/asikan.jpg')} style={{width:100, height:100}}/>

          <View>
            <Text style = {styles.artist}>Asian Kung-Fu Generation</Text>

            <View style = {{flexDirection : 'row'}}>
              <Text style={styles.title}>활동유형</Text>
              <Text style={styles.detail}>남성/그룹</Text>
            </View>

            <View style = {{flexDirection : 'row'}}>
              <Text style={styles.title}>활동연대</Text>
              <Text style={styles.detail}>1990년대.2000년대.2010년대</Text>
            </View>

            <View style = {{flexDirection : 'row'}}>
              <Text style={styles.title}>데뷔</Text>
              <Text style={styles.detail}>1996년 / 粉雪</Text>
            </View>

            <View style = {{flexDirection : 'row'}}>
              <Text style={styles.title}>국적</Text>
              <Text style={styles.detail}>일본</Text>
            </View>
          </View>

        </View>

        <View style = {{width:50, height:50, backgroundColor:'red'}}></View>
        <View style = {{width:100, height:100, backgroundColor:'skyblue'}}></View>
        <View style = {{width:150, height:150, backgroundColor:'steelblue'}}></View>
        

      </View>


    );
  }
  
};

const styles = StyleSheet.create({
  container : {
    marginTop : 50,
    marginLeft : 20,
    flexDirection : 'row',
  },
  artist : {
    marginLeft : 10,
    fontSize : 20,
    fontWeight : 'bold',
  },
  title : {
    marginLeft :  10,
    fontSize : 15,
    fontWeight : 'bold',
    color : 'gray',
  },
  detail : {
    marginLeft :  10,
  },
});

export default App;

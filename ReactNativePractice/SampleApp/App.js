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
  Image,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Kiana extends Component{
  render(){
    let imgInfo = '';
    if(this.props.type == 'one'){
      imgInfo = require('./assets/background.jpg')
    }
    else if(this.props.type == 'two'){
      imgInfo = require('./assets/theresa.jpg')
    }


    return (
      <View>
        <Image source = {imgInfo} style= {{width:200, height: 300}}/>
      </View>
    )
  }
}

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

  constructor(props){
    super(props);

    this.state = {
      address : ''
    }
  }

  writeAddress = () => {
    this.setState({
      address : '히페리온'
    },function() {
      alert('비상 비상 초비상')
    })
  }

  writeReset = () =>{
    this.setState({
      address : ''
    })
  }
  
  render(){
    /*
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    */
    return (
      
      <View style = {styles.container}>
        <Text style = {styles.hello}>Hello world!</Text>
        <Kiana type = 'one'/>
        <Kiana type = 'two'/>

        <Text>{this.state.address}</Text>
        <Button title = {"주소출력"} onPress ={this.writeAddress} />

        <Text></Text>
        <Button title = {'Reset'} onPress = {this.writeReset}/>

      </View>

    );
  }
  
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent : "center", //세로에서의 
    alignItems : "center" // 가로에서의
  },
  hello:{
    color: 'red'
  }
});

export default App;

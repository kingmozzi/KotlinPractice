import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
  TextInput,
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

const HomeScreen = ({ navigation, route }) => {
    React.useEffect(()=>{
        if(route.params?.post){
            alert(route.params?.post);

        }
    }, [route.params?.post])
    
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button
                title="create post"
                onPress={()=> navigation.navigate("CreatePost")}
            />
            <Text style={{margine:10}}>Post: {route.params?.post}</Text>
        </View>
    
  );
};

const CreatePostScreen = ({navigation, route})=>{
    const [postText, setPostText] = React.useState('');

    return(
        <>
            <TextInput 
                multiline 
                placeholder='Whats on your mind?' 
                style={{height:200, padding:10, backgroundColor:'white'}}
                value={postText}
                onChangeText={setPostText}
            />

            <Button
                title="Done"
                onPress={()=>{
                    navigation.navigate('Home',{post:postText});
                }}  
            />
        </>
        
    
    )
}

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}  />
          <Stack.Screen name="CreatePost" component={CreatePostScreen}/>
        </Stack.Navigator>

      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
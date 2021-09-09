/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect, Component} from 'react';
 //import { NavigationContainer } from '@react-navigation/native';
 //import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 //const Stack = createNativeStackNavigator();
 
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
   FlatList,
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
 
 const Hook: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };

   const [name, setName] = useState('jin');

   const [loading, setLoading] = useState(true);
   const [users, setUsers] = useState([]);

   useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users =>{
       setUsers(users);
       setLoading(false);
     });
   });

   return (
        <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
            <Text>Hook</Text>
            <Button title="이름변경" onPress={()=> setName('nomukun')}/>
            <Text>안녕하세요 {name}님</Text>
            
            <FlatList
              data={users}
              renderItem={({item}) => <Text>{item.name}</Text>}
              keyExtractor={item=>item.id}
            />
        </View>
       
   );
 };
 
 const styles = StyleSheet.create({
   
 });
 
 export default Hook;
 
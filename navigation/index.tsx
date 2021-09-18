/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Image, Text, View, useWindowDimensions } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import ChatRoomScreen from '../screens/ChatRoomScreen';
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Root" 
        component={HomeScreen} 
        options={{ headerTitle: HomeHeader }}
      />
      <Stack.Screen 
        name="ChatRoom" 
        component={ChatRoomScreen}
        options={{ 
          headerTitle: ChatRoomHeader, 
          headerBackVisible: false,
          headerBackTitleVisible: false,
        }}
       />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

const HomeHeader = () => {

  const { width } = useWindowDimensions();

  return (
    <View style={{ 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      width,
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 10,
      alignItems: 'center',
      }}>
      <Image 
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }} 
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text style={{
        flex: 1, 
        textAlign: 'center', 
        marginLeft: 30,
        fontWeight: 'bold'
      }}>Signal</Text>
      <AntDesign name="camerao" size={24} color="black" style={{marginHorizontal: 10}} />
      <Feather name="edit-2" size={24} color="black" style={{marginHorizontal: 10}} />
    </View>
    
  )
}

const ChatRoomHeader = (props: any) => {

  const { width } = useWindowDimensions();

  return (
    <View style={{ 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      width: width - 25,
      marginLeft: 25,
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 10,
      alignItems: 'center',
      // backgroundColor: 'red'
      }}>
      <Image 
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }} 
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text style={{
        flex: 1, 
        marginLeft: 10,
        fontWeight: 'bold'
      }}>{props.children}</Text>
      <AntDesign name="camerao" size={24} color="black" style={{marginHorizontal: 10}} />
      <Feather name="edit-2" size={24} color="black" style={{marginHorizontal: 10}} />
    </View>
    
  )
}



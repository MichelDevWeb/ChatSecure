import React from "react";
import {Text, View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import Message from "../components/Message";
import chatData from '../assets/dummy-data/Chats';
import MessageInput from "../components/MessageInput";
import { useRoute, useNavigation } from '@react-navigation/core';

export default function ChatRoomScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    
    navigation.setOptions({title: 'Michel Nguyen'});

    return (
        <SafeAreaView style={styles.page}>
            <FlatList
                data={chatData.messages}
                renderItem={({ item }) => <Message message={item}/>}
                inverted
            ></FlatList>
            <MessageInput></MessageInput>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1
    }
})
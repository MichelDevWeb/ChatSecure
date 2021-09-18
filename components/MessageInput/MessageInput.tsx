import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Pressable, 
    KeyboardAvoidingView, 
    Platform 
} from 'react-native';
import { FontAwesome5, AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 

export default function MessageInput() {
    const [message, setMessage] = useState('');

    const sendMessage = () => {

    }

    const onPlusClicked = () => {

    }

    const onPress = () => {
        if (message) {
            sendMessage();
        } else {
            onPlusClicked();
        }
    }

    return (
        <KeyboardAvoidingView 
            style={styles.root} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={100}
        >
            <View style={styles.inputContainer}>
                <FontAwesome5 name="smile-beam" size={24} color="grey" style={styles.icon} />
                
                <TextInput
                    value={message}
                    onChangeText={setMessage} 
                    placeholder="Signal message..."
                    style={styles.input}
                />
                
                <AntDesign name="camerao" size={24} color="grey" style={styles.icon} />
                <MaterialCommunityIcons name="microphone-variant" size={24} color="black" style={styles.icon} />
            </View>
            <Pressable onPress={onPress} style={styles.buttonContainer}>
                {message ? <Ionicons name="ios-send" size={20} color="white" /> : <AntDesign name="plus" size={20} color="white" />}
            </Pressable>    
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 10
    },
    inputContainer: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#dedede',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5
    },
    input: {
        flex: 1,
        marginHorizontal: 5
    },
    icon: {
        marginHorizontal: 5,
    },
    buttonContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#3777f0',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 35
    }
})

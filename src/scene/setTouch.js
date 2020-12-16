import React from 'react'
import { SafeAreaView, View, TouchableOpacity, StyleSheet, Text, TextComponent, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TouchID from 'react-native-touch-id';

function setTouch({ navigation }) {

    const optionalConfigObject = {
        fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
        unifiedErrors: false, // use unified error messages (default false)
        passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
    };

    function _pressHandler() {
        // Alert.alert('Authenticated Successfully');
        // TouchID.authenticate('to demo this react-native component', optionalConfigObject)
        //     .then(success => {
        //         console.log('Success')
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         Alert.alert('Authentication Failed');
        //     });
        Alert.alert(
            'Update available',
            'Keep your app up to date to enjoy the latest features',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'Install',
                    onPress: () => console.log('Install Pressed')
                }
            ]
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Text style={styles.text_touch}>Touch ID</Text>
                <Text style={{ marginTop: 20, marginHorizontal: 20, fontSize: 15, color: '#333030' }}>ตั้งค่าล็อคอินด้วยลายนิ้วมือ</Text>
                <Text style={{ marginTop: 5, marginHorizontal: 20, fontSize: 15, color: '#333030' }}>เพื่อการเข้าถึงที่รวดเร็ว</Text>
            </View>
            <View style={styles.icon_finger}>
                <Ionicons name={'finger-print'} size={75} color='#2a6450' />
            </View>
            <View style={{ marginTop: 180, marginHorizontal: 25 }}>
                <TouchableOpacity
                    style={styles.button_send1}
                    onPress={() => _pressHandler()}
                >
                    <Text style={{ alignSelf: 'center', color: 'white', fontSize: 15 }}>ตั้งค่าลายนิ้วมือ</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 40, marginHorizontal: 25 }} >
                <TouchableOpacity style={styles.button_send2}>
                    <Text style={{ alignSelf: 'center', color: '#2a6450', fontSize: 15 }}>ข้าม</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
    },
    text_touch: {
        marginHorizontal: 20,
        marginTop: 80,
        fontSize: 20
    },
    icon_finger: {
        backgroundColor: '#f2f2f2',
        alignSelf: 'center',
        marginTop: 100,
        borderColor: 'gray',
        borderRadius: 50,
        padding: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    button_send1: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        height: 40,
        backgroundColor: '#2a6450',
        borderRadius: 5,
    },
    button_send2: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
    }
})

export default setTouch

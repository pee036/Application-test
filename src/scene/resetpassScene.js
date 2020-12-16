import React from 'react'
import { SafeAreaView, View, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


function resetpass({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.icon_correct}>
                <Ionicons name={'md-checkmark-circle-outline'} size={200} color='#2a6450' />
            </View>
            <Text style={styles.complete_text}>สำเร็จ</Text>
            <Text style={styles.text_reset}>รีเซ็ตรหัสผ่านของคุณสำเร็จแล้ว</Text>

            <View style={{ marginHorizontal: 25 }}>
                <TouchableOpacity style={styles.button_submit}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={{ color: 'white', alignSelf: 'center' }}>ตกลง</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1
    },
    icon_correct: {
        //borderWidth: 1,
        marginHorizontal: 90,
        marginTop: 60,
    },
    complete_text: {
        fontSize: 25,
        //borderWidth: 1,
        alignSelf: 'center',
        marginTop: 40
    },
    text_reset: {
        //borderWidth: 1,
        alignSelf: 'center',
        marginTop: 20,
        color: '#262424'
    },
    button_submit: {
        //borderWidth: 1,
        width: '100%',
        height: 30,
        justifyContent: 'center',
        height: 40,
        backgroundColor: '#2a6450',
        borderRadius: 5,
        marginTop: 40,
    }

})

export default resetpass
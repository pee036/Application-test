import React from 'react'
import { SafeAreaView, View, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



function otplock({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name={'arrowleft'} size={25} />
                </TouchableOpacity>
                <View style={styles.icon_lock}>
                    <FontAwesome5 name={'user-lock'} size={70} color='#2a6450' />
                </View>
                <View style={styles.text_otp}>
                    <Text style={{ fontSize: 20 }}>OTP จะถูกส่งไปที่เครื่องโทรศัพท์</Text>
                </View>
                <View style={styles.text_phonenumber}>
                    <Text style={{ fontSize: 20, color: '#2a6450' }}>086-XXX-0499</Text>
                </View>

                <View style={{ marginHorizontal: 25 }}>
                    <TouchableOpacity style={styles.button_otp}
                        onPress={() => {
                            this.handleOnSimpleNotificationPressed
                            navigation.navigate('confirmiden')
                        }}>

                        <Text style={{ color: 'white', alignSelf: 'center' }}>ขอรหัส OTP</Text>
                    </TouchableOpacity>
                    <Text style={{ alignSelf: 'center', fontSize: 10, marginTop: 20, color: 'gray' }}>กรณีเบอร์โทรศัพท์ไม่ถูกต้องกรุณาติดต่อเบอร์ 02-xxx-xxxx</Text>
                </View>

            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button_send: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        height: 40,
        backgroundColor: '#2a6450',
        borderRadius: 5
    },
    icon_lock: {
        //borderWidth: 1,
        marginHorizontal: 90,
        marginTop: 180,
        alignSelf: 'center',
    },
    text_otp: {
        //borderWidth: 1,
        alignSelf: 'center',
        marginTop: 35
    },
    text_phonenumber: {
        //borderWidth: 1,
        alignSelf: 'center',
        marginTop: 25,
    },
    button_otp: {
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

export default otplock

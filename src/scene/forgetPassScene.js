import React from 'react'
import { SafeAreaView, View, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


function forgetPass({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 20, marginLeft: 20 }}>
                <TouchableOpacity style={{ width: 30 }}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name={'arrowleft'} size={25} />
                </TouchableOpacity>
            </View>

            <View style={{}}>
                <Text style={{ borderLeftWidth: 20, marginTop: 35, fontSize: 20 }}>ลืมรหัสผ่าน ?</Text>
                <Text style={{ borderLeftWidth: 20, marginTop: 20, color: '#262424' }}>กรุณากรอกอีเมลหรือเบอร์โทรศัพท์ที่</Text>
                <Text style={{ borderLeftWidth: 20, marginTop: 5, color: '#262424' }}>ลงทะเบียน</Text>
            </View>

            <View style={{ marginHorizontal: 20 }}>
                <TextInput style={{ height: 40, borderColor: 'gray', marginTop: 80, borderBottomWidth: 0.5 }}
                    placeholder='อีเมล/เบอร์โทรศัพท์' />
            </View>
            <View style={{ marginTop: 40, marginHorizontal: 25 }}>
                <TouchableOpacity style={styles.button_send}
                    onPress={() => navigation.navigate('resetpass')}>
                    <Text style={{ alignSelf: 'center', color: 'white', fontSize: 15 }}>ส่ง</Text>
                </TouchableOpacity>
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
    }
})

export default forgetPass

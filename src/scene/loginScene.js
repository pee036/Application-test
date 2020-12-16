import React from 'react'
import { SafeAreaView, View, TouchableOpacity, StyleSheet, Text, TextInput, TextComponent } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

function loginScene({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 0.4 }} />
            <View style={{ flex: 1 }}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', marginBottom: 20, borderBottomWidth: 0.5 }}
                    // onChangeText={text => { }}
                    placeholder='ชื่อผู้ใช้งาน'
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderBottomWidth: 0.5, }}
                    // onChangeText={text => { }}
                    placeholder='รหัสผ่าน'
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ marginTop: 20, color: 'gray' }}>บันทึกการเข้าสู่ระบบ </Text>
                    <TouchableOpacity style={{}}
                        onPress={() => { navigation.navigate('forgetPass') }}
                    >
                        <Text style={{ marginTop: 20, color: 'gray' }}>ลืมรหัสผ่าน?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container_condi1}>
                    <TouchableOpacity style={{}}
                        onPress={() => { navigation.navigate('otplock') }}>
                        <Text style={{ alignSelf: 'center', color: 'white', fontSize: 15 }}>เข้าสู่ระบบ</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 30,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{ flex: 1, height: 0, borderWidth: 0.5, borderColor: 'gray' }} />
                    <Text style={{
                        color: 'gray',
                        marginHorizontal: 10,
                        textAlign: 'center'
                    }}>ไม่มีบัญชีผู้ใช้</Text>
                    <View style={{ flex: 1, height: 0, borderWidth: 0.5, borderColor: 'gray' }} />
                </View>

                <View style={styles.container_condi2}>
                    <TouchableOpacity onPress={() => { }} disabled={true}>
                        <Text style={{
                            alignSelf: 'center',
                            color: '#2a6450',
                            fontSize: 15
                        }}>เปิดบัญชีเพื่อลงทะเบียนบัญชีผู้ใช้</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30
    },
    container_condi1: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        height: 40,
        backgroundColor: '#2a6450',
        borderRadius: 5,
        marginTop: 50
    },
    container_condi2: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 50,

    }
})

export default loginScene

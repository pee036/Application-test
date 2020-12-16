import React from 'react'
import { SafeAreaView, View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function conditionScene({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 20, marginLeft: 20, }}>
                <TouchableOpacity style={{ width: 30 }}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name={'arrowleft'} size={25} />
                </TouchableOpacity>
            </View>


            <View style={styles.container_condi}>
                <View style={{
                    flexDirection: 'row',
                    // borderBottomWidth: 0.5,
                    // borderColor: '#bfbfbf',
                    // paddingBottom: 20
                }}>
                    <MaterialCommunityIcons name={'text-box-outline'} size={25} color='#2a6450' />
                    <Text style={{ fontSize: 20, marginLeft: 10 }}>เงื่อนไขการใช้บริการ</Text>
                </View>
                <View style={{ borderWidth: 0.5, marginTop: 20, borderColor: '#bfbfbf' }} />
            </View>


            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity
                    style={[styles.buttom_style, { borderColor: '#2a6450' }]}
                    onPress={() => { navigation.goBack() }}
                >
                    <Text style={{ color: '#2a6450' }}>ปฏิเสธ</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttom_style, {
                        marginLeft: 20,
                        borderWidth: 0,
                        backgroundColor: '#2a6450'
                    }]}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={{ color: 'white' }}>ยอมรับ</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
    },
    container_condi: {
        flex: 8,
        marginTop: 150,
        borderColor: '#bfbfbf',
        borderTopWidth: 2,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderRadius: 10,
        padding: 20
    },
    buttom_style: {
        width: '40%',
        borderWidth: 1,
        height: '80%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default conditionScene

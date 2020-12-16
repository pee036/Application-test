import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { buttomMain } from '../components/Button'

function welcomeScene({ navigation }) {
    return (
        <SafeAreaView style={styles.container} >
            <View style={{ paddingHorizontal: 30 }}>
                <Text style={styles.text}>ยินดีต้อนรับ</Text>
                <Text style={styles.text1}>กรุณาเลือกภาษา</Text>
                <View style={styles.buttom_eng} >
                    <Text style={{ alignSelf: 'center', color: 'white', fontSize: 15 }}>English</Text>
                </View>
                <TouchableOpacity
                    style={[styles.buttom_eng, { marginTop: 20 }]}
                    onPress={() => navigation.navigate('Condition')}
                >
                    <Text style={{ alignSelf: 'center', color: 'white', fontSize: 15 }}>ไทย</Text>
                </TouchableOpacity>
                {/* <buttomMain /> */}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        color: 'black'
    },
    text1: {
        fontSize: 20,
        color: 'gray',
        marginBottom: 70
    },
    buttom_eng: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        height: 40,
        backgroundColor: '#2a6450',
        borderRadius: 5
    }
})

export default welcomeScene

import React from 'react'
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ButtomMain } from '../components/Button'

function welcomeScene({ navigation }) {
    return (
        <SafeAreaView style={styles.container} >
            <View style={{ paddingHorizontal: 30 }}>
                <Text style={styles.text}>ยินดีต้อนรับ</Text>
                <Text style={styles.text1}>กรุณาเลือกภาษา</Text>
                <ButtomMain
                    title={'English'}
                    btnStyle={styles.buttom_eng}
                    textStyle={{ alignSelf: 'center', color: 'white', fontSize: 15 }}
                    disable={true}
                />
                <ButtomMain
                    title={'ไทย'}
                    btnStyle={styles.buttom_eng}
                    textStyle={{ alignSelf: 'center', color: 'white', fontSize: 15 }}
                    onPress={() => navigation.navigate('Condition')}
                />
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
        borderRadius: 5,
        marginBottom: 20
    }
})

export default welcomeScene

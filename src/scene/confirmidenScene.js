import React, { useRef } from 'react'
import {
    SafeAreaView, View, TouchableOpacity, StyleSheet, Text, TextInput,
    KeyboardAvoidingView, Platform
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


function confirmiden({ navigation }) {

    const ref_input1 = useRef();
    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();
    const ref_input5 = useRef();
    const ref_input6 = useRef();

    const count_num = 57;

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
                <View style={{ flex: 1, marginTop: 20, marginHorizontal: 20 }}>
                    <TouchableOpacity style={{ width: 30 }}
                        onPress={() => navigation.goBack()}
                    >
                        <AntDesign name={'arrowleft'} size={25} />
                    </TouchableOpacity>

                    <View style={{ flex: 1, marginTop: 20 }}>
                        <Text style={{ fontSize: 20 }}>ยืนยันตัวตน</Text>
                        <Text style={styles.text_input}>กรุณากรอกรหัสยืนยันที่เราได้ส่งให้คุณ</Text>
                        <Text style={styles.text_input}>086-XXX-0499</Text>
                    </View>

                    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center' }}>
                        <TextInput
                            style={styles.text_pass}
                            keyboardType={'number-pad'}
                            maxLength={1}
                            blurOnSubmit={false}
                            ref={ref_input1}
                            autoFocus
                            onChangeText={(text) => {
                                text && ref_input2.current.focus();
                            }}
                        />
                        <TextInput
                            style={styles.text_pass}
                            keyboardType={'number-pad'}
                            maxLength={1}
                            blurOnSubmit={false}
                            ref={ref_input2}
                            onChangeText={(text) => {
                                text && ref_input3.current.focus();
                            }}
                            onKeyPress={({ nativeEvent }) => {
                                nativeEvent.key === 'Backspace' && ref_input1.current.focus();
                            }}
                        />
                        <TextInput
                            style={styles.text_pass}
                            keyboardType={'number-pad'}
                            maxLength={1}
                            blurOnSubmit={false}
                            ref={ref_input3}
                            onChangeText={(text) => {
                                text && ref_input4.current.focus();
                            }}
                            onKeyPress={({ nativeEvent }) => {
                                nativeEvent.key === 'Backspace' && ref_input2.current.focus();
                            }}
                        />
                        <TextInput
                            style={styles.text_pass}
                            keyboardType={'number-pad'}
                            maxLength={1}
                            blurOnSubmit={false}
                            ref={ref_input4}
                            onChangeText={(text) => {
                                text && ref_input5.current.focus();
                            }}
                            onKeyPress={({ nativeEvent }) => {
                                nativeEvent.key === 'Backspace' && ref_input3.current.focus();
                            }}
                        />
                        <TextInput
                            style={styles.text_pass}
                            keyboardType={'number-pad'}
                            maxLength={1}
                            blurOnSubmit={false}
                            ref={ref_input5}
                            onChangeText={(text) => {
                                text && ref_input6.current.focus();
                            }}
                            onKeyPress={({ nativeEvent }) => {
                                nativeEvent.key === 'Backspace' && ref_input4.current.focus();
                            }}
                        />
                        <TextInput
                            style={styles.text_pass}
                            keyboardType={'number-pad'}
                            maxLength={1}
                            blurOnSubmit={false}
                            ref={ref_input6}
                            onChangeText={(text) => {
                                text && navigation.navigate('Setpin');
                            }}
                            onKeyPress={({ nativeEvent }) => {
                                nativeEvent.key === 'Backspace' && ref_input5.current.focus();
                            }}
                        />
                    </View>

                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ color: 'gray', marginTop: 80, marginBottom: 20 }}>หากคุณไม่ได้รับรหัส?</Text>
                        <TouchableOpacity style={{ flex: 1 }}>
                            <Text style={{ color: '#2a6450' }}>ส่งรหัสใหม่ ({count_num})</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text_input: {
        fontSize: 15,
        color: 'gray',
        marginTop: 10
    },
    text_pass: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        width: '10%',
        marginHorizontal: 10,
        fontSize: 30,
        textAlign: 'center'
    }
})

export default confirmiden

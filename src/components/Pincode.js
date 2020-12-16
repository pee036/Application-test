import React, { useRef } from 'react'
import PINCode from '@haskkor/react-native-pincode'
import { StyleSheet, View, TextInput } from 'react-native'

export const MyPinCode = ({ onFinish = () => { }, title }) => {
    return <View style={{ flex: 1 }}>
        <PINCode
            status={'choose'}
            launchTouchID={true}
            titleChoose={title}
            buttonDeleteText={''}
            subtitleComponent={() => <View />}
            stylePinCodeColorTitle={'black'}
            stylePinCodeColorSubtitle={'black'}
            colorPassword={'#2a6450'}
            numbersButtonOverlayColor={'#2a6450'}
            stylePinCodeButtonCircle={{ backgroundColor: '#e3e3e3' }}
            stylePinCodeButtonNumber={'black'}
            stylePinCodeCircle={{ height: 15, width: 15, borderRadius: 10 }}
            titleConfirm={'ยืนยันรหัส PIN CODE'}
            stylePinCodeColumnDeleteButton={{ flex: 1, paddingTop: 20 }}
            stylePinCodeDeleteButtonColorHideUnderlay={'#2a6450'}
            passwordLength={6}
            finishProcess={(pincode) => onFinish(pincode)}
            titleConfirmFailed={'กรุณาตั้ง PIN CODE ใหม่'}
        />
    </View>
}

export const InputCodeOTP = ({ navigation }) => {

    const ref_input1 = useRef();
    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();
    const ref_input5 = useRef();
    const ref_input6 = useRef();

    return <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center' }}>
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
}


const styles = StyleSheet.create({
    text_pass: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        width: '10%',
        marginHorizontal: 10,
        fontSize: 30,
        textAlign: 'center'
    }
})
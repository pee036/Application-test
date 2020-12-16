import React, { Component } from 'react'
import { SafeAreaView, View, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PINCode from '@haskkor/react-native-pincode'
import { BorderlessButton } from 'react-native-gesture-handler';
import { not } from 'react-native-reanimated';

export class setPincodeScene extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <PINCode
                    status={'choose'}
                    buttonDeleteText={''}
                    launchTouchID={true}
                    titleChoose={'ตั้งรหัส PIN CODE'}
                    subtitleChoose={'-'}
                    stylePinCodeColorTitle={'black'}
                    stylePinCodeColorSubtitle={'black'}
                    colorPassword={'#2a6450'}
                    numbersButtonOverlayColor={'#2a6450'}
                    stylePinCodeButtonCircle={{ backgroundColor: '#e3e3e3' }}
                    stylePinCodeButtonNumber={'black'}
                    stylePinCodeCircle={{ marginRight: 20, height: 15, width: 15, borderRadius: 10, backgroundColor: 'gray' }}
                    titleConfirm={'ยืนยันรหัส PIN CODE'}
                />

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})

export default setPincodeScene

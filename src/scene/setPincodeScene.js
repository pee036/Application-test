import React, { Component } from 'react'
import { SafeAreaView, View, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PINCode, { hasUserSetPinCode } from '@haskkor/react-native-pincode'
import { BorderlessButton } from 'react-native-gesture-handler';
import { not } from 'react-native-reanimated';

export class setPincodeScene extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    _finishSetPin = async (pincode) => {
        pincode == 555555 && this.props.navigation.navigate('setTouch')
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <PINCode
                    status={'choose'}
                    launchTouchID={true}
                    titleChoose={'ตั้งรหัส PIN CODE'}
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
                    // iconButtonDeleteDisabled={true}
                    stylePinCodeColumnDeleteButton={{ flex: 1, paddingTop: 20 }}
                    stylePinCodeDeleteButtonColorHideUnderlay={'#2a6450'}
                    passwordLength={6}
                    finishProcess={(pincode) => this._finishSetPin(pincode)}
                    titleConfirmFailed={'กรุณาตั้ง PIN CODE ใหม่'}
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

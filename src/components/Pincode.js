import React, { Component } from 'react'
import PINCode from '@haskkor/react-native-pincode'
import { View } from 'react-native'

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
import React, { Component } from 'react'
import { SafeAreaView, View, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';
import { MyPinCode } from '../components/Pincode'

export class setPincodeScene extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // status_back: props.navigation.state.params,
        }
    }

    _finishSetPin = async (pincode) => {
        pincode == 999999 && this.props.navigation.navigate('setTouch')
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <MyPinCode
                    title={'ตั้งรหัส PIN CODE'}
                    onFinish={(pincode) => this._finishSetPin(pincode)}
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

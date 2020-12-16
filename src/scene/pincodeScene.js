import React, { Component } from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { MyPinCode } from '../components/Pincode'
import { MadalTouchID } from '../components/Modal'

export class pincodeScene extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: true
        }
    }

    render() {
        const { modalVisible } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <MadalTouchID visible={modalVisible} onPress={() => this.setState({ modalVisible: !modalVisible })} />
                <MyPinCode
                    title={'กรุณากรอกรหัส PIN'}
                    onFinish={(pincode) => { console.log(pincode) }}
                />

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

})

export default pincodeScene

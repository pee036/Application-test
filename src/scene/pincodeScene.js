import React, { Component } from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { MyPinCode } from '../components/Pincode'
import Modal from 'react-native-modal'
import Ionicons from 'react-native-vector-icons/Ionicons';

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
                <Modal
                    isVisible={modalVisible}
                    useNativeDriver={true}
                    onBackdropPress={() => this.setState({ modalVisible: !modalVisible })}
                >
                    <View style={styles.container_modal}>
                        <Ionicons name={'finger-print'} size={50} color='red' style={{ marginVertical: 10 }} />
                        <Text style={styles.font_style}>Touch ID for</Text>
                        <Text style={styles.font_style}>"CGS Application"</Text>
                        <Text style={[styles.font_style, { fontSize: 10 }]}>เข้าใช้งานด้วย Touch ID หรือ</Text>
                        <Text style={[styles.font_style, { fontSize: 10 }]}>ยกเลิกเพื่อกลับไปใช้รหัส PIN</Text>
                        <View style={styles.line} />
                        <Text style={[styles.font_style, { color: 'blue', margin: 10 }]}>Enter Password </Text>
                        <View style={styles.line} />
                        <TouchableOpacity onPress={() => this.setState({ modalVisible: !modalVisible })}>
                            <Text style={[styles.font_style, { color: 'blue', margin: 10 }]}>ยกเลิก </Text>
                        </TouchableOpacity>
                    </View>

                </Modal>
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
    container_modal: {
        // paddingVertical: 100,
        width: '70%',
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: "center",
        marginTop: 22,
        backgroundColor: '#fff',
        borderRadius: 20
    },
    font_style: {
        fontSize: 15,
        fontStyle: 'normal'
    },
    line: {
        width: '100%',
        marginTop: 5,
        borderBottomWidth: 0.4,
        borderBottomColor: 'gray',
    }

})

export default pincodeScene

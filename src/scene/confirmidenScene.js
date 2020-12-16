import React, { Component } from 'react'
import {
    SafeAreaView, View, TouchableOpacity, StyleSheet, Text, TextInput,
    KeyboardAvoidingView, Platform
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { InputCodeOTP } from '../components/Pincode'


export class confirmiden extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count_time: 60
        }
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.setState((prevState) => ({ count_time: prevState.count_time - 1 })),
            1000
        );
    }

    componentDidUpdate() {
        if (this.state.count_time === 0) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { count_time } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    <View style={{ flex: 1, marginTop: 20, marginHorizontal: 20 }}>
                        <TouchableOpacity style={{ width: 30 }}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <AntDesign name={'arrowleft'} size={25} />
                        </TouchableOpacity>

                        <View style={{ flex: 1, marginTop: 20 }}>
                            <Text style={{ fontSize: 20 }}>ยืนยันตัวตน</Text>
                            <Text style={styles.text_input}>กรุณากรอกรหัสยืนยันที่เราได้ส่งให้คุณ</Text>
                            <Text style={styles.text_input}>086-XXX-0499</Text>
                        </View>

                        <InputCodeOTP navigation={this.props.navigation} />

                        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginTop: 20 }}>
                            <Text style={{ color: 'gray', marginTop: 80, marginBottom: 20 }}>หากคุณไม่ได้รับรหัส?</Text>
                            <TouchableOpacity style={{ flex: 1 }}>
                                <Text style={{ color: '#2a6450' }}>ส่งรหัสใหม่ ({count_time})</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView >
        )
    }
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
})

export default confirmiden

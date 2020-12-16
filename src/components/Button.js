import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'

export const ButtomMain = ({ title, onPress = () => { }, btnStyle, textStyle, disable = false }) => {

    return <View>
        <TouchableOpacity
            style={btnStyle}
            onPress={() => onPress()}
            disabled={disable}
            activeOpacity={0.8}
        >
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity >
    </View>
}

const styles = StyleSheet.create({

})
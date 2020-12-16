import react from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'

export const ButtomMain = ({ title, onPress = () => { }, width = '100%', btnStyle }) => {
    const btnMainStyle = {
        ...styles.btnMain,
        ...btnStyle
    }

    return <View>
        <TouchableOpacity style={[width]} onPress={() => onPress()} style={btnMainStyle}>
            <Text>{title}</Text>
        </TouchableOpacity >
    </View>
}

const styles = StyleSheet.create({
    btnMain: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 20
    }
})
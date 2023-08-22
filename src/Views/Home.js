import { View, Text, TouchableOpacity } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>Home</Text>
            <Text>Je suis dans la page Home</Text>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('cities')
                }}
            >
                <Text>Aller vers Cities</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('pictures')
                }}
            >
                <Text>Aller vers Pictures</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Home

import { View, Text, TouchableOpacity, Image } from 'react-native'
import logoCamera from '../Assets/images/camera.png'
import logoGallery from '../Assets/images/gallery.png'

import { PicturesStyle } from '../Styles/Pictures'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { useState } from 'react'
import { NavBar } from '../Components/NavBar'

const Pictures = ({ navigation }) => {
    const [selectedPictures, setSelectedPictures] = useState([])

    function handleCamera() {
        launchCamera({ mediaType: 'photo' }).then((res) => {
            if (!res.didCancel) setSelectedPictures(res.assets)
        })
    }

    function handleGallery() {
        launchImageLibrary({ mediaType: 'photo', selectionLimit: 3 }).then(
            (res) => {
                if (!res.didCancel) setSelectedPictures(res.assets)
            }
        )
    }

    return (
        <View style={PicturesStyle.container}>
            <Text style={PicturesStyle.title}>Pictures</Text>

            <View style={PicturesStyle.cameraContainer}>
                <TouchableOpacity
                    onPress={() => {
                        handleCamera()
                    }}
                >
                    <Image source={logoCamera} style={PicturesStyle.icon} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        handleGallery()
                    }}
                >
                    <Image source={logoGallery} style={PicturesStyle.icon} />
                </TouchableOpacity>
            </View>
            <View style={PicturesStyle.selectedPictureContainer}>
                {selectedPictures &&
                    selectedPictures.length > 0 &&
                    selectedPictures.map((picture) => {
                        return (
                            <Image
                                source={picture}
                                style={PicturesStyle.selectedPicture}
                            />
                        )
                    })}
            </View>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('home')
                }}
            >
                <Text>Aller vers Home</Text>
            </TouchableOpacity>
            <NavBar navigation={navigation} />
        </View>
    )
}
export default Pictures

import { StyleSheet } from 'react-native'

export const PicturesStyle = (StyleSheet.createstyle = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#14213D',
    },
    title: {
        color: '#fff',
        marginTop: 40,
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
    },
    cameraContainer: {
        width: '50%',
        marginLeft: '25%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 75,
        backgroundColor: '#fff',
        borderRadius: 12,
    },
    icon: {
        width: 50,
        height: 50,
    },
    selectedPictureContainer: {
        width: '80%',
        marginLeft: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 30,
    },

    selectedPicture: {
        width: 80,
        height: 80,
        marginHorizontal: 10,
        borderRadius: 6,
    },
}))

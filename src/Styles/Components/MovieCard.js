import { StyleSheet } from 'react-native'

export const MovieCardStyle = (StyleSheet.createstyle = StyleSheet.create({
    movieTitle: {
        color: 'white',
        textAlign: 'center',
        marginTop: 5,
        width: '100%',
    },
    moviePoster: {
        width: '100%',
        height: 150,
        borderRadius: 9,
        objectFit: 'scale-down',
    },

    movieCard: {
        width: '40%',
        marginHorizontal: '5%',
        marginVertical: 20,
    },
}))

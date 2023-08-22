import { StyleSheet } from 'react-native'

export const MoviesStyle = (StyleSheet.createstyle = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },
    title: {
        color: 'red',
        marginTop: 40,
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
    },
    searchInput: {
        backgroundColor: '#e5e5e5',
        width: '80%',
        borderRadius: 4,
        marginTop: 25,
        paddingLeft: 10,
    },
    searchModule: {
        width: '80%',
        height: 80,
        marginLeft: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchButton: {
        marginTop: 25,
        backgroundColor: 'red',
        height: 50,
        width: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    searchIcon: {
        width: 25,
        height: 25,
    },
    totalResults: {
        color: 'white',
        textAlign: 'center',
        marginTop: 15,
    },
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
    movieContainer: {
        marginTop: 40,
        width: '80%',
        marginLeft: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    movieCard: {
        width: '40%',
        marginHorizontal: '5%',
        marginVertical: 20,
    },
}))

import { StyleSheet } from 'react-native'

export const CitiesStyle = (StyleSheet.createstyle = StyleSheet.create({
    container: {
        backgroundColor: '#14213D',
        width: '100%',
        height: '100%',
    },
    title: {
        color: '#fff',
        marginTop: 40,
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
    },
    searchInput: {
        backgroundColor: '#fff',
        width: '80%',
        marginLeft: '10%',
        borderRadius: 4,
        marginTop: 25,
        paddingLeft: 10,
    },

    cityContainer: {
        marginTop: 40,
        width: '80%',
        marginLeft: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        borderRadius: 4,
    },

    cityTitle: {
        color: '#FCA311',
        textAlign: 'center',
        width: '100%',
    },

    cityCard: {
        width: '40%',
        marginHorizontal: '5%',
        marginVertical: 20,
    },
    gpsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        marginLeft: '25%',
    },
    gpsData: {
        fontSize: 14,
        color: '#fff',
    },
    temperatureContainer: {
        width: '70%',
        marginLeft: '15%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    temperature: {
        width: '100%',
        fontSize: 32,
        color: '#fff',
        textAlign: 'center',
    },
    temperatureImage: {
        width: '100%',
        height: 200,
    },
}))

import { StyleSheet } from 'react-native'

export const CityCardStyle = (StyleSheet.createstyle = StyleSheet.create({
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
}))

import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeDeck from '../HomeDeck';
import Page1 from './Page1'

class NewDeck extends React.Component {

    render() {

        return (
            <View style={styles.stack}>
                <Stack/>
            </View>
        )
    }

}

const Stack = StackNavigator({
    Page1: {
        screen: Page1,
        navigationOptions:{
            headerStyle:{
                backgroundColo: 'gray'
            }
        }
    },
    HomeDeck: {
        screen: HomeDeck,
        navigationOptions:{
            headerStyle:{
                backgroundColo: 'gray'
            }
        }
    }
});

const styles = StyleSheet.create({

    stack:{
        backgroundColor: 'gray'
    }

//     container: {
//         flex: 1,
//         alignItems: 'center',
//         margin: 10
//     },
//     textField: {
//         color: 'white',
//         width: 200,
//         height: 50,
//         margin: 10,
//         border: 1
//     },
//
//     button: {
//         backgroundColor: 'red',
//         paddingLeft: 50,
//         paddingRight: 50,
//         justifyContent: 'flex',
//         alignItems: 'center',
//         borderRadius: 5
//     },
//
//     buttonText: {
//         color: 'white'
//     }
//
});

export default NewDeck
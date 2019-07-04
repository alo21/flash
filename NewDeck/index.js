import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native';

class NewDeck extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>What is the title of your new deck?</Text>

                <TextInput style={styles.textField}/>

                <TouchableHighlight style={styles.button} underlyColor='#d4271b'>
                    <Text style={styles.buttonText}>Add Deck</Text>
                </TouchableHighlight>
            </View>
        )
    }

}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        alignItems: 'center',
        margin: 10
    },
    textField: {
        color: 'red',
        width: 200,
        height: 50,
        margin: 10,
        border: 1
    },

    button: {
        backgroundColo: 'red',
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'flex',
        alignItems: 'center',
        borderRadius: 5
    },

    buttonText: {
        color: 'white'
    }

});

export default NewDeck
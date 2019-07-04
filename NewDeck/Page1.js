import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';

class Page1 extends React.Component {

    render() {

        const {navigation} = this.props;

        return (
            <View style={styles.container}>
                <Text>What is the title of your new deck?</Text>

                <TextInput style={styles.textField}/>

                <Button
                    style={styles.button}
                    title='Create Deck'
                    onPress={()=> navigation.navigate('HomeDeck')}
                />

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
        color: 'white',
        width: 200,
        height: 100,
        margin: 10,
        border: 1
    },

    button: {
        backgroundColor: 'red',
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

export default Page1
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import reducer from './Redux/reducer'
import {TabNavigator, StackNavigator} from 'react-navigation';
import Home from './Home'
import NewDeck from './NewDeck'


const Tab = TabNavigator({
    Home: {
        screen: Home,
    },
    NewDeck: {
        screen: NewDeck
    }
});

export default function App() {
    return (
        <Provider store={createStore(reducer)}>
            <View style={styles.container}>
                <Tab />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

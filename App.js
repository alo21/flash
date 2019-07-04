import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import reducer from './Redux/reducer'
import {TabNavigator, StackNavigator} from 'react-navigation';
import Home from './Home'
import NewDeck from './NewDeck'


const Tabs = TabNavigator({
    Home: {
        screen: Home,
    },
    Dashboard: {
        screen: NewDeck
    }
});

export default function App() {
    return (
        <Provider store={createStore(reducer)}>
            <View style={styles.container}>
                <Tabs />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

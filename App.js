import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import reducer from './Redux/reducer'
import {TabNavigator, StackNavigator} from 'react-navigation';

function Home() {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

function Dashboard() {
    return (
        <View>
            <Text>Dashboard</Text>
        </View>
    )
}

const Tabs = TabNavigator({
    Home: {
        screen: Home,
    },
    Dashboard: {
        screen: Dashboard
    }
});

export default function App() {
    return (
        <Provider store={createStore(reducer)}>
            <View style={styles.container}>
                <Tabs />

                <Text>Open up App.js to start working on your APP!</Text>
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

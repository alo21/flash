import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TabNavigator} from "react-navigation";
import NewDeck from "../NewDeck";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../Redux/reducer";
import DeckList from '../DeckList'




const Tabs = TabNavigator({
    DeckList: {
        screen: DeckList,
    },
    NewDeck: {
        NewDeck: NewDeck
    }
});

class Home extends React.Component {

    render() {

        return (
            <Provider store={createStore(reducer)}>
                <View style={styles.container}>
                    <Tabs/>
                </View>
            </Provider>
        );

    }
}


export default Home
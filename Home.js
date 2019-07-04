import React from 'react';
import {connect} from "react-redux";
import {Text, View} from "react-native";

class Home extends React.Component{

    render(){
        return(
            <View>
                <Text>Home</Text>
            </View>

        )
    }


}

//
// const mapDispatchToProps = dispatch => {
//
//     return {
//         // addQuestion: question => dispatch(addQuestion(question))
//     };
//
//
// };
//
// const mapStateToProps = state => {
//     return {
//         // questions: state.questions,
//         // user: state.user
//     };
// };
//
//
// const home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home
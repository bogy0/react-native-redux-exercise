import React, { Component } from 'react';
import ReactNative from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

const {
    View,
    Text,
    TouchableHighlight,
} = ReactNative;

class AppContainer extends Component {
    addRecipe() {
        this.props.addRecipe();
    }

    render () {
        return <View>
            <Text style={{marginTop: 20}}>
                I am App Container! Recipe Count: {this.props.recipeCount}
            </Text>
            <TouchableHighlight onPress={() => {this.addRecipe() }}>
                <View>
                    <Text>Add recipe</Text>
                </View>
            </TouchableHighlight>
        </View>
    }
}

function mapDispatchToProps(dispatch) {
    // smart components, becouse these are connects to the store actions
    console.log(ActionCreators);
    return bindActionCreators(ActionCreators, dispatch);
}
export default connect((state) => {
    return {
        recipeCount: state.recipeCount
    }
}, mapDispatchToProps)(AppContainer);

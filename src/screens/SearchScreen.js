import React, { Component } from 'react';
import { View } from 'react-native';

import SearchContainer from '../containers/SearchContainer';

export default class SearchScreen extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={{flex:1}}>
                <SearchContainer />
            </View>
        );
    }
}
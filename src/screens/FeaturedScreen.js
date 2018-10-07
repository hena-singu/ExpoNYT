import React, { Component } from 'react';
import { View } from 'react-native';

import NewsFeedContainer from '../containers/NewsFeedContainer';

export default class FeaturedScreen extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={{flex:1}}>
                <NewsFeedContainer />
            </View>
        );
    }
}
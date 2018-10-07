import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class BookmarksScreen extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Bookmarks, Soon</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
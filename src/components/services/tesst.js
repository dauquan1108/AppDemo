import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';

class Tesst extends Component {
    render() {
        const {item} = this.props;
        console.log({item});
        return (
            <View>
                <Text>
                    quan
                </Text>
            </View>
        );
    }
}

export default Tesst;
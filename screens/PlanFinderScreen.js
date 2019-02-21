import React from 'react';
import {
    View,
    Image,
    Picker,
    Text,
    StyleSheet
} from 'react-native';
import TopNavBar from '../components/TopNavBar';


export default class PlanFinderScreen extends React.Component {
    render() {
        const { style } = this.props;

        return (
            <View style={style}>
                <TopNavBar />
            </View>
        )
    }
}
import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text, TouchableOpacity} from 'react-native';

// Redux
import {connect} from "react-redux";

// Component
import Header from '../group/Header';
import HeaderGroup from '../group/HeaderGroup';
import Test from './tesst';

// Theme
import ThemeLight from '../themes/ThemeLight';
import ThemeDark from '../themes/ThemeDark';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
        }
    }

    Status = () => {
        const {status} = this.state;
        this.setState({
            status: !status
        })
    }

    render() {
        const {navigation, data} = this.props;
        const {status} = this.state;
        const ThemeColor = status ? ThemeLight.color : ThemeDark.color;
        debugger;
        const test = ThemeDark.color
        console.log({test});
        console.log({ThemeColor});
        return (
            <View>
                <ScrollView>
                    <HeaderGroup navigation={navigation} title="Thông tin xét duyệt"/>
                    <Header/>
                    <View>
                        {data.map((item) => {
                            return <Test key={item.id} item={item}/>;
                        })}
                    </View>
                    <View style={{backgroundColor: 'red', width: 50, height: 30}}>
                        <TouchableOpacity onPress={this.Status}>
                            <Text>
                                Button
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style = {{color: ThemeColor}}> QuanDX </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.DataApp,
    };
};


export default connect(mapStateToProps, null)(Home);


const styles = StyleSheet.create({
    BorderButton: {
        borderWidth: 0.2,
        borderColor: '#72707475',
    },
});

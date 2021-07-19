import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

// Redux
import {connect} from 'react-redux';

// Component
import Header from '../group/Header';
import HeaderGroup from '../group/HeaderGroup';
import Test from './tesst';

// Theme
import ThemeLight from '../themes/ThemeLight';
import ThemeDark from '../themes/ThemeDark';
import Modals from './Modal';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      modalVisible: true,
    };
  }

  Status = () => {
    const {status} = this.state;
    this.setState({
      status: !status,
    });
  };
  // Modal
  setModalVisible = () => {
    const {modalVisible} = this.state;
    this.setState({modalVisible: !modalVisible});
  };

  render() {
    const {navigation, data} = this.props;
    const {status, modalVisible} = this.state;
    const ThemeColor = status ? ThemeLight.color : ThemeDark.color;
    const test = ThemeDark.color;
    return (
      <View>
        <ScrollView>
          <HeaderGroup navigation={navigation} title="Thông tin xét duyệt" />
          <Header />
          <View>
            {data.map(item => {
              return <Test key={item.id} item={item} />;
            })}
          </View>
          <View style={{backgroundColor: 'red', width: 50, height: 30}}>
            <TouchableOpacity onPress={this.Status}>
              <Text>Button</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{color: ThemeColor}}> QuanDX </Text>
          </View>
          <TouchableOpacity onPress={this.setModalVisible}>
            <Text>Quan Modals</Text>
          </TouchableOpacity>
          <Modals
            modalVisible={modalVisible}
            setModalVisible={this.setModalVisible}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
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

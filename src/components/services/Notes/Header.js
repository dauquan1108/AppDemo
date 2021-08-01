import React, {Component} from 'react';
import {View, Text, TextInput, ScrollView, StyleSheet} from 'react-native';

// redux
import {connect} from 'react-redux';

// action
import * as actions from '../../../actions';

// icon
import Icons from 'react-native-vector-icons/FontAwesome5';

// theme
import themeDark from '../../themes/dark';
import themeLight from '../../themes/light';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  onChangeInput = e => {
    this.setState({
      value: e,
    });
  };

  onClick = () => {
    const {value} = this.state;
    const values = value.trim();
    const {addData} = this.props;
    addData(values);
    this.setState({value: ''});
  };
  render() {
    const {value} = this.state;
    const {status} = this.props;
    const themes = status ? themeLight : themeDark;
    return (
      <View style={[styles.Header, {backgroundColor: themes.theme.input}]}>
        <Icons name="pencil-alt" color={themes.theme.backgroundBT} size={20} />
        <TextInput
          type="text"
          style={{fontSize: 18}}
          placeholder="Vui lòng nhập..."
          autoFocus
          value={value}
          onChangeText={this.onChangeInput}
          onSubmitEditing={this.onClick}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
});
const mapStateToProps = state => {
  return {
    status: state.StatusOff,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addData: value => {
      dispatch(actions.ON_ADD_DATA(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

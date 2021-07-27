import React, {Component} from 'react';
import {View, Text, TextInput, ScrollView, StyleSheet} from 'react-native';

import {connect} from 'react-redux';
import * as actions from '../../../actions';

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
    return (
      <View style={styles.Header}>
        <TextInput
          type="text"
          style={styles.Input}
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
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  Input: {
    paddingLeft: 15,
  },
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    addData: value => {
      dispatch(actions.ON_ADD_DATA(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(Header);

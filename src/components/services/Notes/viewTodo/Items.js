import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

// icon
import IonIcon from 'react-native-vector-icons/AntDesign';

// Redux
import {connect} from 'react-redux';

// theme
import themeDark from '../../../themes/dark';
import themeLight from '../../../themes/light';

import * as actions from '../../../../actions';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.item.names,
    };
  }

  onChangeInput = event => {
    this.setState({
      value: event,
    });
  };

  onUpdate = () => {
    const {value} = this.state;
    const {item, update} = this.props;
    update(item.id, value);
  };

  onCheckDone = () => {
    const {updateStatus, item} = this.props;
    updateStatus(item.id);
  };

  onDeleteItem = () => {
    const {deleteItem, item} = this.props;
    deleteItem(item.id);
  };

  render() {
    const {status, active} = this.props;
    const {value} = this.state;
    const themes = status ? themeLight : themeDark;
    return (
      <View style={styles.item}>
        <TouchableOpacity
          style={[styles.Icon, {backgroundColor: themes.theme.input}]}
          onPress={this.onCheckDone}>
          <IonIcon
            name="heart"
            color={active ? 'red' : themes.theme.border}
            size={20}
          />
        </TouchableOpacity>
        <TextInput
          style={[active ? styles.titleDone : styles.title]}
          value={value}
          onChangeText={this.onChangeInput}
          onSubmitEditing={this.onUpdate}
        />
        <TouchableOpacity style={styles.Icon} onPress={this.onDeleteItem}>
          <IonIcon name="delete" color={themes.theme.border} size={25} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  Icon: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  },
  titleDone: {
    flex: 1,
    fontSize: 20,
    color: '#EAE9EE',
    textAlign: 'center',
    textDecorationLine: 'line-through',
  },
});
const mapStateToProps = state => {
  return {
    status: state.StatusOff,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    update: (id, value) => {
      dispatch(actions.ON_UPDATE(id, value));
    },
    updateStatus: id => {
      dispatch(actions.ON_UPDATE_STATUS(id));
    },
    deleteItem: id => {
      dispatch(actions.ON_DELETE_ITEM(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);

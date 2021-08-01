import React, {Component} from 'react';
import {SafeAreaView, FlatList, StyleSheet, Text} from 'react-native';

// redux
import {connect} from 'react-redux';

// Selectors
import {getVisibleTodo} from '../../../selectors';

//component
import Items from './viewTodo/Items';

// theme
import themeDark from '../../themes/dark';
import themeLight from '../../themes/light';

class ViewTodo extends Component {
  render() {
    const {data, status} = this.props;
    const countDate = data.length;
    const themes = status ? themeLight : themeDark;
    const renderItem = ({item}) => <Items item={item} active={item.status} />;
    return (
      <SafeAreaView style={styles.container}>
        {countDate === 0 && (
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 18,
              color: themes.theme.textColor,
              marginTop: '10%',
            }}>
            Danh sách công việc trống!
          </Text>
        )}
        {countDate > 0 && (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        )}
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state, {active}) => {
  return {
    data: getVisibleTodo(state, active),
    status: state.StatusOff,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
});

export default connect(mapStateToProps, null)(ViewTodo);

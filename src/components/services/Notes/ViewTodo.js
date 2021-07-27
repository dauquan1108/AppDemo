import React, {Component} from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';

// redux
import {connect} from 'react-redux';

//component
import Items from './viewTodo/Items';

class ViewTodo extends Component {
  render() {
    const {data} = this.props;
    const renderItem = ({item}) => <Items item={item.names} />;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.DataApp,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
});

export default connect(mapStateToProps, null)(ViewTodo);

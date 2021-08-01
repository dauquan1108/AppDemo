import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
// redux
import {connect} from 'react-redux';

//theme
import themeDark from '../../themes/dark';
import themeLight from '../../themes/light';

// component
import Header from './Header';
import ViewTodo from './ViewTodo';
import Footer from './Footer';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'All',
    };
  }

  onActive = event => {
    this.setState({
      active: event,
    });
  };
  render() {
    const {active} = this.state;
    const {status} = this.props;
    const theme = status ? themeLight : themeDark;
    return (
      <View
        style={[
          styles.TodoList,
          {backgroundColor: theme.theme.backgroundNote},
        ]}>
        <Header />
        <ViewTodo active={active} />
        <Footer onActive={this.onActive} active={active} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TodoList: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 24,
    padding: 5,
  },
});

const mapStateToProps = state => {
  return {
    status: state.StatusOff,
  };
};
export default connect(mapStateToProps, null)(TodoList);

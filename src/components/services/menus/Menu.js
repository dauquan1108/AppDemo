import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
// redux
import {connect} from 'react-redux';

// component
import ViewMenu from './ViewMenu';
import ViewSetting from './ViewSetting';
import HeaderShared from '../../shared/HeaderShared';

//theme
import themeDark from '../../themes/dark';
import ThemeLight from '../../themes/light';

class Menu extends Component {
  render() {
    const {blog, status, navigation} = this.props;
    const themes = status ? ThemeLight : themeDark;
    return (
      <View style={[styles.Menu, {backgroundColor: themes.theme.background}]}>
        <HeaderShared title="Menu" navigation={navigation} />
        <View style={styles.MenuContent}>
          {blog.map(item => {
            return <ViewMenu key={item.id} item={item} />;
          })}
        </View>
        <ViewSetting phoneNumber="0387091106" />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    blog: state.BlogDate,
    status: state.StatusOff,
  };
};

const styles = StyleSheet.create({
  Menu: {
    flex: 1,
  },
  MenuContent: {
    height: 380,
  },
});
export default connect(mapStateToProps, null)(Menu);

import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import ListItem from './ListItem';
import Item from './Item';
import HorizontalItem from './HorizontalItem';
import b1 from '../../assets/b1.jpg';
import b2 from '../../assets/b2.jpg';
import b3 from '../../assets/b3.jpg';
import b4 from '../../assets/b4.jpg';

class ConTents extends Component {
  constructor() {
    super();
    this.state = {
      List: [
        {
          id: 1,
          images: b1,
          text: 'Lenovo IdeaPad Gaming 3 15IMH05 i5 10300H 15IMH05 i5 10300H 15IMH05 i5 10300H (81Y4013VVN)',
        },
        {
          id: 2,
          images: b2,
          text: 'Cấu hình Điện thoại Xiaomi Redmi Note 10 5G 8GB ',
        },
        {
          id: 3,
          images: b3,
          text: 'Điện thoại iPhone 12 64GB ',
        },
        {
          id: 4,
          images: b4,
          text: 'PHỤ KIỆN NỔI BẬT NHẤT',
        },
      ],
    };
  }
  render() {
    const {navigation} = this.props;
    const {List} = this.state;
    return (
      <View style={styles.ConTent}>
        <ScrollView style={styles.scrollView}>
          {/*khoi1*/}
          <View style={styles.ListItems}>
            {List.map(item => {
              return (
                <ListItem
                  item={item}
                  key={item.id}
                  // onPress={() => <ConTentsItem item={item} />}
                  onPress={() => navigation.navigate('ConTentsItems', {item})}
                />
              );
            })}
          </View>
          {/*end khoi 1*/}

          {/*khoi 2*/}
          <View style={styles.HorizontalItems}>
            <View style={styles.ConTents}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {List.map(item => {
                  return <HorizontalItem item={item} key={item.id} />;
                })}
              </ScrollView>
            </View>
          </View>
          {/*end khoi 2*/}

          {/*khoi 3*/}
          <View style={styles.Items}>{<Item />}</View>
          {/*end khoi 3*/}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ConTent: {},

  ListItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  Items: {},
  HorizontalItems: {
    flex: 1,
  },
  ConTents: {
    height: 170,
    marginTop: 10,
    marginBottom: 10,
  },
});
export default ConTents;

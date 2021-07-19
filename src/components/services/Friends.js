import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import HeaderGroup from '../group/HeaderGroup';

import a1 from '../../assets/nen.jpg';
import a2 from '../../assets/avatar.jpg';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class Friends extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView>
        <View style={styles.HeaderGroup}>
          <HeaderGroup
            navigation={navigation}
            title="Chỉnh sửa thông tin cá nhân"
          />

          <View style={styles.Content}>
            {/*<View style={styles.Border}/>*/}
            <View style={styles.Avatar}>
              <View style={styles.AvatarText}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  Ảnh đại diện{' '}
                </Text>
                <TouchableOpacity>
                  <Text>Chỉnh sửa</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.AvatarImage}>
                <View style={styles.ImageAvatar}>
                  <Image
                    source={a2}
                    style={{
                      flex: 1,
                      width: 180,
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={styles.Border} />
            <View style={styles.ImageBackground}>
              <View style={styles.AvatarText}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Ảnh bìa</Text>
                <TouchableOpacity>
                  <Text>Chỉnh sửa</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ImageBackgroundImage}>
                <Image
                  source={a1}
                  style={{
                    width: '100%',
                    height: 300,
                  }}
                />
              </View>
            </View>
            <View style={styles.Border} />

            <View style={styles.Title}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>Chi tiết</Text>
              <View style={styles.TitleText}>
                <View style={styles.TitleTextIcon}>
                  <Icon name={'bell'} color="red" size={20} />
                </View>
                <View style={styles.TitleTextContent}>
                  <Text> 03809900</Text>
                  <Icon name={'bell'} color="red" size={20} />
                </View>
              </View>
              <View style={styles.TitleText}>
                <View style={styles.TitleTextIcon}>
                  <Icon name={'bell'} color="red" size={20} />
                </View>
                <View style={styles.TitleTextContent}>
                  <Text> vien cong nghe phan </Text>
                </View>
              </View>
              <View style={styles.TitleText3}>
                <View style={styles.TitleTextIcon}>
                  <Icon name={'bell'} color="red" size={20} />
                </View>
                <View style={styles.TitleTextContentIcon}>
                  <View style={styles.TitleTextContentIconText}>
                    <Text>Chuc vu: </Text>
                  </View>
                  <View style={styles.TitleTextContentIconTitle}>
                    <Text>Sinh vien thu Sinh vien thu tap </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.Titles}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                Cấu hình trang cá nhân
              </Text>
              <View style={styles.TitlesList}>
                <View style={styles.TitlesListIcon}>
                  <Icon name={'bell'} color="red" size={20} />
                </View>
                <View style={styles.TitlesListContent}>
                  <Text>Ai có thể đăng lên dòng thời gian của bạn? </Text>
                </View>
                <View style={styles.TitlesListTitle}>
                  <Text style={{color: 'blue'}}> Bạn bè</Text>
                </View>
              </View>

              <View style={styles.TitlesList}>
                <View style={styles.TitlesListIcon}>
                  <Icon name={'bell'} color="red" size={20} />
                </View>
                <View style={styles.TitlesListContent}>
                  <Text>
                    Ai có xem nội dung mà người khác đã đăng lên dòng thời gian
                    của bạn?
                  </Text>
                </View>
                <View style={styles.TitlesListTitle}>
                  <Text style={{color: 'blue'}}>Bạn bè</Text>
                </View>
              </View>

              <View style={styles.TitlesList}>
                <View style={styles.TitlesListIcon}>
                  <Icon name={'bell'} color="red" size={20} />
                </View>
                <View style={styles.TitlesListContent}>
                  <Text>
                    Xét duyệt bài viết bạn bè gắn thẻ trước khi bài viết xuất
                    hiện trên dòng thời gian cảu bạn?
                  </Text>
                </View>
                <View style={styles.TitlesListTitle}>
                  <Text style={{color: 'blue'}}>Tắt</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Friends;
const styles = StyleSheet.create({
  HeaderGroup: {},
  Content: {
    marginLeft: 15,
    marginRight: 15,
  },
  Border: {
    borderWidth: 0.3,
    borderColor: '#C3C3',
  },
  // avatar
  Avatar: {
    marginTop: 5,
    marginBottom: 5,
  },
  AvatarText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  AvatarImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageAvatar: {
    overflow: 'hidden',
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 185,
    height: 185,
    borderRadius: 185 / 2,
    borderWidth: 3,
  },
  //ImageBackground
  ImageBackground: {
    marginTop: 5,
    marginBottom: 5,
  },
  ImageBackgroundImage: {
    width: 380,
    height: 250,
    overflow: 'hidden',
    borderRadius: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  Title: {
    marginTop: 15,
    marginBottom: 10,
  },
  TitleText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  TitleTextIcon: {
    flex: 1,
  },
  TitleTextContent: {
    flex: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  TitleText3: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    paddingTop: 10,
  },
  TitleTextContentIcon: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 15,
  },
  TitleTextContentIconText: {
    flex: 2,
  },
  TitleTextContentIconTitle: {
    flex: 10,
  },
  Titles: {},
  TitlesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
  },
  TitlesListIcon: {
    flex: 1.5,
  },
  TitlesListContent: {
    flex: 8,
  },
  TitlesListTitle: {
    flex: 3,
  },
});

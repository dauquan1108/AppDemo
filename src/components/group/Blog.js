import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';

// icon vector trong react-native
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome5';
import IconFontis from 'react-native-vector-icons/Fontisto';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import IonEntypo from 'react-native-vector-icons/Entypo';
import IonFontAwesome from 'react-native-vector-icons/FontAwesome';
// end icon vector trong react-native

// tu dong thay doi chieu rong man hinh
const windowWidth = Dimensions.get('window').width;
// end tu dong thay doi chieu rong man hinh

// anh
import a1 from '../../assets/nen.jpg';
import a2 from '../../assets/avatar.jpg';
// end anh

import Modal from './blog/Modal';

class Blog extends Component {
  render() {
    const color = 'red',
      size = 20;
    const {navigation} = this.props;
    return (
      <ScrollView>
        <View style={styles.BlogApp}>
          <View style={{backgroundColor: '#cae8cd'}}>
            <View style={styles.StatusBar}>
              <StatusBar
                backgroundColor="#cae8cd"
                barStyle="dark-content"
                hidden={false}
                translucent={true}
              />
            </View>
            <View style={styles.Header}>
              <View style={styles.HeaderInput}>
                <TouchableOpacity style={styles.HeaderInputIcon}>
                  <IonFontAwesome
                    name="chevron-left"
                    size={15}
                    color="#ccc"
                    onPress={() => navigation.goBack()}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.HeaderInputTextInput}
                  onPress={() => navigation.navigate('SearchBlog')}
                  navigation={navigation}>
                  <View style={styles.HeaderInputTextInputText}>
                    <Text style={{fontSize: 15}}>Tìm kiếm</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.personal}>
            <View style={styles.personalImage}>
              <View style={styles.personalCoverImage}>
                <Image
                  source={a1}
                  style={{
                    width: 380,
                    height: 250,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                />
                <TouchableOpacity
                  onPress={this.takePicture}
                  style={styles.backgroundCamera}>
                  <View style={styles.IconCamera}>
                    <IonFontAwesome name="camera" size={size} color={color} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.personalAvatar}>
                <View style={styles.ImageAvatar}>
                  <Image
                    source={a2}
                    style={{
                      flex: 1,
                      width: 180,
                    }}
                  />
                </View>
                <TouchableOpacity style={styles.AvatarCamera}>
                  <View style={styles.IconCameraAvatar}>
                    <IonFontAwesome name="camera" size={size} color={color} />
                  </View>
                </TouchableOpacity>
                <Text style={{fontSize: 25, color: '#000', fontWeight: 'bold'}}>
                  Đậu Xuân Quân
                </Text>
              </View>
            </View>

            <View style={styles.personalSettings}>
              <View style={styles.personalSettingsItem}>
                <TouchableOpacity style={styles.personalSettingsItemIcon}>
                  <Icons
                    name="user-edit"
                    size={25}
                    color={color}
                    onPress={this.goBack}
                  />
                </TouchableOpacity>
                <Text style={styles.personalSettingsItemText}>
                  Chỉnh sửa trang cá nhân
                </Text>
              </View>
              <View style={styles.personalSettingsItem}>
                <TouchableOpacity style={styles.personalSettingsItemIcon}>
                  <Icons
                    name="clipboard-list"
                    size={25}
                    color={color}
                    onPress={this.goBack}
                  />
                </TouchableOpacity>
                <Text style={styles.personalSettingsItemText}>Xét duyệt</Text>
              </View>
              <View style={styles.personalSettingsItem}>
                <TouchableOpacity style={styles.personalSettingsItemIcon}>
                  <Icons
                    name="user-friends"
                    size={25}
                    color={color}
                    onPress={this.goBack}
                  />
                </TouchableOpacity>
                <Text style={styles.personalSettingsItemText}>Bạn bè</Text>
              </View>
              <View style={styles.personalSettingsItem}>
                <TouchableOpacity style={styles.personalSettingsItemIcon}>
                  <Icons
                    name="rss"
                    size={25}
                    color={color}
                    onPress={this.goBack}
                  />
                </TouchableOpacity>
                <Text style={styles.personalSettingsItemText}>
                  Người theo dõi
                </Text>
              </View>
            </View>

            <View style={styles.personalInformation}>
              <View style={styles.personalInformationPhone}>
                <View style={styles.personalInformationPhoneIcon}>
                  <Icons name={'phone-volume'} color={color} size={size} />
                </View>
                <View style={styles.personalInformationContent}>
                  <View style={styles.personalInformationPhoneTitle}>
                    <Text>Số điện thoại: </Text>
                  </View>

                  <View style={styles.personalInformationPhoneTitle}>
                    <Text style={{fontWeight: 'bold', color: '#000'}}>
                      0387091106
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <View style={styles.personalInformationPhoneIcon}>
                      <IconFontis name={'share-a'} color={color} size={15} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.personalInformationWork}>
                <View style={styles.personalInformationWorkIcon}>
                  <Icons name={'briefcase'} color={color} size={size} />
                </View>

                <View style={styles.personalInformationWorkText}>
                  <Text style={{fontWeight: 'bold', color: '#000'}}>
                    Viện CNPM/Công nghệ phần mềm, Viện CNPM Viện CNPM
                  </Text>
                </View>
              </View>

              <View style={styles.personalInformationPhone}>
                <View style={styles.personalInformationPhoneIcon}>
                  <Icons name={'user-circle'} color={color} size={size} />
                </View>

                <View style={styles.personalInformationPhoneTitle}>
                  <Text>Chức vụ: </Text>
                </View>
                <View style={styles.personalInformationContent}>
                  <View style={styles.personalInformationPhoneTitle}>
                    <Text style={{fontWeight: 'bold', color: '#000'}}>
                      Sinh Viên Thực Tập
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.Believe}>
            <View style={styles.BelieveHeader}>
              <View style={styles.BelieveHeaderIcon}>
                <View style={styles.BelieveHeaderIconTitle}>
                  <Text
                    style={{fontSize: 15, color: '#000', fontWeight: 'bold'}}>
                    Bài Viết
                  </Text>
                </View>

                <View style={styles.BelieveHeaderIconIcon}>
                  <TouchableOpacity>
                    <View style={styles.IconCamera}>
                      <IconIonicons
                        name="md-options-outline"
                        size={size}
                        color={color}
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.IconCamera}>
                      <IconFeather name="settings" size={size} color={color} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity>
                <View style={styles.BelieveHeaderWhatYouThinking}>
                  <View style={styles.BelieveHeaderWhatYouThinkingImage}>
                    <Image
                      source={a2}
                      style={{
                        flex: 1,
                        width: 40,
                      }}
                    />
                  </View>
                  <Text> Bạn đang nghĩ gì?</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.BelieveNavigation}>
              <TouchableOpacity>
                <View style={styles.BelieveNavigationText}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: '#479bcd',
                      backgroundColor: '#ccc',
                      padding: 7,
                      borderRadius: 18,
                    }}>
                    Tất cả
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.BelievePackage}>
              <View style={styles.BelievePackageItem}>
                <View style={styles.BelievePackageItemHeader}>
                  <View style={styles.BelievePackageItemHeaderAvatar}>
                    <Image
                      source={a2}
                      style={{
                        height: 40,
                        width: 40,
                        borderRadius: 40 / 2,
                      }}
                    />
                  </View>

                  <View style={styles.BelievePackageItemHeaderContent}>
                    <View style={styles.BelievePackageItemHeaderContentName}>
                      <Text>Đậu Xuân Quân</Text>
                    </View>
                    <View style={styles.BelievePackageItemHeaderContentTimer}>
                      <View
                        style={styles.BelievePackageItemHeaderContentTimerTime}>
                        <Text>Hôm qua </Text>
                      </View>
                      <View
                        style={styles.BelievePackageItemHeaderContentTimerIcon}>
                        <IconIonicons
                          name="md-lock-closed-outline"
                          size={15}
                          color={color}
                        />
                      </View>
                    </View>
                  </View>

                  <View style={styles.BelievePackageItemHeaderIcon}>
                    <TouchableOpacity>
                      <IonEntypo
                        name="dots-three-horizontal"
                        size={size}
                        color={color}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.BelievePackageItemContent}>
                  <Image
                    source={a2}
                    style={{height: 400, width: windowWidth}}
                  />
                </View>
                <View style={styles.BelievePackageItemFooter}>
                  <View style={styles.BelievePackageItemFooterIconAdd}>
                    <TouchableOpacity style={styles.IconCameraAvatar}>
                      <IconIonicons name="add" size={size} color={color} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.BelievePackageItemFooterGroupIcon}>
                    <View style={styles.BelievePackageItemFooterGroup}>
                      <IconAntDesign name="like2" size={size} color={color} />
                      <Text> Thích</Text>
                    </View>
                    <View style={styles.BelievePackageItemFooterGroup}>
                      <Icons name="comment-alt" size={size} color={color} />
                      <Text> Bình luận</Text>
                    </View>
                    <View style={styles.BelievePackageItemFooterGroup}>
                      <IconIonicons
                        name="ios-share-social-outline"
                        size={size}
                        color={color}
                      />
                      <Text> Chia sẻ</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Modal />
        </View>
      </ScrollView>
    );
  }
}

export default Blog;

const styles = StyleSheet.create({
  BlogApp: {},
  StatusBar: {
    flex: 1,
  },
  // Header
  Header: {
    flex: 1,
    height: 80,
    borderBottomWidth: 0.5,
    borderBottomColor: '#72707475',
  },

  HeaderInput: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    marginTop: 25,
  },
  HeaderInputIcon: {
    flex: 2,
    alignItems: 'center',
  },
  HeaderInputTextInput: {
    flex: 11,
  },
  HeaderInputTextInputText: {
    justifyContent: 'center',
    backgroundColor: '#ccc',
    height: 40,
    width: 300,
    borderRadius: 20,
    paddingLeft: 30,
    paddingRight: 15,
  },
  // end Header

  // personal
  personal: {
    margin: 15,
  },

  personalImage: {
    alignItems: 'center',
    overflow: 'hidden',
    height: 400,
  },
  personalCoverImage: {
    position: 'relative',
  },
  backgroundCamera: {
    position: 'absolute',
    bottom: 15,
    right: 20,
  },
  IconCamera: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    height: 35,
    width: 40,
    borderRadius: 5,
    marginLeft: 10,
  },
  personalAvatar: {
    alignItems: 'center',
    position: 'absolute',
    top: 150,
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
  IconCameraAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#ccc',
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
  },
  AvatarCamera: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    bottom: 50,
    right: -8,
    borderRadius: 43 / 2,
    borderWidth: 2,
  },

  personalSettings: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
  personalSettingsItem: {
    alignItems: 'center',
    width: 90,
  },
  personalSettingsItemIcon: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 200,
  },
  personalSettingsItemText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
    fontSize: 13,
  },

  personalInformation: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },

  personalInformationPhone: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingBottom: 15,
    flex: 1,
  },
  personalInformationPhoneIcon: {
    flex: 1,
  },
  personalInformationContent: {
    flex: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  personalInformationPhoneTitle: {},

  personalInformationWork: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 15,
    flex: 1,
  },
  personalInformationWorkIcon: {
    flex: 1,
  },
  personalInformationWorkText: {
    flex: 10,
  },
  // end personal

  // Believe
  Believe: {
    flexDirection: 'column',
  },

  BelieveHeader: {
    borderColor: '#ccc',
    borderTopWidth: 4,
    borderBottomWidth: 4,
  },
  BelieveHeaderIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#72707475',
  },
  BelieveHeaderIconTitle: {
    flex: 5,
  },
  BelieveHeaderIconIcon: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  BelieveHeaderWhatYouThinking: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  BelieveHeaderWhatYouThinkingImage: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    overflow: 'hidden',
  },

  BelieveNavigation: {
    flexDirection: 'row',
  },
  BelieveNavigationText: {
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },

  BelievePackage: {
    flexDirection: 'column',
    borderColor: '#ccc',
    borderTopWidth: 4,
    borderBottomWidth: 4,
  },
  BelievePackageItem: {},
  BelievePackageItemHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    margin: 10,
  },
  BelievePackageItemHeaderAvatar: {
    flex: 1,
  },

  BelievePackageItemHeaderContent: {
    flex: 7,
  },
  BelievePackageItemHeaderContentName: {},
  BelievePackageItemHeaderContentTimer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  BelievePackageItemHeaderContentTimerTime: {},
  BelievePackageItemHeaderContentTimerIcon: {},
  BelievePackageItemHeaderIcon: {
    flex: 0.5,
  },

  BelievePackageItemContent: {
    overflow: 'hidden',
    alignItems: 'center',
    height: 400,
    width: windowWidth,
  },

  BelievePackageItemFooter: {
    flexDirection: 'column',
  },
  BelievePackageItemFooterIconAdd: {
    margin: 10,
  },
  BelievePackageItemFooterGroupIcon: {
    borderTopWidth: 0.5,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  BelievePackageItemFooterGroup: {
    flexDirection: 'row',
  },
  // end Believe
});

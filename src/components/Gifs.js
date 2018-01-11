import React, { Component } from 'react';
import { connect } from 'react-redux';
import RNFetchBlob from 'react-native-fetch-blob';
//import RNFS from 'react-native-fs';
import firebase from 'firebase';
import { text } from 'react-native-communications';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ActionSheetIOS,
  CameraRoll,
  Alert,
  Clipboard,
  Linking
} from 'react-native';

//import Images from '@assets/images';


import { fetchGifs } from '../actions';

const { width, height } = Dimensions.get('window');

const equalWidth = (width / 4);


class Gifs extends Component {
  static navigationOptions = {
    title: 'Gifs',
  };

  componentWillMount() {
    this.props.fetchGifs();
  }

  //_keyExtractor = (item, index) => item.id;

  handleGifClick = (url) => {
    ActionSheetIOS.showActionSheetWithOptions({
      title: url,
      options: ['Copy', 'Message', 'Open', 'Save Image', 'Cancel'],
      cancelButtonIndex: 4
    }, (buttonIndex) => {
      if (buttonIndex === 0) {
        //copy to clipboard
        console.log('Copied!');
        Clipboard.setString(url);
      } else if (buttonIndex === 1) {
        //link to messenger
        console.log('Messaged!');
        text(null, url);
      } else if (buttonIndex === 2) {
        //open in browser
        console.log('opened!');
        Linking.openURL(url);
      } else if (buttonIndex === 3) {
        //save to camera roll
        //const imageRef = firebase.storage().ref

        //save image to camera roll SAVE GIF AS STATIC IMAGE (first frame?)
        CameraRoll.saveToCameraRoll(url).then(Alert.alert('Success', 'Gif saved!')).catch((err) => console.log(err));

        /* this shit is just complete nonsense
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
          //const blob = xhr.response;
          if (this.status === 200) {
            const blob = this.response;
            console.log('blob: ', blob);
          }
        };
        xhr.send();
        */
        /* this FetchBlob shit is all sorts of fucked up yo */
        /*
        RNFetchBlob.config({
          fileCache: true,
          appendExt: 'gif'
        })
        .fetch('GET', url).then((res) => {
          const path = res.path();
          console.log(path);
          CameraRoll.saveToCameraRoll(path).then(Alert.alert('Success', 'Gif saved!')).catch((err) => console.log(err));
        });
        */
      }
    });
  }

  renderRowItem = (itemData) => {
    return (
      <TouchableOpacity onPress={() => this.handleGifClick(itemData.item.url)}>
        <Image style={{ height: equalWidth, width: equalWidth }} source={{ uri: itemData.item.url }} resizeMode='cover' />
      </TouchableOpacity>
    );
  }

  render() {
    const { gifs } = this.props;
    return (
      <View style={styles.pageContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            EMOJIMAN
          </Text>
        </View>
        <View style={styles.container}>
        {/* //functionality for local gif files
        <TouchableOpacity
          onPress={() => Linking.openURL(Images.awwYeah.uri)

            //CameraRoll.saveToCameraRoll(Images.awwYeah.uri).then(Alert.alert('Success', 'Gif saved!')).catch((err) => console.log(err));
          }//}
        >
          <Image source={Images.awwYeah.uri} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>
        */}

          <FlatList
            data={gifs}
            numColumns={4}
            keyExtractor={(item) => item.name}
            renderItem={this.renderRowItem}
          />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
  pageContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingTop: 10,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  gifContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginTop: 20
  }
});


const mapStateToProps = (state) => {
  const { gifs } = state.gifs;

  return { gifs };
};


export default connect(mapStateToProps, { fetchGifs })(Gifs);

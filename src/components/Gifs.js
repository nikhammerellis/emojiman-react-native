import React, { Component } from 'react';
import { connect } from 'react-redux';
import RNFetchBlob from 'react-native-fetch-blob';
//import RNFS from 'react-native-fs';
import Modal from 'react-native-modal';
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
  Linking,
  WebView,
  NativeModules
} from 'react-native';

const gifHTML = require('../html/gifs.html');

//import Images from '@assets/images';

//import awwYeah from '../assets/img/aaw_yeah.gif';

import { fetchGifs } from '../actions';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const equalWidth = (SCREEN_WIDTH / 4);

//const LinkingManager = NativeModules.LinkingManager;

class Gifs extends Component {
  static navigationOptions = {
    title: 'Gifs',
  };

  componentWillMount() {
    this.props.fetchGifs();
  }

  componentDidMount() {
    //console.log(this.refs.gifWebview.postMessage);//this is a function...
    //this.refs.gifWebview.postMessage('Hello this is fucking working');
    //this.refs.gifWebview.postMessage(this.props.gifs);
  }


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
        //NativeModules.BetterClipboard.addBase64Image(url); //crashes the app
      } else if (buttonIndex === 1) {
        //link to messenger
        //const URL = `sms:;&body=${url}`;
        //LinkingManager.openURL(URL);
        console.log('Messaged!');
        text(null, url);
      } else if (buttonIndex === 2) {
        console.log('open');
        Linking.openURL(url);
      } else if (buttonIndex === 3) {
        CameraRoll.saveToCameraRoll(url).then(Alert.alert('Success', 'Gif saved!')).catch((err) => console.log(err));
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

  // For Displaying images as webviews in renderRowItem
  // <View style={{ width: equalWidth }}>
  //   <WebView
  //     style={styles.webview}
  //     source={{ uri: itemData.item.url }}
  //     dataDetectorTypes={'all'}
  //   />
  // </View>


  render() {
    const { gifs } = this.props;
    //console.log(gifs); //array of objects
    return (
      <View style={styles.pageContainer}>

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            EMOJIMAN
          </Text>
        </View>
        {/*
        <View style={styles.webviewContainer}>
          <WebView
            javaScriptEnabled
            ref="gifWebview"
            injectedJavaScript={'(function(){ console.log("this is working")}());'}
            source={gifHTML}
            onMessage={this.onMessage}
            style={{ flex: 1 }}
          />
        </View>
        */}

          <FlatList
            data={gifs}
            numColumns={4}
            keyExtractor={(item) => item.name}
            renderItem={this.renderRowItem}
          />


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
    backgroundColor: '#F5FCFF',
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
  // gifContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   alignItems: 'flex-start',
  //   marginTop: 20
  // },
  webview: {
    flex: 1,
    width: equalWidth,
    height: equalWidth,
    //marginTop: 10
  },
  imgStyle: {
    //flex: 1,
    //width: equalWidth,
    //height: equalWidth
  },
  webviewContainer: {
    flex: 1,
    //backgroundColor: 'orange'
  }
});


const mapStateToProps = (state) => {
  const { gifs } = state.gifs;

  return { gifs };
};


export default connect(mapStateToProps, { fetchGifs })(Gifs);

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Clipboard, Alert } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-fa-icons';
import Modal from 'react-native-modal';
import { text } from 'react-native-communications';
import store from 'react-native-simple-store';

import { incrementCopyCount, setRecentlyUsed } from '../actions';
import { ModalButton } from './common';


class SingleEmoji extends Component {
  state = {
    isModalVisible: false,
  };

  onCopyPress() {
    const { item } = this.props.item;

    Clipboard.setString(item.emoji);

    this.bumpCopyCount(item.uid, item.copyCount, item);
    this.copyAlert();
  }

  copyAlert() {
    setTimeout(() => {
      Alert.alert('Copied to clipboard!');
    }, 400);
  }

  containsObject(obj, list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].uid === obj.uid) {
        return true;
      }
    }
    return false;
  }

  findIndex(obj, list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].uid === obj.uid) {
        return i;
      }
    }
    return -1;
  }

  async addNewToRecentlyUsed(item) {
    const key = 'recentEmojis';
    await store.push(key, item);
    const val = await store.get(key);
    val.reverse();
    this.props.setRecentlyUsed(val);
  }

  bumpCopyCount(uid, copyCount, item) {
    const { recentlyUsed } = this.props;
    console.log(recentlyUsed);
    //if nothing exists in recently used, OR recently used doesn't contain the emoji already, increment the item's copyCount and insert into the store.
    if (recentlyUsed.length === 0 || !this.containsObject(item, recentlyUsed)) {
      this.props.incrementCopyCount(uid, copyCount);
      item.copyCount += 1;
      this.addNewToRecentlyUsed(item);
    } else {
      const index = this.findIndex(item, recentlyUsed);
      const update = recentlyUsed[index]; // coming back undefined (due to -1)

      update.copyCount += 1;

      store.save('recentEmojis', recentlyUsed);
      this.props.setRecentlyUsed(recentlyUsed);
      this.props.incrementCopyCount(uid, copyCount);
    }
  }

  showModal = () => this.setState({ isModalVisible: true })
  hideModal = () => this.setState({ isModalVisible: false })

  render() {
    const { item } = this.props.item;

    return (
      <View style={styles.listItemStyle}>
        <TouchableOpacity onPress={() => this.showModal()}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <View style={styles.emojiContainer}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <View style={styles.copyContainer}>
              <TouchableOpacity onPress={this.onCopyPress.bind(this)}>
                <Icon name='scissors' style={styles.copy} />
              </TouchableOpacity>
              <Text>{item.copyCount}</Text>
            </View>
          </View>
          <Modal
            isVisible={this.state.isModalVisible}
            onBackdropPress={() => this.hideModal()}
          >
            <View style={styles.modalContent}>
              <Text style={styles.modalLocationName}>{item.emoji}</Text>
              <ModalButton
                onPress={() => {
                    text(null, item.emoji);
                    this.bumpCopyCount(item.uid, item.copyCount, item);
                }}
              >
                Message
              </ModalButton>
              <ModalButton
                onPress={() => {
                  this.onCopyPress();
                  this.hideModal();
                  this.copyAlert();
                }}
              >
                Copy
              </ModalButton>
            </View>
          </Modal>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItemStyle: {
    //padding: 30,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'flex-start'
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#D3D3D3',
    width: '100%',
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 5
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  emoji: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    fontSize: 20
  },
  copyContainer: {
    paddingTop: 10,
    paddingRight: 10
  },
  copy: {
    fontSize: 30,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalLocationName: {
    color: '#007aff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

const mapStateToProps = (state) => {
  const { recentlyUsed } = state.categories;

  return { recentlyUsed };
};

export default connect(mapStateToProps, { incrementCopyCount, setRecentlyUsed })(SingleEmoji);

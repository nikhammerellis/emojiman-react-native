import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
//import store from 'react-native-simple-store';

import { fetchEmojisForCategory, fetchPopularEmojis, setRecentlyUsed } from '../actions';


class ListItem extends Component {
  onRowPress() {
    const { item } = this.props.item;
    if (item.name === 'Popular') {
      this.props.fetchPopularEmojis();
    } else {
      this.props.fetchEmojisForCategory(item);
    }
    const { navigate } = this.props.navigation;
    navigate('CategoryView', { title: item });
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onRowPress.bind(this)}>
        <View style={styles.listItemStyle}>
          <Text style={styles.text}>{this.props.item.item.name}</Text>
          <Text style={styles.emoji}>{this.props.item.item.token}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItemStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 15,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 30
  },
  emoji: {
    fontSize: 20
  }
});

export default connect(null, { fetchEmojisForCategory, fetchPopularEmojis, setRecentlyUsed })(ListItem);

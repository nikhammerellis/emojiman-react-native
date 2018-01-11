import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { AdMobBanner } from 'react-native-admob';
//import _ from 'lodash'; uncomment to use

import SingleEmoji from './SingleEmoji';

class CategoryView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title.name}`,
  });


  renderItem = (item) => {
    return (
      <SingleEmoji item={item} />
    );
  }

  renderAd() {
    return (
      <View style={styles.adRow}>
        <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-9266856293249642/3787453031"
          onAdFailedToLoad={this.bannerError}
          adViewDidReceiveAd={null}
        />
      </View>
    );
  }


/**********************************************************/
  render() {
    const { emojiList, navigation } = this.props;

    if (navigation.state.params.title.name === 'Popular') {
      const { popularEmojis } = this.props;

      return (
        <View style={styles.pageContainer}>
            <FlatList
              data={popularEmojis}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.uid}
            />
            {this.renderAd()}
        </View>
      );
    }

    if (navigation.state.params.title.name === 'Recent') {
      const { recentlyUsed } = this.props;

      if (recentlyUsed.length !== 0) {
        return (
          <View style={styles.pageContainer}>
              <FlatList
                data={recentlyUsed}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.uid}
              />
              {this.renderAd()}
          </View>
        );
      } else {
        return (
          <View style={styles.pageContainer}>
              <View style={styles.noRecentlyUsed}>
              <Text style={styles.noRecentlyUsedText}>You haven't used any emoji's yet!</Text>
              </View>
          </View>
        );
      }
    }


      return (
          <View style={styles.pageContainer}>
              <FlatList
                data={emojiList}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.uid}
              />
              {this.renderAd()}
          </View>
      );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    //paddingTop: 40,
  },
  adRow: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  noRecentlyUsed: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  noRecentlyUsedText: {
    fontWeight: 'bold',
    fontSize: 25
  }
});

const mapStateToProps = (state) => {
  const { emojiList } = state.categories;

  const { recentlyUsed } = state.categories;

  const { popularEmojis } = state.categories;

  return { emojiList, popularEmojis, recentlyUsed };
};

export default connect(mapStateToProps)(CategoryView);

import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { AdMobBanner } from 'react-native-admob';
import store from 'react-native-simple-store';


import { fetchCategories, setRecentlyUsed } from '../actions';
import ListItem from './ListItem';

class CategoryList extends Component {

  static navigationOptions = {
    title: 'Categories',
  };

  componentWillMount() {
    //get categories
    this.props.fetchCategories();

    //use to clear local storage in testing
    //store.delete('recentEmojis');

    //initially set the recently used emojis from local storage
    store.get('recentEmojis').then(res => {
      if (res.length !== 0) {
        const array = res.reverse();
        this.props.setRecentlyUsed(array);
      }
    });
  }

  renderItem = (item) => {
    const { navigation } = this.props;
    return (
      <ListItem item={item} navigation={navigation} />
    );
  }

  render() {
    const { categories } = this.props;

    return (
      <View style={styles.pageContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            EMOJIMAN
          </Text>
        </View>
        <FlatList
          data={categories}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.name}
        />
        <View style={styles.adRow}>
          <AdMobBanner
            adSize="banner"
            adUnitID="ca-app-pub-9266856293249642/4217083470"
            onAdFailedToLoad={this.bannerError}
            adViewDidReceiveAd={null}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  categoryStyle: {
    padding: 30,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  adRow: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  }
});

const mapStateToProps = (state) => {
  const { categories } = state.categories;

  return { categories };
};

export default connect(mapStateToProps, { fetchCategories, setRecentlyUsed })(CategoryList);

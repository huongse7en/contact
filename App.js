import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView } from 'react-native';
import Contacts from 'react-native-contacts';

// You can import from local files

export default class App extends Component {
  constructor() {
    super();
    Contacts.getAll((err, contacts) => {
      if (err) throw err;
      console.log(contacts)
    })
    // this.setState.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // console.log('aa', Contacts)
    // this.renderContent().then(function(result){
    //   this.setState({
    //     dataSource: this.setState.dataSource.cloneWithRows(result.data)
    //   });

    // })
  }
  // async renderContent() {
  //   Contacts.getAll((err, contacts) => {
  //     if (err) throw err;
  //     return contacts
  //   })
  // }
  render() {
    return (
      <Text>AAA</Text>
    //   <ListView
    //     dataSource={this.state.dataSource}
    //     renderRow={(rowData) => <Text>{rowData.name}</Text>}
    //   />
    );
  }
}

const styles = StyleSheet.create({
});

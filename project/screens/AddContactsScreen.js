import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default class AddContactsScreen extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      submitDisabled: true,
      contactsText: '',
    }
  }

  handleTextInput(text){
    if(text.length > 0){
      this.setState(
        {
          submitDisabled: false,
          contactsText: text
        }
      )
    }
    else{
      this.setState({submitDisabled: true})
      console.log(text)
    }
  }

  handleCreateContact(){
    console.log('Added!')
    console.log(this.state.contactsText)
    fetch('http://plato.mrl.ai.8080/contacts/add', {
      method: 'POST',
      headers: {
        API: "scarangella",
        'Content Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(
        {
          text: this.state.contactsText,
        }
      )
    })
    .then(res => res.json())
    .then(body => {
      console.log(body)
      if(body.added !== undefined){
        console.log('Successfully added contact!')
        this.props.navigation.navigate('Contacts',
        {contact: {text: this.state.contactsText}})
      } else {
        console.log('Error adding contact')
      }
    })
  }

render(){
  return (
    <ScrollView style = {styles.container} contentContainerStyle = {styles.contentContainer}>
      <Input placeholder="e.g. Marissa Scarangella"
      onChangeText={text => this.handleTextInput(text)} />
      <View><Button title="Create Contact"
      disabled={this.state.submittDisabled}
      onPress={() => this.handleCreateContact()} />
      </View>
    </ScrollView>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4def6',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#c4def6',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});

import React from 'react'
import { StyleSheet, Text, View, Button, ListView } from 'react-native'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      content: 'Hey Howdy Hey',
      dataSource: ds.cloneWithRows(['this is one', 'this is two', 'this is three']),
      // i dont know what is happening above with ds but i tried to get as much of your code as i could
      currentItem: 3
    }
    // console.log("Hello World!!!")
  }

  onPressHandler (evt) {
    console.log('Yeehaw!')
    this.setState({ content: 'Theres a snake in my boot!' })
    this.setState({ dataSource: this.state.dataSource.cloneWithRows([...this.state.dataSource, 'this is odd']) })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.state.content}</Text>
        <Button style={styles.button} color="#990000" title="Click Me" onPress={(evt) => this.onPressHandler(evt)}></Button>
        <ListView
          dataSource={this.state.dataSource}
          renderRow= {(rowData) => <Text>{rowData}</Text>} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 22
  },
  button: {

  }
})

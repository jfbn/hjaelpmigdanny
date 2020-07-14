import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameList from './components/GameList';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      isLoading: true,
      status: "taken",
      games: []
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.gamerzclass.com/games')
      const json = await res.json();
      this.setState({games: json.rows})
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>GAMES</Text>
        <GameList games={this.state.games}></GameList>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import Game from './Game';

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidUpdate() {
     console.log(this.props.games);
  }
  render() { 
    return (
        <View>
            <FlatList
            extraData={this.state}
            data={this.props.games}
            renderItem={ (item) => {
                this.renderGame(item)
            }}
            keyExtractor={item => item.id.toString()}/>
        </View>
    ); 
  }
  renderGame = (item) => {
    return (
        <Game gameTitle={item.title} gameId={item.id} gamePictureUri={item.image}></Game>
    )
  }
}

export default GameList;

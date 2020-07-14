import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View gameId={this.props.gameId}>
        <Text> {this.props.gameTitle} </Text>
        <Image source={this.props.gamePictureURI}></Image>
      </View>
    );
  }
}

export default Game;

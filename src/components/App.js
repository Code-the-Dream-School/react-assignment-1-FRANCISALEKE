import React, {Component} from 'react';
// import Board from './Board';
import Info from './Info';
import Header from './Header';

class Game extends Component {
  state = {
    showPlayers: false,
    showButton: true,
  }

  handleClick  = () => {
    let showPlayersChanged = this.state.showPlayers;
    let showButtonChanged = this.state.showButton;
    if( showPlayersChanged === false ){
      showPlayersChanged = true;
    }

    if( showButtonChanged === true ){
      showButtonChanged = false;
    }

    this.setState({
        showPlayers: showPlayersChanged,
        showButton: showButtonChanged
      });
  }

  render(){
    return (
      <div className='container'>
        <Header 
          click={this.handleClick}
          showButton={this.state.showButton}/>
    {/* <Board />*/}
        {this.state.showPlayers ? <Info /> : null} 
      </div>
    );
  }
}

export default Game;

import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class Player extends Component {
	constructor(props) {
    super(props);
    this.state = {songUrl:null};
  };

  onStart  = () => {
    const songId = this.props.song._id;
    Meteor.call('beginPlaying', songId);
    /*this.setState({
        songUrl: this.props.coming.url
      })*/
  };

  onEnded = () => {
    const songId = this.props.song._id;
    const status = "done";
    Meteor.call('changeStatus', songId, status);
    this.setState({
        songUrl: this.props.coming.url
      })
  };

  playFirstSong = () => {
  	const songUrl = this.props.song.url,
          songId = this.props.song._id;
  	this.setState({songUrl});
    //Meteor.call('beginPlaying', songId);
  }

  render () {
  	const { songUrl } = this.state;

    return (
    	<div>
    		<ReactPlayer
					url= {songUrl}
					playing
          onStart={this.onStart}
          onEnded={this.onEnded}
				/>
				{songUrl ?
					songUrl
					:
					<button type="button" onClick={this.playFirstSong}>Comenzar</button>
				}
    	</div>
    	)
  }

}
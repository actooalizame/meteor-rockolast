import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class Player extends Component {
	constructor(props) {
    super(props);
    this.state = {songUrl:null};
  };

  onStart  = () => {
    const songId = this.props.song._id;
    const status = 'playing'
    Meteor.call('changeStatus',songId,status);
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
  	const songUrl = this.props.song.url;
  	this.setState({songUrl});
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
import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class Player extends Component {
	constructor(props) {
    super(props);
    this.state = {muted: true};
    this.state = {songUrl:null};
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
  	this.setState({songUrl})
  }
  

  render () {
  	const { songUrl } = this.state;

    return (
    	<div>
    		<ReactPlayer
					url= {songUrl}
					playing
          onEnded={this.onEnded}
				/>
				{songUrl ?
					null
					:
					<button type="button" onClick={this.playFirstSong}>Comenzar</button>
				}
				
    	</div>
    	
    	)
    	
  }

}
import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class Player extends Component {
	constructor(props) {
    super(props);
    this.state = {songUrl:null};
  };

  onStart  = () => {
    const songId = this.props.song._id;
    const status = 'done'
    Meteor.call('changeStatus',songId,status);
    let nextData = {
      name: this.props.song.name,
      artist: this.props.song.artist,
      album: this.props.song.album,
      year: this.props.song.year,
      picture: this.props.song.picture,
      votes: this.props.song.votes
    }
    Meteor.call('newPlayedSong', nextData);
  };



  onEnded = () => {
    const songId = this.props.song._id;
    const status = "done";
    Meteor.call('changeStatus', songId, status);
    let nextData = {
      name: this.props.coming.name,
      artist: this.props.coming.artist,
      album: this.props.coming.album,
      year: this.props.coming.year,
      picture: this.props.coming.picture,
      votes: this.props.coming.votes
    }
    Meteor.call('newPlayedSong', nextData);
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
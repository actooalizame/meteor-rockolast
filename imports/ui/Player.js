import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class Player extends Component {
	constructor(props) {
    super(props);
    this.state = {muted: true};
    this.state = {duration: 0};
    this.state = {played: null};
    this.state = {songUrl:null};
  };


	onDuration = (duration) => {
    this.setState({ duration })
  };

  onProgress = (playedSeconds) => {
  	const duration = this.state.duration;

  	let played = Math.floor(playedSeconds.playedSeconds);
	  this.setState({played})
    let remaining = duration - played;
    if(remaining===2){
    	this.setState({
    		songUrl: 'https://www.youtube.com/watch?v=XqqWiA-WZs8'
    	})
    }
  };

  playFirstSong = () => {
  	const songUrl = this.props.song.url;
  	this.setState({songUrl})
  }
  

  render () {
  	const { duration,songUrl } = this.state;

    return (
    	<div>
    		<ReactPlayer
					url= {songUrl}
					playing
					onDuration={this.onDuration}
					onProgress={this.onProgress}
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
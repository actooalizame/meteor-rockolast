import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class Player extends Component {
	constructor(props) {
    super(props);
    this.state = {muted: false};
    this.state = {played: 0};
    this.state = {duration: 0};
    this.state = {played: null};
    this.state = {songUrl: 'https://www.youtube.com/watch?v=kfchvCyHmsc'};
  };


  onReady = () => {
  	console.log(this.props.song)

  }

	onDuration = (duration) => {
    this.setState({ duration })
    //console.log(this.props.song)
  }

  onProgress = (playedSeconds) => {
  	const duration = this.state.duration;

  	let played = Math.floor(playedSeconds.playedSeconds);
	  this.setState({played})
    let remaining = duration - played;
    if(remaining===2){
    	this.setState({
    		songUrl: 'https://www.youtube.com/watch?v=XqqWiA-WZs8'
    	})
    	//console.log(this.props.songs.url);
    }
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
					onReady={this.onReady}
				/>
				<h4>{duration}</h4>
    	</div>
    	
    	)
    	
  }

}
import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import PlayerContainer from '../imports/ui/PlayerContainer';


Meteor.startup(function (){
	let coki = <PlayerContainer/>
	ReactDOM.render(coki, document.getElementById('app'));
});
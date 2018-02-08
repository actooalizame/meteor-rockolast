import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import {Songs}  from '../api/songs';
import Player from './Player';

export default createContainer(() => {
  Meteor.subscribe('winnerSong');
  const song = Songs.findOne();

  return { song };
}, Player);
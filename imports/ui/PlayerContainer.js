import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import {Songs}  from '../api/songs';
import Player from './Player';

export default createContainer(() => {
  Meteor.subscribe('songs.allIdle');
  const song = Songs.findOne({status:'idle'}, {sort: {votes: -1}});
  const coming = Songs.find({status:'idle'}, {sort: {votes: -1}, limit: 1}).fetch().pop();
  return {
    song,
    coming
  };
}, Player);
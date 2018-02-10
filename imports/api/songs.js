import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Songs = new Mongo.Collection('songs');

if (Meteor.isServer){
	Meteor.publish('songs.allIdle', () => {
	  return Songs.find({status:'idle'})
	});
}

Meteor.methods({
  changeStatus(songId, status) {
    check(songId, String);
    check(status, String);
    Songs.update(songId, {
      $set: {
        status,
        votes: 0,
        playing: false
      }
    });
  },
  beginPlaying(songId) {
    check(songId, String);
    Songs.update(songId, {
      $set: {
        playing: true
      }
    });
  },
  'voteSong': function(selectedSongId){
    Songs.update(
      { _id: selectedSongId },
      { $inc: { votes: 1} }
    );
  },
});
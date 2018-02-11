import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Songs = new Mongo.Collection('songs');

if (Meteor.isServer){
	Meteor.publish('songs.allIdle', () => {
	  return Songs.find({status:'idle'})
	});
  Meteor.publish('songs.allDone', () => {
    return Songs.find({status:'done'})
  });
}

Meteor.methods({
  beginPlaying(songId,status) {
    check(songId, String);
    Songs.update(songId, {
      $set: {
        status,
        //playing: true
      }
    });
  },
  'voteSong': function(selectedSongId){
    Songs.update(
      { _id: selectedSongId },
      { $inc: { votes: 1} }
    );
  },
  changeStatus(songId, status) {
    check(songId, String);
    check(status, String);
    Songs.update(songId, {
      $set: {
        status,
      }
    });
  },
  
});
import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { ValidatedMethod } from 'meteor/mdg:validated-method';


export const Songs = new Mongo.Collection('songs');
export const CurrentSongs = new Mongo.Collection('currentSongs');

if (Meteor.isServer){
	Meteor.publish('songs.allIdle', () => {
	  return Songs.find({status:'idle'})
	});
  Meteor.publish('songs.allDone', () => {
    return Songs.find({status:'done'})
  });
   Meteor.publish('currentSongs.playing', () => {
    return CurrentSongs.find({}, {sort: {createdAt: -1}, limit: 1})
  });
   Meteor.publish('currentSongs.limited', () => {
    return CurrentSongs.find({}, {fields:{_id:1,name:1}}, {sort: {createdAt: -1}, limit: 1})
  });
}

export const beginPlaying = new ValidatedMethod({
  name: 'beginPlaying', // DDP method name
  //mixins, // Method extensions
  validate: null, // argument validation
  //applyOptions, // options passed to Meteor.apply
  run ({songId,status}) {
    Songs.update(songId, {
      $set: {
        status: status
      }
    });
    if (Meteor.isServer){
      console.log(this.connection.clientAddress);
    }
  }
});

export const voteSong = new ValidatedMethod({
  name: 'voteSong', // DDP method name
  //mixins, // Method extensions
  validate: null, // argument validation
  //applyOptions, // options passed to Meteor.apply
  run ({selectedSongId}) {
    Songs.update(
      { _id: selectedSongId },
      { $inc: { votes: 1} }
    );
    if (Meteor.isServer){
      console.log(this.connection.clientAddress);
    }
  }
});

Meteor.methods({
  /*beginPlaying(songId,status) {
    check(songId, String);
    Songs.update(songId, {
      $set: {
        status,
      }
    });
  },*/
  /*'voteSong': function(selectedSongId){
    Songs.update(
      { _id: selectedSongId },
      { $inc: { votes: 1} }
    );
  },*/
  changeStatus(songId, status) {
    check(songId, String);
    check(status, String);
    Songs.update(songId, {
      $set: {
        status,
      }
    });
  },
  
  'newPlayedSong': function(nextData){
    let timestamp = (new Date()).getTime();
    CurrentSongs.insert({
      name: nextData.name,
      artist: nextData.artist,
      album: nextData.album,
      year: nextData.year,
      picture: nextData.picture,
      votes: nextData.votes,
      createdAt: new Date(timestamp)
    });
  },
});
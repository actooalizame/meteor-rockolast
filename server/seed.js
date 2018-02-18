import {Meteor} from 'meteor/meteor';
import {Songs} from '../imports/api/songs';
import {CurrentSongs} from '../imports/api/songs';

Meteor.startup(function () {
  if (Songs.find({}).count() === 0) {
    var data = JSON.parse(Assets.getText('songs-3.json'));
      data.forEach(function (item, index, array) {
            Songs.insert(item);
        });
  }
  if (CurrentSongs.find().count() === 0  ) {
    let timestamp = (new Date()).getTime();
    
    CurrentSongs.insert({
      name: 'Dont Cry',
      artist: 'Guns N Roses',
      album: 'Use Your Illusion I',
      year: '1991',
      picture: 'https://static1.squarespace.com/static/54481c8fe4b0a9431d5d27fe/t/57adf18e20099e7a10ae56e9/1471017360936/',
      createdAt: new Date(timestamp),
      votes: 0
    });
  }
});
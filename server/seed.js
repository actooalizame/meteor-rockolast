import {Meteor} from 'meteor/meteor';
import {Songs} from '../imports/api/songs';

/*Meteor.startup(function(){
	/*if (Songs.find().count() === 0	) {
    let timestamp = (new Date()).getTime();
    
    Songs.insert({
    	name: 'Dont Cry',
artist: 'Guns N Roses',
album: 'Use Your Illusion I',
year: '1991',
url: 'https://www.youtube.com/watch?v=zRIbf6JqkNc',
picture: 'https://static1.squarespace.com/static/54481c8fe4b0a9431d5d27fe/t/57adf18e20099e7a10ae56e9/1471017360936/',
createdAt: new Date(timestamp),
status: 'idle',
votes: 0
    });
  }
  if (Songs.find({}).count() == 1) {
    var data = JSON.parse(Assets.getText('songs.json'));
    data.forEach(function (item, index, array) {
          Songs.insert(item);
      });
  	}
	});
});*/

Meteor.startup(function () {
  if (Songs.find({}).count() == 1) {
    var data = JSON.parse(Assets.getText('songs.json'));
      data.forEach(function (item, index, array) {
            Songs.insert(item);
        });
  }
});
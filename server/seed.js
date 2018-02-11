import {Meteor} from 'meteor/meteor';
import {Songs} from '../imports/api/songs';

Meteor.startup(function(){
	if (Songs.find().count() === 3	) {
    let timestamp = (new Date()).getTime();
    
    Songs.insert({
    	name: 'Gato huevo',
artist: 'Bob Dylan',
album: 'New Morning',
year: '1970',
url: 'https://www.youtube.com/watch?v=wNPLrzqOG_A' ,
picture: 'https://cdn-s3.allmusic.com/release-covers/500/0000/102/0000102656.jpg',
createdAt: new Date(timestamp),
status: 'idle',
votes: 0
    });
    
  }
});
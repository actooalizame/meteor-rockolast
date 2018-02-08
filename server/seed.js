import {Meteor} from 'meteor/meteor';
import {Songs} from '../imports/api/songs';

Meteor.startup(function(){
	if (Songs.find().count() === 0) {
    let timestamp = (new Date()).getTime();
    
    Songs.insert({
      url: 'https://www.youtube.com/watch?v=jN6haHYehg8',
      createdAt: new Date(timestamp),
      status: 'virgin'
    });
    
  }
});
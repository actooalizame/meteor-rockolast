import {Meteor} from 'meteor/meteor';
import {Songs} from '../imports/api/songs';

Meteor.startup(function(){
	if (Songs.find().count()  === 2) {
    let timestamp = (new Date()).getTime();
    
    Songs.insert({
      url: 'https://www.youtube.com/watch?v=j_kKMtPcYuQ' ,
      createdAt: new Date(timestamp),
      status: 'idle',
      votes: 5
    });
    
  }
});
import {Meteor} from 'meteor/meteor';
import {Songs} from '../imports/api/songs';

Meteor.startup(function(){
	if (Songs.find().count() === 3	) {
    let timestamp = (new Date()).getTime();
    
    Songs.insert({
    	name: 'Bloopers Comp',
artist: 'Bob Dylan',
album: 'Highway 61 Revisited',
year: '1965',
url: 'https://www.youtube.com/watch?v=uth-8cr4XFc' ,
picture: 'https://kxci.org/wp-content/uploads/2015/08/Bob_Dylan_-_Highway_61_Revisited.jpg',
createdAt: new Date(timestamp),
status: 'idle',
votes: 0
    });
    
  }
});
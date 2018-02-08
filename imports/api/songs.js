import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Songs = new Mongo.Collection('songs');

if (Meteor.isServer)(
	/*Meteor.publish('allSongs', () => {
		return Songs.find();
	})*/
	Meteor.publish('winnerSong', () => {
		return Songs.find({status:'idle'}, {sort: {votes: -1}})
	})
)
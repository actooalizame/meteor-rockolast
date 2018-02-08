import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Songs = new Mongo.Collection('songs');

if (Meteor.isServer)(
	Meteor.publish('songs', () => {
		return Songs.find();
	})
)
import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';


Meteor.startup(function (){
 let coki = <h1>Hola Cok!</h1>
 ReactDOM.render(coki, document.getElementById('app'));
});
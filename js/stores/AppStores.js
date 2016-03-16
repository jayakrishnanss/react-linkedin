import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign'; 

var CHANGE_EVENT = 'change';
var users = [];

var AppStore = assign({},EventEmitter.prototype,{
	emitLogin:function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener:function(callback){
		this.addListener(CHANGE_EVENT, callback)
	},
	removeChangeListener:function(callback){
	   this.removeListener(CHANGE_EVENT, callback)
	},
	getUser:function(){
		return users;
	}
});

AppDispatcher.register(function(payload){
	this.firebaseRef = new Firebase('https://linkedintest.firebaseio.com/');
	this.firebaseRef.once('value',function(snapshot){
		users = [];
		snapshot.forEach(function(data){
			users.push(data.val());
		})
		AppStore.emitLogin();
	});
	return true;
});

export default AppStore;
import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign'; 

var CHANGE_EVENT = 'change';
var LOAD_EVENT = 'load';
var getMessages = [];
var PostMessageStore = assign({},EventEmitter.prototype,{
	emitPostMessage:function(){
		this.emit(CHANGE_EVENT);
	},
	emitGetMessage:function(){
		this.emit(LOAD_EVENT);
	},
	addChangeListener:function(callback){
		this.addListener(CHANGE_EVENT, callback)
	},
	removeChangeListener:function(callback){
	   this.removeListener(CHANGE_EVENT, callback)
	},
	addLoadListener:function(callback){
		this.addListener(LOAD_EVENT, callback)
	},
	removeLoadListener:function(callback){
	   this.removeListener(LOAD_EVENT, callback)
	},
	getMessageList:function(){
		return getMessages;
	}
});

AppDispatcher.register(function(payload){
	switch(payload.type){

		case 'POST_MESSAGE' :
		this.firebaseRef = new Firebase('https://reactlinkedin.firebaseio.com/Message');
		var newMessageRef = this.firebaseRef.push();
		newMessageRef.set({ 'id': newMessageRef.key(), 'title': payload.data.title, 'message': payload.data.message, 'time': new Date().toString().replace(/\sGMT.*$/, "")});
		PostMessageStore.emitPostMessage();
		break;

		case 'GET_MESSAGE':
  		this.firebaseRef = new Firebase('https://reactlinkedin.firebaseio.com/Message');
  		this.firebaseRef.once('value',function(snapshot){
  	    var data;
        snapshot.forEach(function(message){
			data = message.val();
	        getMessages.push(data);
        })
  			PostMessageStore.emitGetMessage();
  		});
		break;

	}
});
export default PostMessageStore;
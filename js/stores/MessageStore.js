import AppDispatcher from '../dispatcher/AppDispatcher'
import {EventEmitter} from 'events';
import assign from 'object-assign'; 

var HOVER_EVENT = 'hover'
var _messages = []

var MessageStore = assign({},EventEmitter.prototype,{
	emitHover:function(){
		this.emit(HOVER_EVENT);
	},
	addHoverListener:function(callback){
		this.addListener(HOVER_EVENT, callback)
	},
	removeHoverListener:function(callback){
	   this.removeListener(HOVER_EVENT, callback)
	},
	getMessages:function(){
		return _messages;
	}
});

AppDispatcher.register(function(payload){
	switch(payload.type)
	{
		case 'ON_HOVER':
		 	for(var i=0;i<_messages.length;i++){
		 		_messages.pop()
		 	}
			_messages.push("no messages")
			MessageStore.emitHover();
		break;
	}
	
	return true;
});

export default MessageStore;
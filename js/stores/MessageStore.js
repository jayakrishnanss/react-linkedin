import AppDispatcher from '../dispatcher/AppDispatcher'
import {EventEmitter} from 'events';
import assign from 'object-assign'; 

var HOVER_EVENT = 'hover'
var _messages = []

var MessageStore = assign({},EventEmitter.prototype,{
	emitHover:function(){
		this.emit(HOVER_EVENT)
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
		case 'ON_MESSAGE_ICON_HOVER':
		 	var firebaseRef = new Firebase('https://linkedinmessages.firebaseio.com/');

		 	firebaseRef.once('value',function(record){
		 		for(var i=0,j=_messages.length;i<j;i++){
		 			_messages.pop()
		 		}
		 		record.forEach(function(data){
		 			if(data)
						_messages.push({id:data.val().id,from:data.val().from, head:data.val().head, message:data.val().message,
										timestamp:data.val().timestamp});
					else
						"no messages"
				})
				sessionStorage.setItem("messages", JSON.stringify(_messages))
				MessageStore.emitHover();
		 	});
		break;
	}
	
	return true;
});

export default MessageStore;
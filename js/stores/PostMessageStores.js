import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign'; 

var CHANGE_EVENT = 'change';

var PostMessageStore = assign({},EventEmitter.prototype,{
	emitPostMessage:function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener:function(callback){
		this.addListener(CHANGE_EVENT, callback)
	},
	removeChangeListener:function(callback){
	   this.removeListener(CHANGE_EVENT, callback)
	}
});

AppDispatcher.register(function(payload){
	switch(payload.type){
		case 'POST_MESSAGE' :
		this.firebaseRef = new Firebase('https://reactlinkedin.firebaseio.com/Message');
		var newMessageRef = this.firebaseRef.push();
		newMessageRef.set({ 'title': payload.data.title, 'message': payload.data.message });
		PostMessageStore.emitPostMessage();
		break;
	}
});
export default PostMessageStore;
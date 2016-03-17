import {EventEmitter} from 'events';
import assign from 'object-assign'; 

var HOVER_EVENT = 'hover'
var _messages = []
var MessageStore = assign({},EventEmitter.prototype,{
	emitHover:function(){
		this.emit(HOVER_EVENT);
	},
	addChangeListener:function(callback){
		this.addListener(HOVER_EVENT, callback)
	},
	removeChangeListener:function(callback){
	   this.removeListener(HOVER_EVENT, callback)
	},
	getMessages:function(){
		return _messages;
	}
});

export default MessageStore
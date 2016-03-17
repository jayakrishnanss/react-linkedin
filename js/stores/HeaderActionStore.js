import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign'; 

var HEADER_CLICK_EVENT = 'Click_Header_Menu';
var users = [];

var HeaderStore = assign({},EventEmitter.prototype,{
	emitHeaderMenuEvent:function(selectedItem){
		this.emit(HEADER_CLICK_EVENT,selectedItem);
	},
	addChangeListener:function(callback){
		this.addListener(HEADER_CLICK_EVENT, callback)
	},
	removeChangeListener:function(callback){
	   this.removeListener(HEADER_CLICK_EVENT, callback)
	},
	getUser:function(){
		return users;
	}
});

AppDispatcher.register(function(payload){
	switch(payload.type)
	{
		case 'CLICK_HEADER_MENU':

			HeaderStore.emitHeaderMenuEvent(payload.item);

		break;
	}
	
	return true;
});

export default HeaderStore;
import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign'; 


var PostMessageStore = assign({},EventEmitter.prototype,{

});

AppDispatcher.register(function(payload){
	switch(payload.type){
		case 'POST_MESSAGE' :
		debugger;
		this.firebaseRef = new Firebase('https://reactlinkedin.firebaseio.com');

		break;
	}
});
export default PostMessageStore;
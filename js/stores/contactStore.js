import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign';

var CHANGE_EVENT = 'change';
var users = [];

var ContactStore = assign({},EventEmitter.prototype,{
    emitAddContact:function(){
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
	switch(payload.type)
	{
    	case 'ADD_CONTACT':
    		var firebaseRef = new Firebase('https://sample-app2.firebaseio.com');
            firebaseRef.push({text:'test'});
            break;
        case 'GET_USERS':
    		this.firebaseRef = new Firebase('https://sample-app2.firebaseio.com/Contact');
    		this.firebaseRef.once('value',function(snapshot){
    			users = [];
    			snapshot.forEach(function(data){
    				users.push(data.val());
    			})
    			ContactStore.emitAddContact(users);
    		});
            break;
	}

	return true;
});

export default ContactStore;

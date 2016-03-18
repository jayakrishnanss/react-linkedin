import AppDispatcher from '../dispatcher/AppDispatcher';
import AppActions from '../actions/AppActions';
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
    		var firebaseRef = new Firebase('https://sample-app2.firebaseio.com/Contact');
            firebaseRef.push(payload.item);
            AppActions.getUsers('get_users');
            break;

        case 'DELETE_CONTACT':
    		var firebaseRef = new Firebase('https://sample-app2.firebaseio.com/Contact');
            firebaseRef.on('value',function(snapshot){
    			snapshot.forEach(function(data){
                    var user = data.val();
    				if (user.name == payload.item) {
                        firebaseRef.child(data.name()).remove();
    				}
    			})
                AppActions.getUsers('get_users');
    		});
            break;

        case 'GET_USERS':
    		var firebaseRef = new Firebase('https://sample-app2.firebaseio.com/Contact');
    		firebaseRef.on('value',function(snapshot){
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

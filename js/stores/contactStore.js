import AppDispatcher from '../dispatcher/AppDispatcher';
import AppActions from '../actions/AppActions';
import {EventEmitter} from 'events';
import assign from 'object-assign';

var CHANGE_EVENT = 'change';
var users = [],
    newUsers = [];

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
   },
   getNewUser:function(){
       return newUsers;
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

        case 'UPDATE_CONTACT':
            var firebaseRef = new Firebase('https://sample-app2.firebaseio.com/Contact');
            firebaseRef.on('value',function(snapshot){
                snapshot.forEach(function(data){
                    var user = data.val();
                    debugger;
                    if (user.id == payload.item.id) {
                        firebaseRef.child(data.name()).update(payload.item);
                    }
                })
                AppActions.getUsers('get_users');
            });
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
        case 'GET_NEW_USERS':
            var first = true;
    		var firebaseRef = new Firebase('https://sample-app2.firebaseio.com/Contact');
            newUsers = [];
            for (var i = 1; i <= 3; i++) {
                firebaseRef.limitToLast(i).on("child_added", function(snap) {
                    newUsers.push(snap.val());
                });
            ContactStore.emitAddContact(newUsers);
            }
            break;
	}

	return true;
});

export default ContactStore;

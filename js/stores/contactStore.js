import AppDispatcher from '../dispatcher/AppDispatcher';
import AppActions from '../actions/AppActions';
import {EventEmitter} from 'events';
import assign from 'object-assign';

var CHANGE_EVENT = 'change';
var GET_ALL_USER_EVENT = 'get_all_user';
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
    getNewUser:function(){
       return newUsers;
    },
    emitGetAllUsers:function(){
       this.emit(GET_ALL_USER_EVENT);
    },
    addGetAllUserListener:function(callback){
       this.addListener(GET_ALL_USER_EVENT, callback)
    },
    removeGetAllUserListener:function(callback){
      this.removeListener(GET_ALL_USER_EVENT, callback)
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
    			ContactStore.emitGetAllUsers(users);
                console.log(users);
                debugger;
    		});
            break;
        case 'GET_NEW_USERS':
            var first = true;
    		var firebaseRef = new Firebase('https://sample-app2.firebaseio.com/Contact');
            newUsers = [];
            firebaseRef.on('value', function(snapshot){
                firebaseRef.limitToLast(3).on("child_added", function(snap) {
                    newUsers.push(snap.val());
                });
                ContactStore.emitAddContact(newUsers);
            });
            break;
        case 'CLICK_HEADER_MENU':
            debugger;
            ContactStore.emitGetAllUsers();
            break;
	}

	return true;
});

export default ContactStore;

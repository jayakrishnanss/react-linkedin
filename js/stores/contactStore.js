import AppDispatcher from '../dispatcher/AppDispatcher';
import AppActions from '../actions/AppActions';
import {EventEmitter} from 'events';
import assign from 'object-assign';

var CHANGE_EVENT = 'change';
var GET_ALL_USER_EVENT = 'get_all_user';
var users = [],
    newUsers = [],
    firebaseRef = new Firebase('https://sample-app2.firebaseio.com/Contact');

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
            firebaseRef.push(payload.item);
            break;

        case 'UPDATE_CONTACT':
            firebaseRef.on('value',function(snapshot){
                snapshot.forEach(function(data){
                    var user = data.val();
                    if (user.id == payload.item.id) {
                        firebaseRef.child(data.name()).update(payload.item);
                    }
                })
            });
            break;

        case 'DELETE_CONTACT':
            firebaseRef.on('value',function(snapshot){
    			snapshot.forEach(function(data){
                    var user = data.val();
    				if (user.name == payload.item) {
                        firebaseRef.child(data.name()).remove();
    				}
    			})
    		});
            break;

        case 'GET_USERS':
    		firebaseRef.on('value',function(snapshot){
    			users = [];
    			snapshot.forEach(function(data){
    				users.push(data.val());
    			})
    			ContactStore.emitGetAllUsers(users);
                console.log('All Users :- ' +users);
    		});
            break;
        case 'GET_NEW_USERS':
            var first = true;
            newUsers = [];
            firebaseRef.on('value', function(snapshot){
                firebaseRef.limitToLast(3).on("child_added", function(snap) {
                    newUsers.push(snap.val());
                });
                ContactStore.emitAddContact(newUsers);
            });
            break;
	}

	return true;
});

export default ContactStore;

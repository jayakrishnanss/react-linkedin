import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign'; 
import Login from '../modules/login.jsx';

var CHANGE_EVENT = 'change';
var loggedUser = [];

var LoginStore = assign({},EventEmitter.prototype,{
	emitLogin:function(){
		this.emit(CHANGE_EVENT,loggedUser);
	},
	addChangeListener:function(callback){
		this.addListener(CHANGE_EVENT, callback)
	},
	removeChangeListener:function(callback){
	   this.removeListener(CHANGE_EVENT, callback)
	},
	getLoggedUser:function(){
		return loggedUser;
	}
});

AppDispatcher.register(function(payload){
	switch(payload.type)
	{
		case 'CLICK_LOGIN':

		this.firebaseRef = new Firebase('https://reactlinkedin.firebaseio.com/Users');
		this.firebaseRef.once('value',function(snapshot){
			loggedUser = [];
			snapshot.forEach(function(data){
				var user = data.val();
				if(user.username === payload.data.uname && user.password === payload.data.pword){
					//redirect to home page
					console.log('login success');
					loggedUser.push(user);
					return true;
				}
			})
			LoginStore.emitLogin(loggedUser);
		});

		break;
	}
	
});

export default LoginStore;
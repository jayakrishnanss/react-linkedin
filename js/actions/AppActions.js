import AppDispatcher from '../dispatcher/AppDispatcher';

var AppActions = {
	clickLogin:function(item){
		AppDispatcher.dispatch({
	      type: 'CLICK_ITEM',
	      item: item
	    });
	},
	addContactClick : function(item){
		AppDispatcher.dispatch({
			type: 'ADD_CONTACT',
			item: item
	    });
	},
	deleteContactClick : function(item){
		AppDispatcher.dispatch({
			type: 'DELETE_CONTACT',
			item: item
	    });
	},
	updateContact : function(item){
		AppDispatcher.dispatch({
			type: 'UPDATE_CONTACT',
			item: item
	    });
	},
	getUsers : function(item){
		AppDispatcher.dispatch({
			type: 'GET_USERS',
			item: item
		});
	},
	getNewUsers : function(item){
		AppDispatcher.dispatch({
			type: 'GET_NEW_USERS',
			item: item
		});
	},
	login:function(data){
		AppDispatcher.dispatch({
	      type: 'CLICK_LOGIN',
	      data: data
	    });
	},
	hover:function(){
		AppDispatcher.dispatch({
			type: 'ON_MESSAGE_ICON_HOVER'
		})
	},
	postMessage:function(data){
		AppDispatcher.dispatch({
	      type: 'POST_MESSAGE',
	      data: data
	    });
	},
	getMessage:function(){
		AppDispatcher.dispatch({
	      type: 'GET_MESSAGE'
	    });
	},
	fetchProfile:function(user) {
		AppDispatcher.dispatch({
			type: 'FETCH_PROFILE',
			user: user
		})
	},
	insertSkills: function (skill) {
		AppDispatcher.dispatch({
			type: 'INSERT_SKILL',
			skill: skill
		})
	},
}

export default AppActions;

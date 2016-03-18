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
	getUsers : function(item){
		AppDispatcher.dispatch({
			type: 'GET_USERS',
			item: item
	login:function(data){
		AppDispatcher.dispatch({
	      type: 'CLICK_LOGIN',
	      data: data
	    });
	}
}

export default AppActions;

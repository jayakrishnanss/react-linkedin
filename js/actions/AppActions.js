import AppDispatcher from '../dispatcher/AppDispatcher';
//import AppContants from '../constants/AppContants';

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
	    });
	}
}

export default AppActions;

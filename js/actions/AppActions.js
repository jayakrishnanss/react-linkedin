import AppDispatcher from '../dispatcher/AppDispatcher';

var AppActions = {
	clickLogin:function(item){
		AppDispatcher.dispatch({
	      type: 'CLICK_ITEM',
	      item: item
	    });
	},
	login:function(data){
		AppDispatcher.dispatch({
	      type: 'CLICK_LOGIN',
	      data: data
	    });
	},
	postMessage:function(data){
		AppDispatcher.dispatch({
	      type: 'POST_MESSAGE',
	      data: data
	    });
	}
}

export default AppActions;
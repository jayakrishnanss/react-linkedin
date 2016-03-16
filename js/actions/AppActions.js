import AppDispatcher from '../dispatcher/AppDispatcher';
//import AppContants from '../constants/AppContants';

var AppActions = {
	clickLogin:function(item){
		AppDispatcher.dispatch({
	      type: 'CLICK_ITEM',
	      item: item
	    });
	}
}

export default AppActions;
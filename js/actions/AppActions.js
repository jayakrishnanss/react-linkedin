import AppDispatcher from '../dispatcher/AppDispatcher';
//import AppContants from '../constants/AppContants';

var AppActions = {
	clickLogin:function(item){
		AppDispatcher.handleViewAction({
			actionType:'CLICK_ITEM',
			item:item
		})
	}
}

export default AppActions;
import AppDispatcher from '../dispatcher/AppDispatcher';

var HeaderActions = {
	clickHeaderMenu:function(menu){
		AppDispatcher.dispatch({
	      type: 'CLICK_HEADER_MENU',
	      item: menu
	    });
	}
}

export default HeaderActions;
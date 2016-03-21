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

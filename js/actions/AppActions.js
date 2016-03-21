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
	fetchProfile: function(user) {
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
	}
}

export default AppActions;

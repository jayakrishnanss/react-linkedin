import { Dispatcher } from 'flux';
import assign from 'object-assign'; 

var AppDispatcher = assign(new Dispatcher(),{
	handleViewAction: function (action) {
		this.dispatch({
			source:'USER_LOGIN',
			action:action
		});
	}
});

export default AppDispatcher;
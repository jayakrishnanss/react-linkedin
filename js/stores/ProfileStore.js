import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign';

var CHANGE_EVENT = 'change';

var skills = [];

var ProfileStore = assign({},EventEmitter.prototype,{
	emitProfile:function(){
		this.emit(CHANGE_EVENT);
	},
  addFetchListener:function(callback){
    this.addListener(CHANGE_EVENT, callback)
  },
  removeFetchListener:function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },
  emitSkill: function() {
    this.emit(CHANGE_EVENT);
  },
	getUser:function(){
		return skills;
	}
});

AppDispatcher.register(function(payload){
	switch(payload.type)
	{
		case 'FETCH_PROFILE':
  		var firebaseRef = new Firebase('https://profileforlinkedin.firebaseio.com/');
  		firebaseRef.once('value',function(snapshot){
        snapshot.val()[0].skills.forEach(function(skill){
          skills.push(skill);
        })
  		ProfileStore.emitProfile();
  		});
		break;

    case 'INSERT_SKILL':
      var firebaseRef = new Firebase('https://profileforlinkedin.firebaseio.com');
      var ref = firebaseRef.child('0');
      ref.push(
        payload.skill
      );
      ProfileStore.emitProfile();
    break;

	}

	return true;
});

export default ProfileStore;

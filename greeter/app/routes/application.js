import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return Ember.$.get('127.0.0.1/contacts?firstname=josh&lastname=gould');
  },
  actions:{
    storeTheUsers: function(users){
      console.log(users);
    }
  }
});

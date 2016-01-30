import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return Ember.$.get('/api/v1/users.json');
  },
  actions:{
    storeTheUsers: function(users){
      console.log(users);
      //Ember.$.post('/api/v1/users', {body:users});
    }
  }
});

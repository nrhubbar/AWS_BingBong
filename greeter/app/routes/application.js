import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    console.log(Ember.$.get('Users.json'));
    return Ember.$.get('Users.json');
  }
});
